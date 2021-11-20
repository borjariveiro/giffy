import React from "react";
import { Link, useRoute } from "wouter";
import useUser from "hooks/useUser";
import './Header.css'

export default function Header() {
  const { isLogged, logout } = useUser()
  const [match] = useRoute("/login")

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  const rederLoginButtons = ({ isLogged }) => {
    return isLogged
      ? <Link href='#' onClick={handleClick}>
        Sing out
      </Link>
      : <>
        <Link to='/login'>
          Sign in
        </Link>
        <Link to='/register'>
          Sing up
        </Link>
      </>
  }

  const content = match
    ? null : rederLoginButtons({ isLogged })


  return (
    <header className="Header">
      <div className="Header-content">
        {content}
      </div>
    </header>
  )
}
