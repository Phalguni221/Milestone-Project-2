import React from 'react';
import Navbar from '../components/Navbar';
import SignIn from '../components/Sign-in';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


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

