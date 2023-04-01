import './App.css';
 
// import Home from './Components/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
// import {Admin} from "./adminpages/Admin"

import { MainRoute } from './Pages/MainRoute';

import Adminproductdetail from './adminpages/Adminproductdetail';

import Productslist from './components/Productslist';





function App() {
  return (
    <div className="App">
     
    {/* <MainRoute/> */}
  

<Adminproductdetail/>

    


    </div>
  );
}

export default App;