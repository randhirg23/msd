import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

function Header({ user, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-icon">🚗</span>
          <span className="logo-text">CarRental</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="nav-links">
            <Link to="/" className="nav-link">Cars</Link>
            <Link to="/terms" className="nav-link">Terms & Charges</Link>
            {user && <Link to="/bookings" className="nav-link">My Bookings</Link>}
          </div>
          
          <div className="auth-section">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            
            {user ? (
              <div className="user-section">
                <div className="user-info">
                  <span className="user-name">Welcome, {user.name}</span>
                  <span className="user-email">{user.email}</span>
                </div>
                <button onClick={onLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="login-btn">
                  Sign In
                </Link>
                <Link to="/register" className="register-btn">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;