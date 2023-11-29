import React, { useContext } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Nav from './components/Nav'
import {ThemeContext } from './Context'
function App() {
  const theme = useContext(ThemeContext)

  return (
    <div className={`app--container--${theme.color}`}>
      <Nav/>
      <Header/>
      <Button/>
      <Body/>
      <Footer/>
    </div>
 )
}

export default App
