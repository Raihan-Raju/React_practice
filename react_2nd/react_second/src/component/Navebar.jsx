import React from 'react';

const Navebar = () => {
    return (
        <div>
           
            <nav className='nav'> 
            <div className="container-fluid bg-info p-3"> 
                <div className="row"> 
                    <div className="col-lg-3"> 
                        <h1>logo</h1>
                    </div>

                    <div className="col-lg-7"> 
                    <ul className='nav justify-content-center'> 
                        <li className='nav-item'><a className='nav-link nav-brand text-white' href="#">Home</a></li>
                        <li className='nav-item'><a className='nav-link nav-brand text-white' href="#">About</a></li>
                        <li className='nav-item'><a className='nav-link nav-brand text-white' href="#">Service</a></li>
                        <li className='nav-item'><a className='nav-link nav-brand text-white' href="#">Contact Us</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-2"> 
                        
                        <input className='mt-3' type="text" placeholder='search here' />
                    </div>
                </div>
            </div>
            </nav>  

     
        </div>
    );
}

export default Navebar;