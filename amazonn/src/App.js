import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { MainRoute } from './Pages/MainRoute';
// import Navhere from './Components/Navhere';
import Navbar1 from './Components/Navbar1';
// import HomePage from './HomeAllpage/HomePage';




function App() {
  return (
    <div className="App">
     
    <MainRoute/>
    {/* <Navhere></Navhere> */}
    {/* <HomePage></HomePage> */}
    {/* <Navbar1></Navbar1> */}
        </div>
  );
}

export default App;