import React from 'react' //Step 1
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; //Step 2
import Home from './components/Home' // Step 8
import About from './components/About' // Step 10
import Service from './components/Service'
export default function App() { // Step 3
    return ( 

        <Router> 

            <nav className='navBar'> 
            
                <Link to="/" className='navLink' > 
                Home
                </Link> 
                <Link to="/about" className='navLink'> 
                About
                </Link>
                <Link to="/Service" className='navLink'> 
                Service
                </Link>
            </nav> 
            
            <Routes> 
            
                <Route path ="/" element={<Home />} />
                <Route path ="/about" element={<About />} />
                <Route path='/Service' element={<Service />} />
             </Routes> 
        
        </Router> 
    ); 
  } 
