import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";
import './SearchForm.css'

function SearchForm({ initialKeyword = '' }) {
  const [, pushLocation] = useLocation()
  const { keyword, updateKeyword } = useForm({ initialKeyword })

  const handleChange = evt => {
    updateKeyword(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  return (
    <form onSubmit={handleSubmit} className="SearchForm-form">
      <input
        className="SearchForm-input"
        onChange={handleChange}
        placeholder="Search a gif here..."
        type="text"
        value={keyword}
      />
      <button className="button">Search</button>
    </form>

  )
}

export default React.memo(SearchForm)
