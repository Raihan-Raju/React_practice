import React from 'react';
import { NavLink } from 'react-router-dom';

const registration = () => {
    return (
      <div className="row" style={{ paddingTop: 100, backgroundColor: "black"}}>
        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1" style={{ paddingTop: 50, paddingBottom:100}}>
            <div className="panel panel-info">
                  <div className="panel-heading">SINGUP FORM</div>
                  <div className="panel-body">
                    <form role="form">
                      <div className="form-group">
                        <label>First Name</label>
                        <input className="form-control" type="text" />
                        <p className="help-block">Help text here.</p>
                        <label>Last Name</label>
                        <input className="form-control" type="text" />
                        <p className="help-block">Help text here.</p>
                      </div>
                      <div className="form-group">
                        <label> Email</label>
                        <input className="form-control" type="password" />
                        <p className="help-block">Help text here.</p>
                      </div>
                      <div className="form-group">
                        <label>Enter Password </label>
                        <input className="form-control" type="password" />
                        <p className="help-block">Help text here.</p>
                      </div>
                      <button type="submit" className="btn btn-success">
                        Register Now{" "}
                      </button>
                       

                      <div className="form-group">
              <label className="checkbox-inline">
                <input type="checkbox" /> 
              </label>
              <span className="pull-right">
                <NavLink to ="/">Go to Home </NavLink>
              </span>
            </div>

                  </form>
                  </div>
            </div>

          </div>
         </div>
    );
};

export default registration;