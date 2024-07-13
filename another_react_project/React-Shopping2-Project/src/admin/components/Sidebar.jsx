import React from 'react';

const Sidebar = () => {
    return (
        <div>
              <div id="wrapper">
{/*     
     {/* NAV TOP   */}
    <nav className="navbar-default navbar-side" role="navigation">
      <div className="sidebar-collapse">

        <ul className="nav" id="main-menu">
        
          <li>
            <a className="active-menu" href="index.html"><i className="fa fa-dashboard " />||||||----- Dashboard-----||||||</a>
          </li>
            
          <li>
            <NavLink to='/addproduct'>
              <i className="fa fa-yelp " />Add-Supplier <span className="fa arrow" />
            </NavLink>
          </li>

              <ul className="nav nav-second-level">
                
                <li>
                   <a href="invoice.html"><i className="fa fa-yelp" />Manage-Supplier</a>
                </li>
                
      
              </ul>

          <li>
            <NavLink to='/addproduct'>
              <i className="fa fa-desktop " />Add-Product <span className="fa arrow" />
            </NavLink>
          </li>

              <ul className="nav nav-second-level">
                
                <li>
                   <a href="invoice.html"><i className="fa fa-coffee" />Manage product</a>
                </li>
                <li>
                   <a href="pricing.html"><i className="fa fa-flash " />Total Displaying Product</a>
                </li>
      
              </ul>
          
          <li>
            <NavLink to='/addproduct'>
              <i className="fa fa-desktop " />Total-Order<span className="fa arrow" />
            </NavLink>
          </li>

              <ul className="nav nav-second-level">
                
                <li>
                   <a href="invoice.html"><i className="fa fa-coffee" />Order-Manegment</a>
                </li>
                <li>
                   <a href="pricing.html"><i className="fa fa-flash " />Delivery</a>
                </li>
      
              </ul>


              <li>
            <NavLink to='/'>
              <i className="fa fa-desktop " />Return<span className="fa arrow" />
            </NavLink>
          </li>

              <ul className="nav nav-second-level">
                
                <li>
                   <a href="invoice.html"><i className="fa fa-coffee" />Return-Manegment</a>
                </li>
               
                <li>
                <a href="notification.html"><i className="fa fa-bell " />Notifications</a>
              </li>
      
              </ul>
        
        </ul>
      </div>
    </nav>
    </div>
</div>
    );
};

export default Sidebar;