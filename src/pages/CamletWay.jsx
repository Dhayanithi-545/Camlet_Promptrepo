// import React from 'react';
import "../styles/Camlet.css"; // Assuming you have a CSS file for styling


export default function CamletLandingPage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h2>Camlet</h2>
        <p>Spend in line with your values</p>
        {/* <button className="cta-button">Create Your Camlet</button> */}
        <a href="/signup" className="cta-button">Create Your Camlet</a>

      </section>

      {/* Why Students Love Camlet */}
      <section className="features">
        <h3>Why Students Love Camlet</h3>
        <div className="feature-grid">
          <div className="feature-card">
            <h4>Stress-Free Budgeting</h4>
            <p>Ditch the spreadsheets—Camlet makes tracking money as easy as scrolling Instagram.</p>
          </div>
          <div className="feature-card">
            <h4>Roommate-Friendly</h4>
            <p>No more chasing friends for cash. Split bills fairly and keep the peace.</p>
          </div>
          <div className="feature-card">
            <h4>Smart & Secure</h4>
            <p>Bank-level encryption keeps your data safe while AI does the heavy lifting.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <h3>Stats That Matter:</h3>
        <p>
          72% of students feel financially stressed—Camlet helps you stay in control. With 78% of students preferring digital tools for budgeting, Camlet stands out.
        </p>
        <ul>
          <li>95% of users feel more confident about their finances after using Camlet.</li>
          <li>Camlet students save 20% more within the first 3 months of using it.</li>
          <li>84% find Camlet’s bill-splitting feature a game-changer for roommate harmony.</li>
        </ul>
      </section>
    </div>
  );
}