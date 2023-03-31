import './App.css';
 
// import Home from './Components/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
// import {Admin} from "./adminpages/Admin"
import Footer from './components/Footer';
import  Navbar  from './components/Navbar';
import { MainRoute } from './Pages/MainRoute';
import Adminproductdetail from './adminpages/Adminproductdetail';



function App() {
  return (
    <div className="App">
      <Navbar/>
    <MainRoute/>
    <Footer/>
{/* <Adminproductdetail/> */}
    </div>
  );
}

export default App;