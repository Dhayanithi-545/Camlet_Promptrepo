import { useState } from "react";
import "../styles/Signup.css";
import { FaUser, FaEnvelope, FaLock, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate fields as the user types
    if (name === "email") {
      setErrors({
        ...errors,
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Invalid email address"
          : "",
      });
    }

    if (name === "password") {
      setErrors({
        ...errors,
        password:
          value.length < 6 ? "Password must be at least 6 characters" : "",
      });
    }

    if (name === "confirmPassword") {
      setErrors({
        ...errors,
        confirmPassword:
          value !== formData.password ? "Passwords do not match" : "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? "Invalid email address"
        : "",
      password:
        formData.password.length < 6
          ? "Password must be at least 6 characters"
          : "",
      confirmPassword:
        formData.confirmPassword !== formData.password
          ? "Passwords do not match"
          : "",
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).every((error) => !error)) {
      console.log("Form Data Submitted:", formData);
      // Reset form fields after submission
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert("Signup successful!");
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <FaUser className="icon" /> Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="icon" /> Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FaLock className="icon" /> Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">
              <FaCheck className="icon" /> Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;