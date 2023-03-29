import './App.css';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import { MainRoute } from './Pages/MainRoute';

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
