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
        Logout
      </Link>
      : <>
        <Link to='/login'>
          Login
        </Link>
        <Link to='/register'>
          Register
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
