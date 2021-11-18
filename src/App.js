import React from 'react'
import { Link, Route } from "wouter"

import Home from "pages/Home"
import SearchResult from "pages/SearchResult"
import Detail from "pages/Detail"
import Login from 'pages/Login'
import Register from 'pages/Register'
import Header from 'components/Header'


import { UserContextProvider } from 'context/UserContext'
import { GifsContextProvider } from 'context/GifsContext'

import 'App.css'
import logo from 'giffy_logo.png'

//! Login 52:40

export default function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <section className="App-content">
          <Header />
          <Link to="/">
            <img className="App-logo" src={logo} alt="Logo" />
          </Link>
          <GifsContextProvider>
            <Route
              path="/"
              component={Home}
            />
            <Route
              path="/search/:keyword/:rating?"
              component={SearchResult}
            />
            <Route
              path="/gif/:id"
              component={Detail}
            />
            <Route
              path="/login"
              component={Login}
            />
            <Route
              path="/register"
              component={Register}
            />
            <Route
              path="/404"
              component={() => <h1>404 Error</h1>}
            />
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  );
}
