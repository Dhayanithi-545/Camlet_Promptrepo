import "../styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import React from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // API URL and API Key PROMTREPO
    const apiUrl = "https://api.promptrepo.com/api/private/final-round-promptrepo";
    const apiKey = "d4c223e0c35540058d00c9f4b40da9ab";
    
    // Prepare the data to send
    const data = [
      {
        Email: email,
        Password: password
      }
    ];

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok && result && result.length > 0 && result[0].Email === email) {
        console.log("Logging in:", { email, password });
        navigate("/dashboard"); // Redirect to the dashboard on successful login
      } else {
        setError("Invalid credentials or server error."); // Show error message
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("Something went wrong. Please try again."); // Error handling
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="icon" /> Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FaLock className="icon" /> Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <div className="signup-link">
          Don't have an account? <a href="/signup">Sign up here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
