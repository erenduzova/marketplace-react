// src/components/Navbar/Navbar.js
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getUserRole, isAuthenticated } from "../../utils/auth";
import "./Navbar.css";
import Logo from "../../assets/images/logoyazi.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = isAuthenticated();
  const role = getUserRole();
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </Link>
        <button className="navbar-toggler" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className={currentPath === "/" ? "active" : ""}>
              Ana Sayfa
            </Link>
          </li>
          {!isLoggedIn && (
            <>
              <li>
                <Link
                  to="/about-us"
                  className={currentPath === "/about-us" ? "active" : ""}
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className={currentPath === "/register" ? "active" : ""}
                >
                  Kayıt Ol
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={currentPath === "/login" ? "active" : ""}
                >
                  Giriş Yap
                </Link>
              </li>
            </>
          )}

          {isLoggedIn && (role === "USER" || role === "STORE_OWNER") && (
            <>
              <li>
                <Link
                  to="/storeprofile"
                  className={currentPath === "/storeprofile" ? "active" : ""}
                >
                  Mağazam
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={currentPath === "/products" ? "active" : ""}
                >
                  Ürünler
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className={currentPath === "/marketplace" ? "active" : ""}
                >
                  Pazar Yeri
                </Link>
              </li>
              
            </>
          )}

          {isLoggedIn && (role === "ADMIN" || role === "SUPER_ADMIN") && (
            <>
              <li>
                <Link
                  to="/user-management"
                  className={currentPath === "/user-management" ? "active" : ""}
                >
                  Kullanıcı Yönetimi
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className={currentPath === "/categories" ? "active" : ""}
                >
                  Kategoriler
                </Link>
              </li>
              <li>
                <Link
                  to="/brands"
                  className={currentPath === "/brands" ? "active" : ""}
                >
                  Markalar
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
