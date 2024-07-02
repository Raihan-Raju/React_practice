import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <div>
            
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
            <NavLink to='/addproduct'>
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




       {/* NAV SIDE  */}
    <div id="page-wrapper">
      <div id="page-inner">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-head-line">DASHBOARD</h1>
            
          </div>
        </div>
          {/* ROW  */}
        <div className="row">
          <div className="col-md-4">
            <div className="main-box mb-red">
              <a href="#">
               
                <h5>Total Seles</h5><br />
                <h4>50,5798tk</h4>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="main-box mb-dull">
              <a href="#">
                
                <h5>TO DAY SALES</h5><br />
                <h4>15 578Tk</h4>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="main-box mb-pink">
              <a href="#">
              
                <h5>Pending Order</h5> <br />
                 <h4>10</h4>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="main-box mb-red">
              <a href="#">
                
                <h5>Total Order</h5><br />
                <h4>20.576</h4>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="main-box mb-dull">
              <a href="#">
                
                <h5>Return Product</h5><br />
                <h4>58</h4>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="main-box mb-pink">
              <a href="#">
                <i className="fa fa-bell" />
                <h5>2K </h5>
              </a>
            </div>
          </div>
        </div>


       

        {/* /. ROW  */}
        <div className="row">
          <div className="col-md-8">
            <div className="row">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>User No.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><span className="label label-danger">Mark</span></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><span className="label label-info">100090</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td><span className="label label-danger">the Bird</span> </td>
                    <td>@twitter</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td><span className="label label-success">Mark</span></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><span className="label label-info">100090</span></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Larry</td>
                    <td><span className="label label-primary">the Bird</span></td>
                    <td>@twitter</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td><span className="label label-warning">Jacob</span></td>
                    <td><span className="label label-success">Thornton</span></td>
                    <td>@fat</td>
                    <td><span className="label label-danger">100090</span></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Larry</td>
                    <td><span className="label label-primary">the Bird</span></td>
                    <td>@twitter</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td><span className="label label-warning">Jacob</span></td>
                    <td><span className="label label-success">Thornton</span></td>
                    <td>@fat</td>
                    <td><span className="label label-danger">100090</span></td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td><span className="label label-success">Mark</span></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><span className="label label-info">100090</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            {/* /. ROW  */}
            <hr />
           
          </div>
          {/* /.REVIEWS &  SLIDESHOW  */}
          <div className="col-md-4">
          <div className="panel panel-info">
              <div className="panel-heading">
                <i className="fa fa-bell fa-fw" />Notifications Panel
              </div>
              <div className="panel-body">
                <div className="list-group">
                  <a href="#" className="list-group-item">
                    <i className="fa fa-twitter fa-fw" />3 New Followers
                    <span className="pull-right text-muted small"><em>12 minutes ago</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-envelope fa-fw" />Message Sent
                    <span className="pull-right text-muted small"><em>27 minutes ago</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-tasks fa-fw" />New Task
                    <span className="pull-right text-muted small"><em>43 minutes ago</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-upload fa-fw" />Server Rebooted
                    <span className="pull-right text-muted small"><em>11:32 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-bolt fa-fw" />Server Crashed!
                    <span className="pull-right text-muted small"><em>11:13 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-warning fa-fw" />Server Not Responding
                    <span className="pull-right text-muted small"><em>10:57 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-bolt fa-fw" />Server Crashed!
                    <span className="pull-right text-muted small"><em>11:13 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-warning fa-fw" />Server Not Responding
                    <span className="pull-right text-muted small"><em>10:57 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-shopping-cart fa-fw" />New Order Placed
                    <span className="pull-right text-muted small"><em>9:49 AM</em>
                    </span>
                  </a>
                </div>
                {/* /.list-group */}
                <a href="#" className="btn btn-info btn-block">View All Alerts</a>
              </div>
            </div>
            
          </div>
          <div className="col-md-4">
            
          </div>
          {/*/.Chat Panel End*/}
        </div>
        {/* /. ROW  */}
        <div className="row">
          <div className="col-md-8">
           
            <br />
            {/* 16:9 aspect ratio */}
            
          </div>
          
        </div>
        {/*/.Row*/}
        <hr />
        <div className="row">
                                    <div className="col-md-8">
                                      
                                    </div>
          <div className="col-md-4">
           
          </div>
        </div>
        {/*/.Row*/}
        <hr />
        
        {/*/.ROW*/}
      </div>
      {/* /. PAGE INNER  */}
    </div>
    {/* /. PAGE WRAPPER  */}
  </div>
  {/* /. WRAPPER  */}
  <div id="footer-sec">
    © 2014 Asian-Mart| Design By : <a href="https://techraihanraju.online/" target="_blank">Md Raihan Molla Raju</a>
  </div>
</div>

        </div>
    );
};

export default AdminHeader;