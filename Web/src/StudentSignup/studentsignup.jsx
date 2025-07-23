import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles.css';
import './studentsignup.css'

function Studentsignup() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign up (For Students)</h2>
        <form>
          <div className="form-group">
            <label>Full name</label>
            <input type="text" placeholder="Input full name" />
          </div>
          <div className="form-group">
            <label>School email</label>
            <input type="text" placeholder="example@gimpa.st.edu.gh" />
          </div>
          <div className="form-group">
            <label>Student ID</label>
            <input type="email" placeholder="223001001" />
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

export default Studentsignup;