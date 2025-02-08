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

const activityData = [
  { category: "Online Shopping", amount: 320, size: 120, color: "green" },
  { category: "Rent", amount: 120, size: 90, color: "gray" },
  { category: "Food", amount: 20, size: 60, color: "black" },
];

const comparisonData = [
  { label: "This Month", value: 75, color: "green" },
  { label: "Last Month", value: 50, color: "gray" },
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

      {/* Right Panel - Activity & Comparison */}
      <div style={styles.rightPanel}>
        
        {/* Activity Section */}
        <div style={styles.activity}>
          <h3 style={commonStyles.floatingText}>Activity</h3>
          <div style={styles.bubbleContainer}>
            {activityData.map((item, index) => (
              <div
                key={index}
                style={{
                  ...styles.bubble,
                  width: `${item.size}px`,
                  height: `${item.size}px`,
                  backgroundColor: item.color,
                }}
              >
                <span style={styles.bubbleText}>
                  ${item.amount} <br /> {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div style={styles.comparison}>
          <h3>Comparison (Monthly)</h3>
          <div style={styles.comparisonBarContainer}>
            {comparisonData.map((item, index) => (
              <div key={index} style={styles.comparisonRow}>
                <span>{item.label}</span>
                <div
                  style={{
                    ...styles.comparisonBar,
                    width: `${item.value}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Effect */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          .bubble:hover {
            animation: float 1s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

// Styles
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
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  bubble: {
    borderRadius: "50%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
    position: "relative",
    color: "white",
  },
  bubbleText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  comparison: {
    backgroundColor: "#29314D",
    padding: "15px",
    borderRadius: "10px",
  },
  comparisonBarContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
  },
  comparisonRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  comparisonBar: {
    height: "10px",
    borderRadius: "5px",
    flexGrow: 1,
  },
};

// Floating text style
const commonStyles = {
  floatingText: {
    fontFamily: "Arial, sans-serif",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#FFF",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
  },
};

export default Overview;