import React, { useState } from "react";
import "../styles/Dashboard.css";
import { FaMoneyBill, FaShoppingCart, FaPiggyBank, FaComments, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Bot from "../components/Bot";

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
          <p>{totalMoney}</p>
          <div className="adjust-buttons">
            <FaPlus className="icon" onClick={() => updateTotalMoney(true)} />
            <input type="number" value={amount} onChange={handleAmountChange} placeholder="Amount" />
            <FaMinus className="icon" onClick={() => updateTotalMoney(false)} />
          </div>
        </div>
        <div className="stat-card">
          <FaShoppingCart className="stat-icon" />
          <h3>Money Spent</h3>
          <p>{moneySpent}</p>
          <div className="adjust-buttons">
            <FaPlus className="icon" onClick={() => updateMoneySpent(true)} />
            <input type="number" value={amount} onChange={handleAmountChange} placeholder="Amount" />
            <FaMinus className="icon" onClick={() => updateMoneySpent(false)} />
          </div>
        </div>
        <div className="stat-card">
          <FaPiggyBank className="stat-icon" />
          <h3>Saving</h3>
          <p>{savings}</p>
          <div className="adjust-buttons">
            <FaPlus className="icon" onClick={() => updateSavings(true)} />
            <input type="number" value={amount} onChange={handleAmountChange} placeholder="Amount" />
            <FaMinus className="icon" onClick={() => updateSavings(false)} />
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="vital-expenses">
          <h3>Vital Expenses <FaPlus className="plus-icon" onClick={() => setShowInput(true)} /></h3>
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
