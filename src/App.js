import React from 'react'
import './App.css'
import { Link, Route } from "wouter"
import Home from "./pages/Home"
import SearchResult from "./pages/SearchResult"
import Detail from "./pages/Detail"
import logo from './giffy_logo.png'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

//! Seo con React min 50:30

export default function App() {
  return (
    <StaticContext.Provider value={{
      name: 'Borja',
      sub: true
    }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" src={logo} alt="Logo" />
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResult} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/404" component={() => <h1>404 Error</h1>} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}
