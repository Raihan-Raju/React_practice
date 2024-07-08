import React from 'react';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
// import AdminNavbar from '../adminComponents/AdminNavbar';
// import AdminSidebar from '../adminComponents/AdminSidebar';
=======
// import { NavLink } from 'react-router-dom';
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';
>>>>>>> 79a19757445a56689730a96ef6459e7bff4ee8cf

const Adminhome = () => {
    return (
        <div>
          <AdminNavbar/>
          <AdminSidebar/>
              <>
<<<<<<< HEAD
  <div id="wrapper">
    <nav
      className="navbar navbar-default navbar-cls-top"
      role="navigation"
      style={{ marginBottom: 0 }}
    >
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".sidebar-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <NavLink className="navbar-brand" href="index.html">
          COMPANY NAME
        </NavLink>
      </div>
      <div className="header-right">
        <NavLink
          to="message-task.html"
          className="btn btn-info"
          title="New Message"
        >
          <b>30 </b>
          <i className="fa fa-envelope-o fa-2x" />
        </NavLink>
        <a
          href="message-task.html"
          className="btn btn-primary"
          title="New Task"
        >
          <b>40 </b>
          <i className="fa fa-bars fa-2x" />
        </a>
        <a href="login.html" className="btn btn-danger" title="Logout">
          <i className="fa fa-exclamation-circle fa-2x" />
        </a>
      </div>
    </nav>
    {/* /. NAV TOP  */}
    <nav className="navbar-default navbar-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav" id="main-menu">
          
          <li>
            <a className="active-menu" href="index.html">
              <i className="fa fa-dashboard " />
              Dashboard
            </a>
          </li>
          <li>
            <NavLink to="#">
              <i className="fa fa-desktop " />
              UI Elements <span className="fa arrow" />
            </NavLink>
            <ul className="nav nav-second-level">
              <li>
                <a href="panel-tabs.html">
                  <i className="fa fa-toggle-on" />
                  Tabs &amp; Panels
                </a>
              </li>
              <li>
                <a href="notification.html">
                  <i className="fa fa-bell" />
                  Notifications
                </a>
              </li>
              <li>
                <a href="progress.html">
                  <i className="fa fa-circle-o " />
                  Progressbars
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-yelp" />
              Extra Pages <span className="fa arrow" />
            </a>
            <ul className="nav nav-second-level">
              <li>
                <a href="invoice.html">
                  <i className="fa fa-coffee" />
                  Invoice
                </a>
              </li>
              <li>
                <a href="social.html">
                  <i className="fa fa-send " />
                  Social
                </a>
              </li>
              <li>
                <a href="message-task.html">
                  <i className="fa fa-recycle " />
                  Messages &amp; Tasks
                </a>
              </li>
            </ul>
          </li>      
          
          <li>
            <a href="blank.html">
              <i className="fa fa-square-o " />
              Blank Page
            </a>
          </li>
        </ul>
      </div>
    </nav>
    {/* /. NAV SIDE  */}
   
    {/* /. PAGE WRAPPER  */}
  </div>
=======
  
  <div><h1 >Hello</h1></div>
>>>>>>> 79a19757445a56689730a96ef6459e7bff4ee8cf
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