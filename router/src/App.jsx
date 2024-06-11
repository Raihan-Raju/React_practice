
// import React from 'react';
// import { Fragment } from 'react';


import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';

import Header from './Component/Header';





const App = () => {
  return (
 <>
     <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<Header />} >
              <Route path="/anotherlink" element={<Anotherlink/>} />
        </Route> 
      </Routes>
    
    </BrowserRouter>

   </>
  );
};

export default App;