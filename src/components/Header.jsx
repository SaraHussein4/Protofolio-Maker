import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="robot-logo">🤖</span>
          <h2>Portfolio Maker</h2>
        </div>
        <nav className="nav">
          <a href="/home">Home</a>
          <a href="/templates">Templates</a>
          <a href="/services">Services</a>
          <a href="/portfolio-bot">Create Portfolio</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;