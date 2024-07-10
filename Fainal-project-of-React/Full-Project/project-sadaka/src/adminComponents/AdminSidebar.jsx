import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div id="wrapper" className=''>
  
    {/* /. NAV TOP  */}
    <nav className="navbar-default navbar-side " role="navigation">
      <div className="sidebar-collapse ">
        <ul className="nav" id="main-menu">
          <li>
            {/* <div className="user-img-div">
              <img src="adminAssets/assets/img/user.png" className="img-thumbnail" />
              <div className="inner-text">
                Jhon Deo Alex
                <br />
                <small>Last Login : 2 Weeks Ago </small>
              </div>
            </div> */}
        
            <NavLink to ="/adminhome">
              <i className="fa fa-desktop " />
              <h3>Deshbord</h3> <span className="fa arrow" />
            </NavLink>
            <ul className="nav nav-second-level">
              <li>
                <NavLink to ="/addDonner">
                  <i className="fa fa-toggle-on" />
                  Add-Donner
                </NavLink>
              </li>

             
                 
              <li>
                <NavLink to ="/mangeDonner">
                  <i className="fa fa-recycle " />
                  Manage-Donner
                </NavLink>
              </li>
              
            </ul>
          </li>




          <li>
            <a href="#">
              <i className="fa fa-yelp " />
              Donetion <span className="fa arrow" />
            </a>
            <ul className="nav nav-second-level">
              <li>
                <a href="invoice.html">
                  <i className="fa fa-toggle-on" />
                  Add-Donnation
                </a>
              </li>
              
             
              <li>
                <a href="social.html">
                  <i className="fa fa-recycle" />
                  Manage-Donnetion
                </a>
              </li>
             
            </ul>
          </li>







          <li>
            <a href="#">
              <i className="fa fa-yelp " />
              Volunteer <span className="fa arrow" />
            </a>
            <ul className="nav nav-second-level">
              <li>
                <a href="invoice.html">
                  <i className="fa fa-toggle-on" />
                  Add-Volunteer
                </a>
              </li>
              
             
              <li>
                <a href="social.html">
                  <i className="fa fa-recycle" />
                  Manage-Volunteer
                </a>
              </li>
             
            </ul>
          </li>
          <li>
            <a href="table.html">
              {/* <i className="fa fa-flash " /> */}
              <i className="fa fa-bell " />
              Notifications{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-bicycle " />
              Forms <span className="fa arrow" />
            </a>
            <ul className="nav nav-second-level">   
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    {/* /. NAV SIDE  */}
   
    
  </div>
    );
};

export default AdminSidebar;