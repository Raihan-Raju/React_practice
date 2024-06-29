import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div className="nav-bar">
            <div className="brand">Asian_Mart</div>
            <div className="sarch-bar">
                <input type="text"placeholder='Sarch Product' />
            </div>
            <div className="login">Login_A/C</div>
            <div className="cart">Cart</div>
        </div>
        
    </header>
  )
}

export default Navbar