import React from 'react';

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
            <a className="active-menu" href="index.html"><i className="fa fa-dashboard " />Dashboard</a>
          </li>
          <li>
            <a href="#"><i className="fa fa-desktop " />Add-Product <span className="fa arrow" /></a>
            <ul className="nav nav-second-level">
             
              <li>
                <a href="notification.html"><i className="fa fa-bell " />Notifications</a>
              </li>
              
             
              
              
             
             
            </ul>
          </li>
          <li>
            <a href="#"><i className="fa fa-yelp " />Extra Pages <span className="fa arrow" /></a>
            <ul className="nav nav-second-level">
              <li>
                <a href="invoice.html"><i className="fa fa-coffee" />Invoice</a>
              </li>
              <li>
                <a href="pricing.html"><i className="fa fa-flash " />Pricing</a>
              </li>
              
              
              
            </ul>
          </li>
          
          <li>
            
            <ul className="nav nav-second-level">
             
             
            </ul>
          </li>
          
          
          
          <li>
            
            <ul className="nav nav-second-level">
              
              
              <li>
                
                <ul className="nav nav-third-level">
                  
                  
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="blank.html"><i className="fa fa-square-o " />Blank Page</a>
          </li>
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
              <i className="fa fa-dollar fa-5x" />  
                <h5>Total Seles</h5><br />
                <p>50,5798tk</p>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="main-box mb-dull">
              <a href="#">
                
                <h5>TO DAY SALES</h5><br />
                <h4>15'578Tk</h4>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="main-box mb-pink">
              <a href="#">
              <i className="fa fa-bolt fa-5x" />
                <h5>Pending Order</h5> <br />
                 <h3>10</h3>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="main-box mb-red">
              <a href="#">
                
                <h5>Total Order</h5>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="main-box mb-dull">
              <a href="#">
                <i className="fa fa-plug fa-5x" />
                <h5>40 Task In Check</h5>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="main-box mb-pink">
              <a href="#">
                <i className="fa fa-dollar fa-5x" />
                <h5>200K Pending</h5>
              </a>
            </div>
          </div>
        </div>


        <div className="container-fluid pt-4 px-4">
  <div className="row g-4">
    <div className="col-sm-6 col-xl-3">
      <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
        <i className="fa fa-chart-line fa-3x text-primary" />
        <div className="ms-3">
          <p className="mb-2">Today Sale</p>
          <h6 className="mb-0">$1234</h6>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-xl-3">
      <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
        <i className="fa fa-chart-bar fa-3x text-primary" />
        <div className="ms-3">
          <p className="mb-2">Total Sale</p>
          <h6 className="mb-0">$1234</h6>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-xl-3">
      <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
        <i className="fa fa-chart-area fa-3x text-primary" />
        <div className="ms-3">
          <p className="mb-2">Today Revenue</p>
          <h6 className="mb-0">$1234</h6>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-xl-3">
      <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
        <i className="fa fa-chart-pie fa-3x text-primary" />
        <div className="ms-3">
          <p className="mb-2">Total Revenue</p>
          <h6 className="mb-0">$1234</h6>
        </div>
      </div>
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