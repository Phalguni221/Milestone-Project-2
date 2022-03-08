import { BrowserRouter, Link } from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'



function App() {

  return (
    <div className="App">
     <BrowserRouter>
        <header>
          <h1 className="title">Welcome to Finesse</h1>

          <div className="navBar">
              <Navbar />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Sign-In">Sign-in</Link>
              </li>
            </ul>
          </div>
        </header>
     
        <footer>
            <Footer />
        </footer>
        </BrowserRouter>
  </div>
  );
}

export default App;



