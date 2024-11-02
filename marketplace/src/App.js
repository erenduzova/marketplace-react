// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import RegistrationPage from "./pages/RegisterPage/RegistrationPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import MarketplacePage from"./pages/MarketplacePage/MarketplacePage";
import OrderManagementPage from "./pages/OrderManagmentPage/OrderManagmentPage";
import EfaturaPage from "./pages/EfaturaPage/EfaturaPage";
import SalesManagementPage from "./pages/SalesManagementPage/SalesManagementPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import StoreProfilePage from "./pages/StoreProfilePage/StoreProfilePage";
import ProductsSectionPage from "./pages/ProductsSectionPage/ProductsSectionPage";
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
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/ordermanagment" element={<OrderManagementPage />} />
        <Route path="/efatura"element={<EfaturaPage />} />
        <Route path="/salesmanagement"element={<SalesManagementPage />} />
        <Route path="/profile"element={<ProfilePage />} />
        <Route path="/storeprofile"element={<StoreProfilePage />} />
        <Route path="/products-section"element={<ProductsSectionPage />} />
      </Routes>
      
    </Router>
  );
}


export default App;
