// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import RegistrationPage from "./pages/RegisterPage/RegistrationPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
        <Route path="/login" element={<LoginPage />} /> {/* Login Page */}
        <Route path="/admin" element={<AdminPage />} /> {/* Admin test Page */}
        <Route path="/user" element={<UserPage />} /> {/* User test Page */}
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
