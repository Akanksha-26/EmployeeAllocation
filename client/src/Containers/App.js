import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './HomePage/index'
import About from './AboutPage/index'
import './App.css'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
