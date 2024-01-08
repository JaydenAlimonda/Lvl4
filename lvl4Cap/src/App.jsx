import React from 'react' //Step 1
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; //Step 2
import Home from './components/Home' // Step 8
import Details from './components/Details' // Step 10
import Rsvp from './components/Rsvp'
import { RSVPContextProvider } from './context';

export default function App() { // Step 3
    return ( 

        <Router> 

            <nav className='navBar'> 
            
                <Link to="home" className='navLink' > 
                Home
                </Link> 
                <Link to="/details" className='navLink'> 
                Details
                </Link>
                <Link to="/rsvp" className='navLink'> 
                RSVP
                </Link>
            </nav> 
            
            <Routes> 
            
                <Route path ="/home" element={<Home />} />
                <Route path ="/details" element={<Details />} />
                <Route path='/rsvp' element={
                <RSVPContextProvider>
                <Rsvp />
                </RSVPContextProvider>
                } />
             </Routes> 
        
        </Router> 
    ); 
  } 
