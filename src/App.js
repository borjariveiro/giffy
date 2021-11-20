import React from 'react'
import { Link, Route, Switch } from "wouter"

import Home from "pages/Home"
import SearchResult from "pages/SearchResult"
import Detail from "pages/Detail"
import Login from 'pages/Login'
import ErrorPage from 'pages/ErrorPage'
import Register from 'pages/Register'
import Header from 'components/Header'

import { UserContextProvider } from 'context/UserContext'
import { GifsContextProvider } from 'context/GifsContext'

import logo from 'giffy_logo.png'
import 'App.css'

// ! Quitar fav, styles de Header y de la modal

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
            <Switch>
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
                path="/:rest*"
                component={ErrorPage}
              />
            </Switch>
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  );
}
