import './App.css';
 
// import Home from './Components/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
// import {Admin} from "./adminpages/Admin"
import Footer from './components/Footer';
import  Navbar  from './components/Navbar';
import { MainRoute } from './Pages/MainRoute';
import Productslist from './components/Productslist';



function App() {
  return (
    <div className="App">
      <Navbar/>
    <MainRoute/>
    <Footer/>
    

    </div>
  );
}

export default App;