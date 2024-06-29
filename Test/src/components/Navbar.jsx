

import React from 'react';

const Navbar = () => {
    return (
        <>
        <header>
            <div className="navbar">
                <div className="brand">Asian-Mart</div>
                <div className="serch">
                    <input type="text"placeholder='Seach your prodach' />
                </div>
                <div className="cart">Cart</div>
                <div className="login">Login-A/C</div>
            </div>
            <div className="navbar-wrapper">
                <div className="iteams">Filter By{"-<"}</div>
                <div className="iteams">No Filter</div>
                <div className="iteams">Mobile</div>
                <div className="iteams">Laptop</div>
                <div className="iteams">Tablets</div>
                <div className="iteams">{"=<"}2,9999</div>
                <div className="iteams">{"=<"}3,9999</div>
                <div className="iteams">{"=<"}4,9999</div>
                <div className="iteams">{"=<"}5,9999</div>
                
            </div>
        </header>
        
        </>
    );
};

export default Navbar;