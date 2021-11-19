import React from "react"
import SearchForm from "components/SearchForm"
import { Helmet } from "react-helmet"
import { Link } from "wouter"

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I']

export default function ErrorPage() {
  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]}/giphy.gif`
  }

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <div className="App-searchFormContainer">
        <SearchForm />
      </div>
      <div className="Error-main">
        <span class="Error-code">404</span>
        <span class="Error-msg">Sometimes gettings lost isn't that bad</span>
        <img class="Error-gif" src={randomImage()} alt="alt-page-404" />
        <Link href='/' class="button">Go to home</Link>
      </div>
    </>
  );
}
