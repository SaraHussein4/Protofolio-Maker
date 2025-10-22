import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Portfolio Maker</h3>
          <p>Create professional portfolios in minutes with our AI-powered platform.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/templates">Templates</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio-bot">Create Portfolio</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p>📧 support@portfoliomaker.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Portfolio Street, Creative City</p>
          </div>
          <button 
            className="footer-cta"
            onClick={() => window.location.href = '/portfolio-bot'}
          >
            Get Started
          </button>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Portfolio Maker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;