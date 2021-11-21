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
      ? <Link href='#' onClick={handleClick} className="Header-signOut">
        Sing out
      </Link>
      : <>
        <Link to='/login' className="Header-signIn">
          Sign in
        </Link>
        <Link to='/register' className="Header-signUp">
          Sing up
        </Link>
      </>
  }

  const content = match
    ? null : rederLoginButtons({ isLogged })
  console.log(content)


  return (
    <header className="Header">
      <div className="Header-content">
        {content}
      </div>
    </header>
  )
}
