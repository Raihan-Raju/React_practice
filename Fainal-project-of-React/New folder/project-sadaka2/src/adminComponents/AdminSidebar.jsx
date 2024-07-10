import React from 'react';

const AdminSidebar = () => {
    return (
        <div id="wrapper">
    
   
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
            <a href="#">
              <i className="fa fa-desktop " />
              UI Elements <span className="fa arrow" />
            </a>
            <ul className="nav nav-second-level">
              <li>
                <a href="panel-tabs.html">
                  <i className="fa fa-toggle-on" />
                  Tabs &amp; Panels
                </a>
              </li>
              <li>
                <a href="notification.html">
                  <i className="fa fa-bell " />
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
              <i className="fa fa-yelp " />
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
    );
};

export default AdminSidebar;