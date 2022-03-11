import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';



const Home = () => {
    return (
    
        <BrowserRouter>
            <Announcement/>
            <Navbar/>
         
           
            
        </BrowserRouter>
     
    )
}

export default Home;