import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo"><img src={logo} alt="" /></h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/education">Education</Link></li>
      </ul>
      <Link to='/Contact'><button className="nav-btn">Contact us</button></Link>

      {/* hamburger */}
     <div className="hamburger" onClick={() => console.log("hamburger clicked")}>
  <i className="fa-solid fa-bars"></i>
</div>
    </nav>
  );
}

export default Navbar;
