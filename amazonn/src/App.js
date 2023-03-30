import './App.css';

// import Home from './Components/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
// import {Admin} from "./adminpages/Admin"
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';


import Home from './Components/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


import { MainRoute } from './Pages/MainRoute';
import Footer from './Components/Footer';

import Admin from './adminpages/Admin';
import Navbar from './Components/Navbar';
import MainAdmin from './adminpages/MainAdmin';
import Mainhome from './Pages/Mainhome';




function App() {

  return (
    <div className="App">

     {/* <Home/>
   <Admin/> */}
      <Navbar/>
      <MainRoute />
      <Footer/>

      {/* <Navbar/>
     <Home/> */}
   
   {/* <Mainhome/> */}
      
      <MainRoute/>
      
     
      {/* <Footer/> */}


    </div>
  );
}

export default App;
