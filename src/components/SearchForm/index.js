import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";

const RATNIGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
  const [path, pushLocation] = useLocation()


  const { keyword, rating, times, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })

  const handleChange = evt => {
    updateKeyword(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = evt => {
    updateRating(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button className="btn">Buscar</button>
      <input placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword} />
      <select value={rating} onChange={handleChangeRating}>
        {RATNIGS.map(rating => <option key={rating}>{rating}</option>)}
      </select>
    </form>

  )
}

export default React.memo(SearchForm)
