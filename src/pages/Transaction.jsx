
import React, { useState } from "react";

const transaction = () => {
  const theme = {
    background: "#0D0D1F",
    cardBackground: "#1E1E3F",
    textColor: "white",
    headerBg: "#3A3A6E",
    rowOdd: "#25255A",
    rowEven: "#1E1E3F",
  };

  const initialTransactions = [
    { id: 1, type: "Essential", payment: "Credit Card", date: "30.1.2025", amount: "150.0", item: "Food" },
    { id: 2, type: "Essential", payment: "PhonePe", date: "20.1.2025", amount: "800.0", item: "Bag" },
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (id, field, value) => {
    setTransactions(transactions.map(txn => txn.id === id ? { ...txn, [field]: value } : txn));
  };

  const handleAddExpense = () => {
    const newExpense = {
      id: transactions.length + 1,
      type: "",
      payment: "",
      date: "",
      amount: "",
      item: ""
    };
    setTransactions([...transactions, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setTransactions(transactions.filter(txn => txn.id !== id));
  };

  const containerStyle = {
    backgroundColor: theme.background,
    color: theme.textColor,
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    padding: "20px",
  };

  const tableContainerStyle = {
    marginTop: "20px",
    backgroundColor: theme.cardBackground,
    padding: "20px",
    borderRadius: "10px",
    position: "relative",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  };

  const thTdStyle = {
    borderBottom: "1px solid #444",
    padding: "10px",
  };

  const editIconStyle = {
    position: "absolute",
    top: "15px",
    right: "20px",
    fontSize: "20px",
    cursor: "pointer",
    color: "white",
    background: "none",
    border: "none",
  };

  const inputStyle = {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    padding: "5px",
    width: "100%",
    fontSize: "14px",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "8px 15px",
    backgroundColor: "#28A745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  };

  const deleteButtonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  };

  return (
    <div style={containerStyle}>
      <h2>Campus Wallet</h2>

      <div style={tableContainerStyle}>
        <h3>
          Transaction History
          <button style={editIconStyle} title="Edit Transactions" onClick={handleEditClick}>
            {isEditing ? "✅" : "✏️"}
          </button>
        </h3>

        <table style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: theme.headerBg }}>
              <th style={thTdStyle}>Essential/Non-Essential</th>
              <th style={thTdStyle}>Mode of Payment</th>
              <th style={thTdStyle}>Date</th>
              <th style={thTdStyle}>Amount</th>
              <th style={thTdStyle}>Item</th>
              {isEditing && <th style={thTdStyle}>Action</th>}
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} style={{ backgroundColor: txn.id % 2 === 0 ? theme.rowOdd : theme.rowEven }}>
                <td style={thTdStyle}>
                  {isEditing ? (
                    <input
                      type="text"
                      style={inputStyle}
                      value={txn.type}
                      onChange={(e) => handleChange(txn.id, "type", e.target.value)}
                    />
                  ) : (
                    txn.type
                  )}
                </td>
                <td style={thTdStyle}>
                  {isEditing ? (
                    <input
                      type="text"
                      style={inputStyle}
                      value={txn.payment}
                      onChange={(e) => handleChange(txn.id, "payment", e.target.value)}
                    />
                  ) : (
                    txn.payment
                  )}
                </td>
                <td style={thTdStyle}>
                  {isEditing ? (
                    <input
                      type="text"
                      style={inputStyle}
                      value={txn.date}
                      onChange={(e) => handleChange(txn.id, "date", e.target.value)}
                    />
                  ) : (
                    txn.date
                  )}
                </td>
                <td style={thTdStyle}>
                  {isEditing ? (
                    <input
                      type="text"
                      style={inputStyle}
                      value={txn.amount}
                      onChange={(e) => handleChange(txn.id, "amount", e.target.value)}
                    />
                  ) : (
                    txn.amount
                  )}
                </td>
                <td style={thTdStyle}>
                  {isEditing ? (
                    <input
                      type="text"
                      style={inputStyle}
                      value={txn.item}
                      onChange={(e) => handleChange(txn.id, "item", e.target.value)}
                    />
                  ) : (
                    txn.item
                  )}
                </td>
                {isEditing && (
                  <td style={thTdStyle}>
                    <button style={deleteButtonStyle} onClick={() => handleDeleteExpense(txn.id)}>🗑️</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {isEditing && (
          <button style={buttonStyle} onClick={handleAddExpense}>
            ➕ Add Expense
          </button>
        )}
      </div>
    </div>
  );
};

export default transaction;