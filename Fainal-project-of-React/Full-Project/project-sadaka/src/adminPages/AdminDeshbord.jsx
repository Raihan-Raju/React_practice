import React from 'react';
import Table from '../adminComponents/Table';
import AdminSlider from '../adminComponents/AdminSlider';
import AdminFooter from '../adminComponents/AdminFooter';

const AdminDeshbord = () => {
    return (
        <div id="page-wrapper">
      <div id="page-inner">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-head-line">DASHBOARD</h1>
            <AdminSlider/>
          </div>
        </div>
        {/* /. ROW  */}

        <div className="row">
            <div className="col-md-6">
              <div className="main-box mb-red">
                <a href="#">
                  <i className="material-icons-outlined" />
                  <h5>Total-Donetion</h5>
                  <h3>50</h3>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="main-box mb-red">
                <a href="#">
                  <i className="material-icons-outlined" />
                  <h5>Total-spend</h5>
                  <h3>50</h3>
                </a>
              </div>
            </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="main-box mb-red">
              <a href="#">
                <i className="material-icons-outlined" />
                <h5>Running-Mission</h5> <hr />
                <h3>50</h3>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="main-box mb-dull">
              <a href="#">
                <i className="" />
                <h5>Total-Donner</h5> <hr />
                <h3>589</h3>

              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="main-box mb-pink">
              <a href="#">
                <i className="" />
                <h5>Total volunteer</h5> <hr />
                <h3>845</h3>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="main-box mb-Green">
              <a href="#">
                <i className="" />
                <h5>Total-Underprevilege</h5> <hr />
                <h3>845</h3>
              </a>
            </div>
          </div>
        </div>
        {/* /. ROW  */}
       
          <Table/>
      </div>
      <AdminFooter/>
    </div>
    );
};

export default AdminDeshbord;