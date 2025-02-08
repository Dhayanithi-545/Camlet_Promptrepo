import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CamletWay from "./pages/CamletWay";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Settings from "./pages/settings";
import React from "react";
import Transaction from './pages/Transaction'

import '../src/index.css'
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camlet-way" element={<CamletWay />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> ✅ Add this
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
