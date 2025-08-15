import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css'; 

export default function StudentSidebar({ children }) {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <h2 className="logo">Unicore</h2>
        <nav>
          <ul>
            <li><NavLink to="/StudentDashboard" className={({ isActive }) => isActive ? "active-link" : ""}>Dashboard</NavLink></li>
            <li><NavLink to="/HomePage" className={({ isActive }) => isActive ? "active-link" : ""}>Hostels</NavLink></li>
            <li><NavLink to="/JobsAndInternships" className={({ isActive }) => isActive ? "active-link" : ""}>Jobs & Internships</NavLink></li>
            <li><NavLink to="/Chatbot" className={({ isActive }) => isActive ? "active-link" : ""}>Chat with Unibot</NavLink></li>
            <li><NavLink to="/studentprofile" className={({ isActive }) => isActive ? "active-link" : ""}>My Profile</NavLink></li>
          </ul>
        </nav>
      </aside>
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
}
