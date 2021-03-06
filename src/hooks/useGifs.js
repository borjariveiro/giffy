import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0


export function useGifs({ keyword, rating } = { keyword: '' }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)


  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(function () {
    setLoading(true)

    getGifs({ keyword: keywordToUse, rating })
      .then(gifs => {
        setLoading(false)
        setGifs(gifs)
        localStorage.setItem('lastKeyword', keyword)
      }
      )
  }, [keyword, keywordToUse, rating, setGifs])

  useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, rating, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page, setGifs, rating])

  return { loading, loadingNextPage, gifs, setPage }
}
