import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles.css';
import './employersignup.css'

function Employersignup() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign up (For Employers)</h2>
        <form>
          <div className="form-group">
            <label>Full name</label>
            <input type="text" placeholder="Input full name" />
          </div>
          <div className="form-group">
            <label>Company name</label>
            <input type="text" placeholder="Name of company" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="example.email@gmail.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter at least 8+ characters" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter at least 8+ characters" />
          </div>
          <button type="submit" className="signup-btn">Sign up</button>
          <p className="login-link">Already have an account? <a href="#">Log in</a></p>
        </form>
      </div>
    </div>
  );
}

export default Employersignup;