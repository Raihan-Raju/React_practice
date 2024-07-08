import React from "react";
import AdminNavbar from "../adminComponents/AdminNavbar";

const MainPage = () => {
  return (
    <div>
      <div>
        <div id="wrapper">
          <AdminNavbar />
          {/* /. NAV TOP  */}
          <nav className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
              <ul className="nav" id="main-menu">
                <li>
                  <div className="user-img-div">
                    <img src="assets/img/user.png" className="img-thumbnail" />
                    <div className="inner-text">
                      Jhon Deo Alex
                      <br />
                      <small>Last Login : 2 Weeks Ago </small>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="index.html">
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
                    <li>
                      <a href="buttons.html">
                        <i className="fa fa-code " />
                        Buttons
                      </a>
                    </li>
                    <li>
                      <a href="icons.html">
                        <i className="fa fa-bug " />
                        Icons
                      </a>
                    </li>
                    <li>
                      <a href="wizard.html">
                        <i className="fa fa-bug " />
                        Wizard
                      </a>
                    </li>
                    <li>
                      <a href="typography.html">
                        <i className="fa fa-edit " />
                        Typography
                      </a>
                    </li>
                    <li>
                      <a href="grid.html">
                        <i className="fa fa-eyedropper " />
                        Grid
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
                      <a href="pricing.html">
                        <i className="fa fa-flash " />
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="component.html">
                        <i className="fa fa-key " />
                        Components
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
                    <li>
                      <a href="form.html">
                        <i className="fa fa-desktop " />
                        Basic{" "}
                      </a>
                    </li>
                    <li>
                      <a href="form-advance.html">
                        <i className="fa fa-code " />
                        Advance
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="gallery.html">
                    <i className="fa fa-anchor " />
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="error.html">
                    <i className="fa fa-bug " />
                    Error Page
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="fa fa-sign-in " />
                    Login Page
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-sitemap " />
                    Multilevel Link <span className="fa arrow" />
                  </a>
                  <ul className="nav nav-second-level">
                    <li>
                      <a href="#">
                        <i className="fa fa-bicycle " />
                        Second Level Link
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-flask " />
                        Second Level Link
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Second Level Link
                        <span className="fa arrow" />
                      </a>
                      <ul className="nav nav-third-level">
                        <li>
                          <a href="#">
                            <i className="fa fa-plus " />
                            Third Level Link
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-comments-o " />
                            Third Level Link
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="active-menu" href="blank.html">
                    <i className="fa fa-square-o " />
                    Blank Page
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* /. NAV SIDE  */}
          <div id="page-wrapper">
            <div id="page-inner">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="page-head-line">BLANK PAGE</h1>
                  <h1 className="page-subhead-line">
                    This is dummy text , you can replace it with your original
                    text.{" "}
                  </h1>
                </div>
              </div>
              {/* /. ROW  */}
              <div className="row">
                <div className="col-md-12">
                  <div className="alert alert-info">
                    This is a free responsive admin under cc3.0 license, so you
                    can use it for personal and commercial use.
                    <br />
                    Enjoy this admin and for more please keep looking{" "}
                    <a href="http://www.binarytheme.com/" target="_blank">
                      BinaryTheme.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /. PAGE INNER  */}
          </div>
          {/* /. PAGE WRAPPER  */}
        </div>
        {/* /. WRAPPER  */}
      </div>
    </div>
  );
};

export default MainPage;
