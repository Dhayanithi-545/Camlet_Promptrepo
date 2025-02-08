import React, { useState } from "react";
import "../styles/Dashboard.css";
import { FaMoneyBill, FaShoppingCart, FaPiggyBank, FaComments, FaPlus } from "react-icons/fa";
import Bot from "../components/Bot";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([
    "Room Rent - 3000",
    "Food - 2500",
    "Water - 300",
  ]);
  const [newExpense, setNewExpense] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleAddExpense = () => {
    if (newExpense.trim()) {
      setExpenses([...expenses, newExpense]);
      setNewExpense("");
      setShowInput(false);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="logo">Camlet</h1>
        <nav className="dashboard-nav">
          <a href="#">Dashboard</a>
          <a href="#">Transactions</a>
          <a href="#">Overview</a>
          <a href="#">Settings</a>
        </nav>
      </header>
      
      <h2 className="dashboard-title">Dashboard</h2>
      <p className="dashboard-subtitle">Monitor your Activities</p>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <FaMoneyBill className="stat-icon" />
          <h3>Total Money</h3>
          <p>5,000</p>
        </div>
        <div className="stat-card">
          <FaShoppingCart className="stat-icon" />
          <h3>Money Spent</h3>
          <p>200</p>
        </div>
        <div className="stat-card">
          <FaPiggyBank className="stat-icon" />
          <h3>Saving</h3>
          <p>1500</p>
        </div>
      </div>
      
      <div className="vital-expenses">
        <h3>Vital Expenses <FaPlus className="plus-icon" onClick={() => setShowInput(true)} /></h3>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>{expense}</li>
          ))}
        </ul>
        {showInput && (
          <div className="expense-input">
            <input 
              type="text" 
              value={newExpense} 
              onChange={(e) => setNewExpense(e.target.value)}
              placeholder="Enter expense"
            />
            <button onClick={handleAddExpense}>Add</button>
          </div>
        )}
      </div>
      
      <div className="bbot-chat">
        <FaComments className="chat-icon" />
        <h3>BBOT Chat</h3>
        <Bot />
      </div>
    </div>
  );
};

export default Dashboard;

