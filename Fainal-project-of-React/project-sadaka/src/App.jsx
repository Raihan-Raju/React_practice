
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Mission1 from './pages/Mission1';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
    <Router>
      
      <Navbar/>
          <Routes>    
                  <Route path = "/home" element = { <Home />} />
                  <Route path = "/about" element = { <About />} />
                  <Route path = "/mission1" element = { <Mission1 />} />
                  <Route path = "/gallery" element = { <Gallery />} />
                  <Route path = "/contact" element = { <Contact />} />
          </Routes>
       <Footer/>

    </Router>
    </>

  );
};

export default App;