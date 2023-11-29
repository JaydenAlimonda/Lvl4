import React, {useContext} from 'react';
import { ThemeContext } from '../Context'

function Button(props) {
    
    const {color, toggleTheme} = useContext(ThemeContext)
    
    return (
        <button onClick={toggleTheme} className={`button--${color}`}>Change Theme</button>
    );
}

export default Button;