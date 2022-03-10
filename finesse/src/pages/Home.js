import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Navbar from '../components/Navbar'




const Home = () => {
    return (
    
        <BrowserRouter>
        
            <Announcement/>  


        <Slider/>
    
    
         

        </BrowserRouter>
     
    )
}

export default Home;
