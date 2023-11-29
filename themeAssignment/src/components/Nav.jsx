import {useContext} from 'react'
import { ThemeContext } from '../Context'
function Nav() {
  const theme = useContext(ThemeContext)
console.log(theme)

  return (
    <>
    <nav className={`nav--bar--${theme.color}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </nav>
    </>
  )
}

export default Nav
