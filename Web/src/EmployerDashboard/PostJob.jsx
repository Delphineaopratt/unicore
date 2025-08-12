import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostJob.css';
import Employersidebar from '../components/Employersidebar';

const PostJob = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/Dashboard');
  };

  return (
    <Employersidebar>

   
    <div className="postjob-container">
      <header className="postjob-header">
        <button className="back-button" onClick={handleBack} aria-label="Back to Dashboard">
          &#8592;
        </button>
        <h1>Employer Dashboard</h1>
      </header>

      <section className="postjob-form-section">
        <h2>Post A New Job</h2>
        <form className="postjob-form">
          <fieldset className="job-details">
            <legend>Job Details</legend>
            <div className="form-row">
              <label htmlFor="jobTitle">Job Title</label>
              <input type="text" id="jobTitle" name="jobTitle" placeholder="e.g., Junior Software Engineer" />
              <label htmlFor="jobType">Job Type</label>
              <select id="jobType" name="jobType" defaultValue="Full-time">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="jobDescription">Job Description</label>
              <textarea id="jobDescription" name="jobDescription" placeholder="Provide a detailed description of the role responsibilities..." />
            </div>
            <div className="form-row">
              <label htmlFor="jobRequirements">Job Requirements</label>
              <textarea id="jobRequirements" name="jobRequirements" placeholder="List essential skills, qualifications, and experience required..." />
            </div>
            <div className="form-row">
              <label htmlFor="jobLocation">Job Location</label>
              <input type="text" id="jobLocation" name="jobLocation" placeholder="e.g., Ring Road, Accra or Remote" />
            </div>
          </fieldset>

          <fieldset className="compensation">
            <legend>Compensation</legend>
            <div className="form-row">
              <label htmlFor="minSalary">Minimum Salary</label>
              <input type="number" id="minSalary" name="minSalary" placeholder="e.g., 80000" />
              <label htmlFor="maxSalary">Maximum Salary</label>
              <input type="number" id="maxSalary" name="maxSalary" placeholder="e.g., 120000" />
            </div>
          </fieldset>

          <fieldset className="application-settings">
            <legend>Application Settings</legend>
            <div className="form-row">
              <label htmlFor="applicationDeadline">Application Deadline</label>
              <input type="date" id="applicationDeadline" name="applicationDeadline" />
            </div>
          </fieldset>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={handleBack}>Cancel</button>
            <button type="submit" className="submit-button">Add Job Listing</button>
          </div>
        </form>
      </section>
    </div>
     </Employersidebar>
  );
};

export default PostJob;
