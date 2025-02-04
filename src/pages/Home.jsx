import "../styles/Home.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Camlet has been reimagined with credit karma</h1>
          <p>Reviewing transactions, monitoring your spending and tracking your net worth now have a new home.</p>
          <button className="cta-button">Check this out</button>
        </div>
      </header>

      <section className="features-section">
        <h2>Popular camlet features have made the leap to credit karma to help you grow your mind</h2>
        <div className="feature">
          <img src="/assets/networth.png" alt="Net Worth" className="feature-image" />
          <div className="feature-text">
            <h3>Keep tabs on your money one place</h3>
            <p>Link your accounts from more than 17,000 financial institutions and view your connected transactions across them in one place.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-text">
            <p>Track your monthly spending and more. Review your transactions, track your spending by category and receive monthly insights that help you better understand your money habits.</p>
          </div>
          <img src="/assets/expenses.png" alt="Expenses" className="feature-image" />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/camlet-way">Camlet Way</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Get Started</h4>
          <ul>
            <li><Link to="/signup">Sign-Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Get Help</h4>
          <ul className="social-icons">
            <li>Email</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>For best Experience</h4>
          <p>Get Camlet on iPhone and Android</p>
          <div className="app-links">
            <img src="/assets/appstore.png" alt="App Store" />
            <img src="/assets/playstore.png" alt="Google Play" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;