import React from 'react'
import { Redirect } from 'wouter'
import Gif from 'components/Gif'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'components/Spinner'
import { Helmet } from 'react-helmet'
import SearchForm from 'components/SearchForm'

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  const title = gif ? gif.title : ''


  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    )
  }
  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return <>
    <Helmet>
      <title>{title} | Giffy</title>
    </Helmet>
    <div className="App-searchFormContainer">
      <SearchForm />
    </div>
    <div className="App-wrapper">
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </div>

  </>
}
