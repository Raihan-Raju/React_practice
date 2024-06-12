import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Navebar from './component/Navebar';
import Body from './component/Body';

const App = () => {
  return (
    <div>
      <Navebar/>
      <Header/>
       
      <Body/>
      <Footer/>

    </div>
  );
};

export default App;
