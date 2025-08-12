import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Applications.css';
import Employersidebar from '../components/Employersidebar';

const applicationsData = [
  {
    id: 1,
    name: 'Bernice Mensah',
    position: 'Senior Product Manager',
    status: 'Pending',
    avatar: '/public/images/profile1.png',
  },
  {
    id: 2,
    name: 'Bernice Mensah',
    position: 'Senior Product Manager',
    status: 'Pending',
    avatar: '/public/images/profile1.png',
  },
  {
    id: 3,
    name: 'Bernice Mensah',
    position: 'Senior Product Manager',
    status: 'Shortlisted',
    avatar: '/public/images/profile1.png',
  },
  {
    id: 4,
    name: 'Bernice Mensah',
    position: 'Senior Product Manager',
    status: 'Rejected',
    avatar: '/public/images/profile1.png',
  },
  {
    id: 5,
    name: 'Bernice Mensah',
    position: 'Senior Product Manager',
    status: 'Shortlisted',
    avatar: '/public/images/profile1.png',
  },
  {
    id: 6,
    name: 'Bernice Mensah',
    position: 'Senior Product Manager',
    status: 'Rejected',
    avatar: '/public/images/profile1.png',
  },
];

const statusColors = {
  Pending: '#f0ad4e',
  Shortlisted: '#28a745',
  Rejected: '#dc3545',
};

const Applications = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/Dashboard');
  };

  const isDisabled = (status) => {
    return status.toLowerCase() === 'shortlisted' || status.toLowerCase() === 'rejected';
  };

  return (
    <Employersidebar>

    <div className="applications-container">
      <header className="applications-header">
        <button className="back-button" onClick={handleBack} aria-label="Back to Dashboard">
          &#8592;
        </button>
        <h1>Applications</h1>
      </header>

      <section className="applications-list">
        {applicationsData.map((app) => (
          <div key={app.id} className="application-card">
            <img src={app.avatar} alt={app.name} className="applicant-avatar" />
            <div className="application-info">
              <h3>{app.name}</h3>
              <p>Applied for: {app.position}</p>
              <div className="application-buttons">
                <button className="view-resume-button">View Resume</button>
                <button className="view-profile-button">View Profile</button>
              </div>
            </div>
            <div className="application-status" style={{ backgroundColor: statusColors[app.status] }}>
              Status: {app.status}
            </div>
            <div className="application-actions">
              <button className="reject-button" disabled={isDisabled(app.status)}>Reject</button>
              <button className="shortlist-button" disabled={isDisabled(app.status)}>Shortlist</button>
            </div>
          </div>
        ))}
      </section>
    </div>
</Employersidebar>

  );
};

export default Applications;
