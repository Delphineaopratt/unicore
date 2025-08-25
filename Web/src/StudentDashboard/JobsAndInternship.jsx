import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobsAndInternship.css';
import Layout from '../components/Studentsidebar';

export default function JobsAndInternships() {
  // Function to load the onboarding form
  const navigate = useNavigate();
  const goToOnboardingPage = () =>{
  navigate("/OnboardingForm");
  }

  //Function for responsive tabs
  const [activeTab, setActiveTab] =useState('Featured Jobs');
  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <Layout>
      <div className="jobs-page">
        <header className="jobs-header">
          <h1>Find Your Career. You Deserve it.</h1>
          <p>Explore job and internship opportunities tailored to your field of study.</p>
          <button className="personalize-btn" onClick={goToOnboardingPage}>
            Personalize Job Feed
          </button>
        </header>

        <section className="featured-jobs">

        <div className="tab-bar">
           <button
            className={activeTab === 'Featured Jobs' ? 'active' : ''}
            onClick={() => handleTabClick('Featured Jobs')}
          >
            Featured Jobs
          </button>
           <button
            className={activeTab === 'History' ? 'active' : ''}
            onClick={() => handleTabClick('History')}
          >
            History
          </button>
           <button
            className={activeTab === 'Notifications' ? 'active' : ''}
            onClick={() => handleTabClick('Notifications')}
          >Notifications</button>
        </div>
          <h2>Featured Jobs</h2>

          <div className="job-cards">
            <div className="job-card">
              <h4>Frontend Developer Intern</h4>
              <p>at TechNova • Remote</p>
              <p>GHC 2500 - 5000</p>
              <p>Deadline:30-11-2025</p>
              <button>Apply Now</button>
            </div>
            <div className="job-card">
              <h4>Marketing Assistant</h4>
              <p>at AdsGuru • Accra</p>
               <p>GHC 2500 - 5000</p>
              <p>Deadline:30-11-2025</p>
              <button>Apply Now</button>
            </div>
             <div className="job-card">
              <h4>Social media manager</h4>
              <p>at Multimedia • Accra</p>
               <p>GHC 2500 - 5000</p>
              <p>Deadline:30-11-2025</p>
              <button>Apply Now</button>
            </div>
             <div className="job-card">
              <h4>Junior Software Developer</h4>
              <p>at Amalgamate Ltd • Kaneshie</p>
               <p>GHC 2500 - 5000</p>
              <p>Deadline:30-11-2025</p>
              <button>Apply Now</button>
            </div>
             <div className="job-card">
              <h4>Marketing Assistant</h4>
              <p>at AdsGuru • Accra</p>
               <p>GHC 2500 - 5000</p>
              <p>Deadline:30-11-2025</p>
              <button>Apply Now</button>
            </div>
             <div className="job-card">
              <h4>Marketing Assistant</h4>
              <p>at AdsGuru • Accra</p>
               <p>GHC 2500 - 5000</p>
              <p>Deadline:30-11-2025</p>
              <button>Apply Now</button>
            </div>
             <div className="job-card">
              <h4>Marketing Assistant</h4>
              <p>at AdsGuru • Accra</p>
               <p>GHC 2500 - 5000</p>
              <p>Deadline:30-11-2025</p>
              <button>Apply Now</button>
            </div>
             <div className="job-card">
              <h4>Marketing Assistant</h4>
              <p>at AdsGuru • Accra</p>
               <p>GHC 2500 - 5000</p>
              <p>Deadline:30-11-2025</p>
              <button>Apply Now</button>
            </div>
            
          </div>
        </section>

        <section className="reviews">
          <h2>Student Reviews</h2>
          <blockquote>"This app helped me land my dream internship!" - Nana A.</blockquote>
          <blockquote>"Very intuitive and tailored!" - Delphine P.</blockquote>
        </section>
      </div>
    </Layout>
  );
}
