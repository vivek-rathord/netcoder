import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo"><img src={logo} alt="" /></h2>

      <ul className={`nav-links ${open ? "nav-active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/education">Education</Link></li>
       <li className="mobile-btn-li">
          <Link to="/contact">
            <button className="nav-btn phonebtn">Contact us</button>
          </Link>
          </li>
       

      </ul>

      <Link to="/contact">
        <button className="nav-btn">Contact us</button>
      </Link>

      {/* hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;
