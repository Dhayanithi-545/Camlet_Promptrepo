import "../styles/Home.css";
import Navbar from "../components/Navbar";
import money from '../assets/money.png'
import student from '../assets/students.png'
import content1  from '../assets/content1.png'
import content2   from "../assets/content2.png";
import { Link } from "react-router-dom";
import  apple  from "../assets/apple.png";
import  play  from "../assets/play.png";
import React from "react";
import Bot from "../components/Bot";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
            <h1>Camlet has been reimagined with credit karma</h1>
            <p>Reviewing transactions, monitoring your spending and tracking your net worth now have a new home.</p>
            <button className="cta-button">Check this out</button>
            <div className="con-images">
            <img className="money-img" src={money} alt="" />
            <img className="student-img" src={student} alt="" />
            </div>
        </div>
      </header>

      <section className="features-section">
        <h1>Popular camlet features have made the leap to credit karma to help you grow your mind</h1>
        <div className="feature">
          <img  src={content1} alt="Net Worth" className="feature-image" />
          <div className="feature-text">
            <h3>Keep tabs on your money one place</h3>
            <p>Link your accounts from more than 17,000 financial institutions and view your connected transactions across them in one place.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-text">
            <h3>Track your monthly spending and more.</h3>
            <p>Review your transactions, track your spending by category and receive monthly insights that help you better understand your money habits.</p>
          </div>
          <img src={content2} alt="Expenses" className="feature-image" />
          <Bot />
        </div>
      </section>

      <footer className="footer-sec">
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
            <li>
              <ul>Email</ul>
              <ul>Twitter</ul>
              <ul>Facebook</ul>
              <ul>Instagram</ul>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>For best Experience</h4>
          <p>Get Camlet on iPhone and Android</p>
          <div className="app-links">
            <img style={{"width": "80px"}} src={apple} alt="App Store" />
            <img style={{"width": "40px","height":"40px","border-radius": "10px"}} src={play} alt="App Store" />
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;