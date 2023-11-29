import { useContext } from 'react'
import { ThemeContext } from '../Context'

function Header() {
  const theme = useContext(ThemeContext)

  return (
    <>
      <h1 className={`header--${theme.color}`}>THEME THEME THEME</h1>
    </>
  )
}

export default Header
