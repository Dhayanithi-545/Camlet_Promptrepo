import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const App = () => {
  const theme = {
    background: "#202020",
    cardBackground: "#1E1E3F",
    textColor: "white",
    headerBg: "#3A3A6E",
    rowOdd: "#25255A",
    rowEven: "#1E1E3F",
    buttonBg: "#007BFF",
    buttonHover: "#0056b3",
    deleteColor: "#FF4C4C",
    deleteHover: "#CC0000",
  };

  const paymentModes = ["GPay", "PhonePe", "Cash", "Credit Card"];
  const expenseTypes = ["Essential", "Non-Essential"];

  const [transactions, setTransactions] = useState([
    { id: 1, type: "Essential", payment: "Credit Card", date: "2025-01-30", amount: 150, item: "Food" },
    { id: 2, type: "Non-Essential", payment: "PhonePe", date: "2025-01-20", amount: 800, item: "Bag" },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [reminders, setReminders] = useState(["Pay electricity bill", "Buy groceries"]);
  const [newReminder, setNewReminder] = useState("");

  const handleEditClick = () => setIsEditing(!isEditing);
  const handleChange = (id, field, value) => {
    setTransactions(transactions.map(txn => txn.id === id ? { ...txn, [field]: value } : txn));
  };
  const handleAddExpense = () => {
    setTransactions([...transactions, { id: transactions.length + 1, type: "", payment: "", date: "", amount: 0, item: "" }]);
  };
  const handleDeleteExpense = (id) => {
    setTransactions(transactions.filter(txn => txn.id !== id));
  };

  const handleAddReminder = () => {
    if (newReminder.trim() !== "") {
      setReminders([...reminders, newReminder]);
      setNewReminder("");
    }
  };
  const handleDeleteReminder = (index) => {
    setReminders(reminders.filter((_, i) => i !== index));
  };

  const chartData = {
    labels: transactions.map(txn => txn.item),
    datasets: [
      {
        label: "Transaction Amount",
        data: transactions.map(txn => txn.amount),
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: "Transaction History" },
    },
  };

  return (

    <div style={{ backgroundColor: theme.background, color: theme.textColor, fontFamily: "Arial, sans-serif", minHeight: "100vh", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
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



      <h2 style={{ marginBottom: "20px" }}>Campus Wallet</h2>

      {/* Reminder Box */}
      <div style={{ backgroundColor: theme.cardBackground, padding: "15px", borderRadius: "10px", width: "320px", marginBottom: "20px", textAlign: "center" }}>
        <h3 style={{ textAlign: "center" }}>🔔 Reminders</h3>
        <ul style={{ padding: "0", listStyle: "none", textAlign: "left" }}>
          {reminders.map((reminder, index) => (
            <li key={index} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
              {reminder}
              <button onClick={() => handleDeleteReminder(index)} style={{ background: "none", border: "none", cursor: "pointer", color: theme.deleteColor, fontSize: "16px" }}>❌</button>
            </li>
          ))}
        </ul>
        <input type="text" value={newReminder} onChange={(e) => setNewReminder(e.target.value)} placeholder="Add a reminder..." style={{ width: "70%", padding: "5px", borderRadius: "5px", border: "none", outline: "none" }} />
        <button onClick={handleAddReminder} style={{ background: theme.buttonBg, color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer", marginLeft: "5px" }}>➕</button>
      </div>

      {/* Transaction Table */}
      <div style={{ backgroundColor: theme.cardBackground, padding: "20px", borderRadius: "10px", width: "80%", position: "relative", marginBottom: "20px" }}>
        <h3>
          Transaction History
          <button onClick={handleEditClick} style={{ position: "absolute", top: "10px", right: "20px", cursor: "pointer", background: theme.buttonBg, color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }}>
            {isEditing ? "✅ Save" : "✏️ Edit"}
          </button>
        </h3>

        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", marginTop: "10px" }}>
          <thead>
            <tr style={{ backgroundColor: theme.headerBg }}>
              <th>Essential/Non-Essential</th>
              <th>Mode of Payment</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Item</th>
              {isEditing && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} style={{ backgroundColor: txn.id % 2 === 0 ? theme.rowOdd : theme.rowEven }}>
                <td>{isEditing ? <select value={txn.type} onChange={(e) => handleChange(txn.id, "type", e.target.value)}>{expenseTypes.map(type => <option key={type} value={type}>{type}</option>)}</select> : txn.type}</td>
                <td>{isEditing ? <select value={txn.payment} onChange={(e) => handleChange(txn.id, "payment", e.target.value)}>{paymentModes.map(mode => <option key={mode} value={mode}>{mode}</option>)}</select> : txn.payment}</td>
                <td>{isEditing ? <input type="date" value={txn.date} onChange={(e) => handleChange(txn.id, "date", e.target.value)} /> : txn.date}</td>
                <td>{isEditing ? <input type="number" value={txn.amount} onChange={(e) => handleChange(txn.id, "amount", e.target.value)} style={{ width: "80px" }} /> : txn.amount}</td>
                <td>{isEditing ? <input value={txn.item} onChange={(e) => handleChange(txn.id, "item", e.target.value)} /> : txn.item}</td>
                {isEditing && <td><button onClick={() => handleDeleteExpense(txn.id)} style={{ backgroundColor: theme.deleteColor, color: "white", border: "none", padding: "5px", borderRadius: "5px", cursor: "pointer" }}>🗑️</button></td>}
              </tr>
            ))}
          </tbody>
        </table>

        {isEditing && <button onClick={handleAddExpense} style={{ marginTop: "10px", padding: "8px 15px", backgroundColor: theme.buttonBg, color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>➕ Add Expense</button>}
      </div>

      {/* Bar Chart */}
      <div style={{ backgroundColor: theme.cardBackground, padding: "20px", borderRadius: "10px", width: "80%", marginTop: "20px" }}>
        <h3>Transaction History Chart</h3>
        <Bar data={chartData} options={chartOptions} />
      </div>
      
    </div>
  );
};

export default App;