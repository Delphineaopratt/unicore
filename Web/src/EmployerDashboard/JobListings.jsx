import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JobListings.css';
import Employersidebar from '../components/Employersidebar';

const jobListingsData = [
  {
    id: 1,
    title: 'UX Designer (Mid-Level)',
    type: 'Full-time',
    location: 'Remote',
    salary: '$90,000 - $110,000',
    deadline: '2024-08-30',
  },
  {
    id: 2,
    title: 'Senior Product Manager',
    type: 'Full-time',
    location: 'San Francisco, CA',
    salary: '$140,000 - $180,000',
    deadline: '2024-08-15',
  },
  {
    id: 3,
    title: 'Data Analyst Intern',
    type: 'Part-time',
    location: 'Austin, TX',
    salary: '$20/hour',
    deadline: '2024-09-01',
  },
  // Add more job listings as needed
];

const JobListings = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/Dashboard');
  };

  const handleEdit = (id) => {
    // Implement edit functionality or navigation
    alert(`Edit job listing with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    alert(`Delete job listing with id: ${id}`);
  };

  return (
    <Employersidebar>

    <div className="joblistings-container">
      <header className="joblistings-header">
        <button className="back-button" onClick={handleBack} aria-label="Back to Dashboard">
          &#8592;
        </button>
        <h1>Your Job Listings</h1>
      </header>

      <section className="joblistings-grid">
        {jobListingsData.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-card-header">
              <h3>{job.title}</h3>
              <span className="job-type">{job.type}</span>
            </div>
            <div className="job-card-details">
              <p><span role="img" aria-label="location">📍</span> {job.location}</p>
              <p><span role="img" aria-label="salary">💰</span> {job.salary}</p>
              <p><span role="img" aria-label="deadline">⏰</span> Deadline: {job.deadline}</p>
            </div>
            <div className="job-card-actions">
              <button className="edit-button" onClick={() => handleEdit(job.id)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(job.id)}>Delete</button>
            </div>
          </div>
        ))}
      </section>
    </div>
        </Employersidebar>

  );
};

export default JobListings;
