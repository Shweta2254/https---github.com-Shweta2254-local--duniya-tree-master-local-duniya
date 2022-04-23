
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
   <>
   <Navbar/>   
   <Home/>
   <hr/>
   <About/>
   <hr/>
   <Services/>
   <hr/>
   <Contact/>
   <hr/>
   <Footer/>
   </>
  );
}

export default App;
