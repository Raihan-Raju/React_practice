import React from 'react';
import { NavLink } from 'react-router-dom';

const Signin = () => {
    return (
    <> 
      <>
  {/* Hello world */}
  <div className="container ">
    <div className="row text-center " style={{ paddingTop: 100 }}>
      <div className="col-md-12 ">
        <img src="adminAssets/assets/img/logo-invoice.png" />
      </div>
    </div>
    <div className="row ">
      <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
        <div className="panel-body">
          <form role="form">
            <hr />
            <h5>Enter Details to Login</h5>
            <br />
            <div className="form-group input-group">
              <span className="input-group-addon">
                <i className="fa fa-tag" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Your Username "
              />
            </div>
            <div className="form-group input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock" />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Your Password"
              />
            </div>
            <div className="form-group">
              <label className="checkbox-inline">
                <input type="checkbox" /> Remember me
              </label>
              <span className="pull-right">
                <a href="index.html">Forget password ? </a>
              </span>
            </div>
            <NavLink to ="/main" className="btn btn-primary ">
              Login Now
            </NavLink>
            <hr />
            Not register ? <NavLink to="/registration">Registration here </NavLink> <br /> or go to{" "}
            <NavLink to="/">Home</NavLink>
          </form>
        </div>
      </div>
    </div>
  </div>
</>

  </>

    );
};

export default Signin;