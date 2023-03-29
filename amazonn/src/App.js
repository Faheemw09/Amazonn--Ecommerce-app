import './App.css';
import {Admin} from "./adminpages/Admin"
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import { MainRoute } from './Pages/MainRoute';


function App() {
  return (
    <div className="App">
   <Admin/>
      <Navbar/>
      <MainRoute/>
      <Footer/>
    </div>
  );
}

export default App;
