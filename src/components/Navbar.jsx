import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/logo.png" alt="Camlet Logo" />
        <span>Camlet</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/camlet-way">Camlet Way</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Sign-up</Link>
      </div>
    </nav>
  );
};

export default Navbar;