
import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Footer from '../components/Footer';

export default function Home () {
    return (
    
        <BrowserRouter>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
        </BrowserRouter>
      )
}

      
     


