import React from 'react';

const AdminNavbar = () => {
    return (
        <div id="wrapper">
  <nav
    className="navbar navbar-default navbar-cls-top "
    role="navigation"
    style={{ marginBottom: 0 }}
  >
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle"
        data-toggle="collapse"
        data-target=".sidebar-collapse"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <a className="navbar-brand" href="index.html">
        COMPANY NAME
      </a>
    </div>
    <div className="header-right">
      <a href="message-task.html" className="btn btn-info" title="New Message">
        <b>30 </b>
        <i className="fa fa-envelope-o fa-2x" />
      </a>
      <a href="message-task.html" className="btn btn-primary" title="New Task">
        <b>40 </b>
        <i className="fa fa-bars fa-2x" />
      </a>
      <a href="login.html" className="btn btn-danger" title="Logout">
        <i className="fa fa-exclamation-circle fa-2x" />
      </a>
    </div>
  </nav>
</div>

    );
};

export default AdminNavbar;