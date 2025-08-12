import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Candidates.css';
import Employersidebar from '../components/Employersidebar';

const candidatesData = [
  {
    id: 1,
    name: 'Bernice Mensah',
    position: 'Senior Product Manager',
    status: 'Shortlisted',
    avatar: '/public/images/profile1.png',
  },
  {
    id: 2,
    name: 'Bernice Mensah',
    position: 'Senior Product Manager',
    status: 'Shortlisted',
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
    status: 'Shortlisted',
    avatar: '/public/images/profile1.png',
  },
  {
    id: 5,
    name: 'Bernice Mensah',
    position: 'Senior Product Manager',
    status: 'Shortlisted',
    avatar: '/public/images/profile1.png',
  },
];

const statusColors = {
  Shortlisted: '#28a745',
};

const Candidates = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/Dashboard');
  };

  return (
    <Employersidebar>

    <div className="candidates-container">
      <header className="candidates-header">
        <button className="back-button" onClick={handleBack} aria-label="Back to Dashboard">
          &#8592;
        </button>
        <h1>Candidates</h1>
      </header>

      <section className="candidates-list">
        {candidatesData.map((candidate) => (
          <div key={candidate.id} className="candidate-card">
            <img src={candidate.avatar} alt={candidate.name} className="candidate-avatar" />
            <div className="candidate-info">
              <h3>{candidate.name}</h3>
              <p>Applied for: {candidate.position}</p>
            </div>
            <div className="candidate-status" style={{ backgroundColor: statusColors[candidate.status] }}>
              Status: {candidate.status}
            </div>
            <div className="candidate-actions">
              <button className="view-resume-button">View Resume</button>
              <button className="view-profile-button">View Profile</button>
              <button className="reject-button" disabled>Reject</button>
              <button className="shortlist-button" disabled>Shortlist</button>
            </div>
          </div>
        ))}
      </section>
    </div>
</Employersidebar>

  );
};

export default Candidates;
