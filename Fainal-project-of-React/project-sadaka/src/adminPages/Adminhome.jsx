import React from 'react';
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';
import AdminFooter from '../adminComponents/AdminFooter';
import AdminDeshbord from './AdminDeshbord';

const Adminhome = () => {
    return (
        <div>
          <AdminNavbar/>
          <AdminSidebar/>
            <>
           <AdminDeshbord/>

            </>
           <AdminFooter/>
        </div>
    );
};

export default Adminhome;