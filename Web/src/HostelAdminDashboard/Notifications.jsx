import React from 'react';
import HostelAdminSidebar from '../components/HostelAdminSidebar';
// import '../styles/HostelAdminDashboard.css';
import './Notifications.css'

export default function Notifications() {
  return (
    <div className="hostel-admin-dashboard">
      <HostelAdminSidebar activeSection="notifications" />
      <div className="main-content">
        <h1>Notifications</h1>
        <p>No notifications yet. New updates will appear here.</p>
      </div>
    </div>
  );
}
