import React from 'react';
import Table from '../adminComponents/Table';
import AdminSlider from '../adminComponents/AdminSlider';

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
          <div className="col-md-4">
            <div className="main-box mb-red">
              <a href="#">
                <i className="fa fa-bolt fa-5x" />
                <h5>Zero Issues</h5>
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
        {/* /. ROW  */}
       
          <Table/>
      </div>
    </div>
    );
};

export default AdminDeshbord;