
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Mission1 from './pages/Mission1';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Sponsors from './components/Sponsors';
import Signin from './loginPanel/Signin';
import Registration from './loginPanel/Registration';
import Adminhome from './adminPages/Adminhome';
import AdminNavbar from './adminComponents/AdminNavbar';
import AdminSidebar from './adminComponents/AdminSidebar';
import AdminFooter from './adminComponents/AdminFooter';
import AdminDeshbord from './adminPages/AdminDeshbord';
import Table from './adminComponents/Table';
import AdminSlider from './adminComponents/AdminSlider';
// import { Map } from './components/Map';



const App = () => {
  return (
    <>
    
    <Router>
      
      {/* <Navbar/> */}
          <Routes>    
                  <Route path = "/" element = { <Home />} />
                  <Route path = "/about" element = { <About />} />
                  <Route path = "/mission1" element = { <Mission1 />} />
                  <Route path = "/gallery" element = { <Gallery />} />
                  <Route path = "/contact" element = { <Contact />} />
                  <Route path = "/sponsor" element = { <Sponsors />} />
                  <Route path = "/signin" element = { <Signin />} />
                  <Route path = "/registration" element = { <Registration />} />
                  <Route path = "/adminNavbar" element = { <AdminNavbar />} />
                  <Route path = "/adminSidebar" element = { <AdminSidebar />} />
                  <Route path = "/adminhome" element = { <Adminhome />} />
                  <Route path = "/adminFooter" element = { <AdminFooter />} />
                  <Route path = "/AdminDeshbord" element = { <AdminDeshbord />} />
                  <Route path = "/table" element = { <Table />} />
                  <Route path = "/adminSlider" element = { <AdminSlider />} />
                  {/* <Route path = "/map" element = { <Map/>} /> */}
          </Routes>
       {/* <Footer/> */}

    </Router>
    </>

  );
};

export default App;