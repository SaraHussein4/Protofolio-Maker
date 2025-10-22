import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // هنا هتتحقق من البيانات بعدين
    navigate('/home'); // استخدم useNavigate بدل window.location
  };

  return (
    <div className="login-container">
      <div className="login-form">
        {/* اللوجو الجديد */}
        <div className="logo-robot">
          <div className="robot-head">🤖</div>
          <h2>Portfolio Maker</h2>
        </div>
        
        <h1>Create Your Portfolio</h1>
        <p className="subtitle">Build your professional portfolio in minutes</p>
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="login-btn">Login</button>
          
          <p className="forgot-password">Forgot Password?</p>
        </form>
      </div>
    </div>
  );
};

export default Login;