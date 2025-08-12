import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css'; 

export default function Employersidebar({ children }) {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <h2 className="logo">Unicore</h2>
        <nav>
          <ul>
            <li><NavLink to="/PostJob" className={({ isActive }) => isActive ? "active-link" : ""}>Dashboard</NavLink></li>
            <li><NavLink to="/JobListings" className={({ isActive }) => isActive ? "active-link" : ""}>Job Listings</NavLink></li>
            <li><NavLink to="/Applications" className={({ isActive }) => isActive ? "active-link" : ""}>Applications</NavLink></li>
            <li><NavLink to="/Candidates" className={({ isActive }) => isActive ? "active-link" : ""}>Candidates</NavLink></li>
          </ul>
        </nav>
      </aside>
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
}
