import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Register from '../components/Register'


const Home = () => {
    return (
        <div>
        <BrowserRouter>
      
            <Navbar /> 
    
        </BrowserRouter>
        </div>
    )
}

export default Home;
 

