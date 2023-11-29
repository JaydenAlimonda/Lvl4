import { useContext } from 'react'
import { ThemeContext } from '../Context'

function Body() {
  const theme = useContext(ThemeContext)

 
  return (
    <body className={`body--${theme.color}`}>
        <p>
          words words words
        </p>
    </body>
  )
}

export default Body
