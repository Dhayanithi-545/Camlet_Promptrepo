// import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

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
    <div style={styles.container}>
      <h2 style={styles.heading}>Overview</h2>

      {/* Chart Section */}
      <div style={styles.chartContainer}>
        <h3>Monthly Savings Over a Year</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={savingsData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="savings" fill="green" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Activity and Comparison */}
      <div style={styles.rightPanel}>
        <div style={styles.activity}>
          <h3>Activity</h3>
          <div style={styles.bubbleContainer}>
            <div style={{ ...styles.bubble, backgroundColor: "lightgreen" }}>
              Rs.2000 <br /> Online Shopping
            </div>
            <div style={{ ...styles.bubble, backgroundColor: "gray" }}>
              Rs.250 <br /> Rent
            </div>
            <div style={{ ...styles.bubble, backgroundColor: "lightcoral" }}>
              Rs.1550 <br /> Food
            </div>
          </div>
        </div>

        <div style={styles.comparison}>
          <h3>Comparison (Monthly)</h3>
          <div style={styles.comparisonBar}>
            <div style={styles.janBar}></div> Jan
          </div>
          <div style={styles.comparisonBar}>
            <div style={styles.decBar}></div> Dec
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline CSS
const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#12172B",
    color: "white",
    height: "100vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  chartContainer: {
    backgroundColor: "#202945",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  rightPanel: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  activity: {
    backgroundColor: "#29314D",
    padding: "15px",
    borderRadius: "10px",
  },
  bubbleContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  bubble: {
    padding: "10px",
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
  },
  comparison: {
    backgroundColor: "#29314D",
    padding: "15px",
    borderRadius: "10px",
  },
  comparisonBar: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  janBar: {
    width: "50px",
    height: "10px",
    backgroundColor: "lightgreen",
  },
  decBar: {
    width: "100px",
    height: "10px",
    backgroundColor: "gray",
  },
};

export default Overview;
