import React from "react";

const Dashboard = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#0c0b1d", color: "white", padding: "20px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ color: "#80ff80" }}>Camlet</h1>
        <nav>
          <a href="#" style={{ margin: "0 10px", color: "white" }}>Dashboard</a>
          <a href="#" style={{ margin: "0 10px", color: "white" }}>Transactions</a>
          <a href="#" style={{ margin: "0 10px", color: "white" }}>Overview</a>
          <a href="#" style={{ margin: "0 10px", color: "white" }}>Settings</a>
        </nav>
      </header>
      
      <h2>Dashboard</h2>
      <p>Monitor your Activities</p>
      
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <div style={{ backgroundColor: "#292144", padding: "20px", borderRadius: "10px" }}>
          <h3>Total Money</h3>
          <p>5,000</p>
        </div>
        <div style={{ backgroundColor: "#292144", padding: "20px", borderRadius: "10px" }}>
          <h3>Money Spent</h3>
          <p>200</p>
        </div>
        <div style={{ backgroundColor: "#292144", padding: "20px", borderRadius: "10px" }}>
          <h3>Saving</h3>
          <p>1500</p>
        </div>
      </div>
      
      <div style={{ marginTop: "20px", backgroundColor: "#1c1a30", padding: "20px", borderRadius: "10px" }}>
        <h3>Vital Expenses</h3>
        <ul>
          <li>Room Rent - 3000</li>
          <li>Food - 2500</li>
          <li>Water - 300</li>
        </ul>
      </div>
      
      <div style={{ marginTop: "20px", backgroundColor: "#25203a", padding: "20px", borderRadius: "10px" }}>
        <h3>BBOT Chat</h3>
        <p>"From the past 5 days you are drinking tea. Do you need to buy a Teddy Bear for your girl friend?"</p>
      </div>
    </div>
  );
};

export default Dashboard;
