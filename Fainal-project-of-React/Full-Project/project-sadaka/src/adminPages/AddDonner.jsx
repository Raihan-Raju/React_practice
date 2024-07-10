import React from 'react';
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';
import AdminFooter from '../adminComponents/AdminFooter';
import AdminSlider from '../adminComponents/AdminSlider';
import Addform from '../adminComponents/Addform';

const AddDonner = () => {
    return (
        <>
            <AdminNavbar />
            <AdminSidebar />
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">DONNER:</h1>
                            <AdminSlider />
                        </div>
                        <div className="row">
                            <div className="col-md-12  col-sm-12   ">
                                <div className="panel panel-denger">
                                    <div className="panel-heading">Donner-Name</div>
                                    <div className="panel-body">
                                        <form role="form">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input className="form-control" type="text" />
                                                <p className="help-block">Pleace text here First Name.</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input className="form-control" type="text" />
                                                <p className="help-block">Pleace text here last Name.</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Address </label>
                                                <input className="form-control" type="textaria" />
                                                <p className="help-block"> text here your Address.</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control" type="text" />
                                                <p className="help-block">Help text here.</p>
                                            </div>
                                            <div className="form-group">
                                                <label> Password </label>
                                                <input className="form-control" type="password" />
                                                <p className="help-block">Help text here.</p>
                                            </div>
                                            <button type="submit" className="btn btn-success">
                                                Add Donner{" "}
                                            </button>


                                            <div className="form-group">
                                                <label className="checkbox-inline">
                                                    <input type="checkbox" />
                                                </label>
                                                <span className="pull-right">
                                                    <a href="">Go to Home</a>
                                                </span>
                                            </div>

                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <AdminFooter />
            </div>


        </>
    );
};

export default AddDonner;