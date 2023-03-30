import './App.css';
 
import Home from './components/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Admin from "./adminpages/Admin"
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import { MainRoute } from './Pages/MainRoute';



function App() {
  return (
    <div  className="App">
    
   {/* <Admin/> */}
      <Navbar/>
      <MainRoute/>
      <Home/> 
      <Footer/>

    </div>
  );
}

export default App;
