import './App.css'
import Navbar from "./components/Navbar"



const Signin = () => {
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

      Want to learn more about Finesse?
      <p>
       Please email us at Finesse@gmail.com 
      <img class="img-fluid" src="https://bootstrapemail.com/some/image.png" alt="Some Image" />
      </p>
      <p>
      OR call us at 732-546-9087!
      <i class="bi bi-telephone"></i>
      </p>

    </footer>
  </div>
        
  )
}

export default Signin
