import React, { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import useUser from "hooks/useUser";
import './Form-sign.css'


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
        <>
          <div className="Form-sign-container">
            <form className="Form-sign" onSubmit={handleSubmit}>
              <label>
                Username
                <input
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
                />
              </label>

              <button className="button">Sign in</button>
            </form>
          </div>
          <div className="Form-linkSingUp">
            <span>Don't have an account? <Link href="/register">Create one</Link></span>
          </div>
        </>
      }

      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  )
}
