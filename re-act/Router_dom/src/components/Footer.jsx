import React from 'react'
import Home from './Home'

const Footer = () => {
  return (
    <div>
      <Home/>
      <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="column">
                    <h3>About Us</h3>
                    <p>We are a company dedicated to providing the best services to our customers. Our goal is to exceed customer expectations through our exceptional services.</p>
                </div>
                <div class="column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="column">
                    <h3>Contact Us</h3>
                    <p>123 Street Name, City, State, Zip</p>
                    <p>Email: info@company.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div class="column">
                    <h3>Follow Us</h3>
                    <div class="social-icons">
                        <a href="#"><i class="fa fa-facebook"></i> Facebook</a>
                        <a href="#"><i class="fa fa-twitter"></i> Twitter</a>
                        <a href="#"><i class="fa fa-linkedin"></i> LinkedIn</a>
                        <a href="#"><i class="fa fa-instagram"></i> Instagram</a>
                    </div>
                </div>
            </div>
            <div class="copyright">
                &copy; 2024 Company Name. All rights reserved.
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
