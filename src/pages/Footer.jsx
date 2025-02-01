import React from 'react'
import '../assets/css/Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div>
 <footer className="footer bg-dark text-light mt-4 py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Vehicle Parking Management System helps you manage parking spaces
              efficiently with real-time tracking.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className=" list-unstyled">
              <Link to={"/" }><li  className="text-light">Home</li></Link>
              <Link to={"/about"}><li className="text-light">About</li></Link>
              <Link to={"/service"}><li  className="text-light">Services</li></Link>
              <Link to={"/contact"}><li  className="text-light">Contact</li></Link>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: support@parking.com</p>
            <p>Phone: +8801303053626</p>
            <div className="social-icons">
             <Link> <a  className="text-light me-2"><FaFacebook size={20} /></a></Link>
             <Link> <a  className="text-light me-2"><FaTwitter size={20} /></a></Link>
             <Link> <a className="text-light"><FaInstagram size={20} /></a></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} Vehicle Parking System. All rights reserved.</p>
      </div>
    </footer>



    </div>
  )
}
