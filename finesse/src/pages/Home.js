
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Announcements from '../components/Announcement';
// import Categories from '../components/Categories';
// import Footer from '../components/Footer'

const Home = () => {
return(
    <BrowserRouter>
  <Announcements/>
   <Navbar/>

    </BrowserRouter>
  )
}

export default Home;