import React from "react";
// import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
  
      {/* Box 1: Quick links */}
      <div className="footer-box">
        <h6>Quick Links</h6>
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About us</Link>
          <Link to="/Blogs" className="footer-link">Blog</Link>
          <Link to="/contact" className="footer-link">Contact</Link>

        </div>
      </div>

      {/* Box 2: Features */}
      <div className="footer-box">
        <h6>Features</h6>
        <div className="footer-links">
          <Link to="/Singlecourse" className="footer-link">Coueses</Link>
          <Link to="/" className="footer-link">Industrial Training</Link>
          <Link to="/" className="footer-link">Insights</Link>
          <Link to="/" className="footer-link">IT Solutions</Link>
        </div>
      </div>

      {/* Box 3: Legal Info */}
      <div className="footer-box">
        <h6>Legal Links</h6>
        <div className="footer-links">
          <Link to="/" className="footer-link"> term & conditions</Link>
          <Link to="/" className="footer-link">Privacy Policy</Link>
        </div>
      </div>

        {/* Box 4: stay connected */}
      <div className="footer-box">
        <h6>Stay connect</h6>
        <div className="footer-links">
      <div className="social-media">

       {/* Facebook */}
<a href="https://www.facebook.com/netcodertechnology" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-facebook-f"></i>
</a>

{/* Instagram */}
<a href="https://www.instagram.com/netcodertechnology" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-instagram"></i>
</a>

{/* YouTube */}
<a href="https://www.youtube.com/@netcodertechnology" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-youtube"></i>
</a>

{/* LinkedIn */}
<a href="https://www.linkedin.com/in/netcodertechnology" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-linkedin-in"></i>
</a>

      </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copywrite">
        <p>*All the rights are reserved by <strong>Netcoder Technology</strong></p>
      </div>
    </footer>
  );
}

export default Footer;
