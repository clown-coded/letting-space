import { useState } from 'react'
import { HashRouter } from 'react-router-dom'

import './App.css'
import Nav from './components/nav/Nav'
import Links from './Links'
import Cursor from './components/Cursor'

function App() {


  return (
    <HashRouter>
    
      <Nav />
      <Links/>
      <Cursor/>
      </HashRouter>
  )
}

export default App
