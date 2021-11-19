import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import './Login.css'


export default function Login({ onLogin }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
      onLogin && onLogin()
    }
  }, [isLogged, navigate, onLogin])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ username, password })
    navigate('/')
  }

  return (
    <>
      {isLoginLoading && <strong>Checking credentials ...</strong>}
      {!isLoginLoading &&
        <form className="Form-login-register" onSubmit={handleSubmit}>
          <label>
            Username
            <input
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
          </label>

          <button className="button">Login</button>
        </form>
      }
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  )
}
