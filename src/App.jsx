import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CamletWay from "./pages/CamletWay";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Settings from "./pages/settings";
import React from "react";
<<<<<<< HEAD
import Transaction from './pages/Transaction'
=======
>>>>>>> 91f8395fefe62cffb24f83f47218d9c02cadded5
import '../src/index.css'
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camlet-way" element={<CamletWay />} />
        <Route path="/transaction">{Transaction}</Route>
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Add this */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
