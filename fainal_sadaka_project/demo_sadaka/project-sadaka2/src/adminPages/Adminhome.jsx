import React from 'react';
// import { NavLink } from 'react-router-dom';
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';

const Adminhome = () => {
    return (
        <div>
          <AdminNavbar/>
          <AdminSidebar/>
              <>
  
  <div><h1 >Hello</h1></div>
  {/* /. WRAPPER  */}
  <div id="footer-sec">
    © 2014 YourCompany | Design By :{" "}
    <a href="http://www.binarytheme.com/" target="_blank">
      BinaryTheme.com
    </a>
  </div>
</>

        </div>
    );
};

export default Adminhome;