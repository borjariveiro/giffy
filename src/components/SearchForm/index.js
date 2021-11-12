import React, { useState } from "react";
import useLocation from "wouter/use-location";

const RATNIGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
  const [keyword, setkeyword] = useState(decodeURIComponent(initialKeyword))
  const [rating, setRating] = useState('g')
  const [path, pushLocation] = useLocation()

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = evt => {
    setkeyword(evt.target.value)
  }

  const handleChangeRating = evt => {
    setRating(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword} />
      <select value={rating} onChange={handleChangeRating}>
        {RATNIGS.map(rating => <option key={rating}>{rating}</option>)}
      </select>
    </form>
  )
}

export default React.memo(SearchForm)
