import React from 'react';
import Navbar from './Navbar';
import './App.css'


export default function SignIn () {
  return (
  <div>
    <head>
  <Navbar />
    </head>
    <body>
    <h1>Welcome to the Sign-in page!</h1>
    <h2>If you are already a member, then please log in! 
      If you aren't a member but want to become one, please go to the sign-in page to become a new member of Finesse!</h2>
      <p>
    <button type="button" onclick="./components/Survey.jsx">Survey</button>
    <br></br>
    <button type="button" onclick="./components/Account.jsx">Account</button>
    </p>
    </body>
    <footer>
    <Footer />
    </footer>
  </div>
        
  )
}

