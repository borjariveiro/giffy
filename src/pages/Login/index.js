import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";


export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ username, password })
    // navigate('/')
  }

  return (
    <>
      <h2>Login</h2>
      {isLoginLoading && <strong>Checking credentials ...</strong>}
      {!isLoginLoading &&
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
          <button>Login</button>
        </form>
      }
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }

    </>
  )
}
