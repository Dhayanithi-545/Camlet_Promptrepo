import  { useState } from "react";
import "../styles/Dashboard.css";
import { FaMoneyBill, FaShoppingCart, FaPiggyBank, FaComments, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Bot from "../components/Bot";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Dashboard = () => {
  const [totalMoney, setTotalMoney] = useState(5000);
  const [moneySpent, setMoneySpent] = useState(200);
  const [savings, setSavings] = useState(1500);
  const [expenses, setExpenses] = useState([
    "Room Rent - 3000",
    "Food - 2500",
    "Water - 300",
  ]);
  const [newExpense, setNewExpense] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [amount, setAmount] = useState("");

  const handleAddExpense = () => {
    if (newExpense.trim()) {
      setExpenses([...expenses, newExpense]);
      setNewExpense("");
      setShowInput(false);
    }
  };

  const handleDeleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const updateTotalMoney = (isAdding) => {
    const value = parseFloat(amount) || 0;
    setTotalMoney(isAdding ? totalMoney + value : totalMoney - value);
    setAmount("");
  };

  const updateMoneySpent = (isAdding) => {
    const value = parseFloat(amount) || 0;
    if (isAdding) {
      if (totalMoney >= value) {
        setMoneySpent(moneySpent + value);
        setTotalMoney(totalMoney - value);
      } else {
        alert("Not enough funds!");
      }
    } else {
      if (moneySpent >= value) {
        setMoneySpent(moneySpent - value);
        setTotalMoney(totalMoney + value);
      } else {
        alert("Cannot reduce below zero!");
      }
    }
    setAmount("");
  };

  const updateSavings = (isAdding) => {
    const value = parseFloat(amount) || 0;
    setSavings(isAdding ? savings + value : savings - value);
    setAmount("");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-head">
        <h1 className="logo">Camlet</h1>
        <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Camlet Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/about-us">Overview</Link></li>
        <li><Link to="/contact">Settings</Link></li>
      </ul>
    </nav>
      </header>
      <h1 className="dashboard-title">Dashboard</h1>
      <h1 className="dashboard-subtitle">Monitor your Activities</h1>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <FaMoneyBill className="stat-icon tot-icon" />
          <h2 className="total">Total Money</h2>
          <h1>₹ {totalMoney}</h1>
          <div className="adjust-buttons">
            <FaPlus className="icon" onClick={() => updateTotalMoney(true)} />
            <input type="number" value={amount} onChange={handleAmountChange} placeholder="Amount" />
            <FaMinus className="icon" onClick={() => updateTotalMoney(false)} />
          </div>
        </div>
        <div className="stat-card">
          <FaShoppingCart className="stat-icon spe-icon" />
          <h2 className="spent">Money Spent</h2>
          <h1>₹ {moneySpent}</h1>
          <div className="adjust-buttons">
            <FaPlus className="icon" onClick={() => updateMoneySpent(true)} />
            <input type="number" value={amount} onChange={handleAmountChange} placeholder="Amount" />
            <FaMinus className="icon" onClick={() => updateMoneySpent(false)} />
          </div>
        </div>
        <div className="stat-card">
          <FaPiggyBank className="stat-icon sav-icon" />
          <h2 className="save">Savings</h2>
          <h1>₹ {savings}</h1>
          <div className="adjust-buttons">
            <FaPlus className="icon" onClick={() => updateSavings(true)} />
            <input type="number" value={amount} onChange={handleAmountChange} placeholder="Amount" />
            <FaMinus className="icon" onClick={() => updateSavings(false)} />
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="vital-expenses">
          <h2 className="vital"> Vital Expenses <FaPlus className="plus-icon" onClick={() => setShowInput(true)} /></h2>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index} className="expense-item">
                {expense} 
                <FaTrash className="delete-icon" onClick={() => handleDeleteExpense(index)} />
              </li>
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
    </div>
  );
};

export default Dashboard;
