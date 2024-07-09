import React from 'react';

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
        
            <a href="#">
              <i className="fa fa-desktop " />
              <h3>Deshbord</h3> <span className="fa arrow" />
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
            <a href="table.html">
              <i className="fa fa-flash " />
              Data Tables{" "}
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