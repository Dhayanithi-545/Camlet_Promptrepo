import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="logo">Camlet</div>
        <ul className="nav-links">
          <li>Dashboard</li>
          <li>Transactions</li>
          <li>Overview</li>
          <li>Settings</li>
        </ul>
        <div className="profile">Vijay</div>
      </nav>
      
      <h1 className="title">Dashboard</h1>
      <p className="subtitle">Monitor your Activities</p>

      <div className="cards-container">
        <div className="card total-money">
          <p>Total Money</p>
          <h2>5,000</h2>
          <span>⬆ 10% Compared to Last Month</span>
        </div>
        <div className="card money-spent">
          <p>Money Spent</p>
          <h2>200</h2>
          <span>⬇ 5.6% Compared to Last Month</span>
        </div>
        <div className="card saving">
          <p>Saving</p>
          <h2>1500</h2>
          <span>⬆ 12% Compared to Last Month</span>
        </div>
      </div>

      <div className="vital-expenses">
        <h3>Vital Expenses</h3>
        <ul>
          <li>Room Rent - 3000</li>
          <li>Food - 2500</li>
          <li>Water - 300</li>
        </ul>
        <button className="completed-btn">Completed</button>
      </div>

      <div className="chat-container">
        <div className="chat-box">
          <p className="user-message">I want to buy a Teddy Bear for my GF, tell the unwanted expenses.</p>
          <p className="bot-message">Sure, from the past 5 days you are drinking two Teas per day. Due to this, you spend extra money on snacks. So, avoid them to buy the teddy bear for your girl friend. 😊</p>
        </div>
        <input type="text" placeholder="Chat with BBOT" className="chat-input" />
      </div>
    </div>
  );
};

export default Dashboard;
