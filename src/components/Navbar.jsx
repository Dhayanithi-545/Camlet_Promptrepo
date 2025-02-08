import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar joe">
      <div className="logo">
        <img src={logo} alt="Camlet Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/camlet-way">Camlet Way</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Sign-up</Link>
      </div>
    </nav>
  );
};

export default Navbar;