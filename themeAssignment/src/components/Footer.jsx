import { useContext } from 'react'
import { ThemeContext } from '../Context'

function Footer() {
  const theme = useContext(ThemeContext)

  return (
    <footer className={`footer--${theme.color}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a> 
    </footer>
  )
}

export default Footer
