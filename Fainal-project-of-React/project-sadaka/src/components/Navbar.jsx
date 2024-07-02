import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        {/* Hello world */}
        <div>
        <header className="main-header">
          <nav className="navbar navbar-static-top">
            <div className="navbar-top">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <ul className="list-unstyled list-inline header-contact">
                      <li>
                        {" "}
                        <i className="fa fa-phone" />{" "}
                        <a href="tel:">+212 658 986 213 </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fa fa-envelope" />{" "}
                        <a href="mailto:contact@sadaka.org">contact@sadaka.org</a>{" "}
                      </li>
                    </ul>{" "}
                    {/* /.header-contact  */}
                  </div>
                  <div className="col-sm-6 col-xs-12 text-right">
                    <ul className="list-unstyled list-inline header-social">
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fa fa-facebook" />{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fa fa-twitter" />
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fa fa-google" />
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fa fa-youtube" />
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fa fa fa-pinterest-p" />
                        </a>{" "}
                      </li>
                    </ul>{" "}
                    {/* /.header-social  */}
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-main">
              <div className="container">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="index.html">
                    <img src="assets/images/sadaka-logo.png" alt="" />
                  </a>
                </div>
                <div id="navbar" className="navbar-collapse collapse pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      
                      <NavLink className="is-active" to ="/home">
                        HOME
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to ="/about">ABOUT</NavLink>
                    </li>
                    <li className="has-child">
                      <a href="#">OUR MISSION</a>
                      <ul className="submenu">
                        <li className="submenu-item">
                          <NavLink to ="/mission1">Mission-1 </NavLink>
                        </li>
                        <li className="submenu-item">
                          <a href="causes-single.html">Mission-2 </a>
                        </li>
                        <li className="submenu-item">
                          <a href="causes-single.html">Mission-3 </a>
                        </li>
                        <li className="submenu-item">
                          <a href="causes-single.html">Mission-4 </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to ="/gallery">GALLERY</NavLink>
                    </li>
                    <li>
                      <NavLink to ="/contact">CONTACT</NavLink>
                    </li>
                  </ul>
                </div>{" "}
                {/* /#navbar */}
              </div>{" "}
              {/* /.container */}
            </div>{" "}
            {/* /.navbar-main */}
          </nav>
        </header>
        </div>
        {/* /. main-header */}
      </>
      
    );
};

export default Navbar;