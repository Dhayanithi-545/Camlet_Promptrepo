import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./Overview.css";

const savingsData = [
  { month: "Jan", savings: 500 },
  { month: "Feb", savings: 550 },
  { month: "Mar", savings: 600 },
  { month: "Apr", savings: 650 },
  { month: "May", savings: 700 },
  { month: "Jun", savings: 750 },
  { month: "Jul", savings: 800 },
  { month: "Aug", savings: 650 },
  { month: "Sep", savings: 850 },
  { month: "Oct", savings: 900 },
  { month: "Nov", savings: 1000 },
  { month: "Dec", savings: 1050 },
];

const Overview = () => {
  return (
    <div className="dashboard">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">Camlet</span>
          <span className="subtitle">The Campus Wallet</span>
        </div>
        <div className="nav-links">
          <span>Dashboard</span>
          <span>Transactions</span>
          <span>Overview</span>
          <span>Settings</span>
        </div>
        <div className="profile">
          <div className="profile-pic"></div>
          <div className="profile-info">
            <p className="profile-name">Vijay</p>
            <p className="profile-email">vijaysahroo68@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Savings Chart */}
        <div className="savings-chart">
          <h2>Monthly Savings Over a Year</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={savingsData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="savings" fill="green" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Activity Panel */}
        <div className="activity-panel">
          <h2>Activity</h2>
          <div className="activity-bubbles">
            <div className="bubble green">Rs.2000 <br /> Online Shopping</div>
            <div className="bubble gray">Rs.250 <br /> Rent</div>
            <div className="bubble darkgray">Rs.1550 <br /> Food</div>
          </div>

          {/* Monthly Comparison */}
          <h2>Comparison (Monthly)</h2>
          <div className="comparison">
            <div className="comparison-row">
              <span>Jan</span>
              <div className="comparison-bar green-bar"></div>
            </div>
            <div className="comparison-row">
              <span>Dec</span>
              <div className="comparison-bar gray-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
