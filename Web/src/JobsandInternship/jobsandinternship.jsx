import React from 'react';
import './jobsandinternship.css';
import Layout from '../components/Layout';

export default function JobsAndInternships({ onPersonalize }) {
  return (
    <Layout>
      <div className="jobs-page">
        <header className="jobs-header">
          <h1>Find Your Career. You Deserve it.</h1>
          <p>Explore job and internship opportunities tailored to your field of study.</p>
          <button className="personalize-btn" onClick={onPersonalize}>
            Personalize Job Feed
          </button>
        </header>

        <section className="featured-jobs">
          <h2>Featured Jobs</h2>
          <div className="tab-bar">
          <button className="active">Featured Jobs</button>
          <button>History</button>
          <button>Notifications</button>

        </div>
          <div className="job-cards">
            <div className="job-card">
              <img src="/images/company1.jpg" alt="Company 1" />
              <h4>Frontend Developer Intern</h4>
              <p>at TechNova • Remote</p>
              <button>Apply Now</button>
            </div>
            <div className="job-card">
              <img src="/images/company2.jpg" alt="Company 2" />
              <h4>Marketing Assistant</h4>
              <p>at AdsGuru • Accra</p>
              <button>Apply Now</button>
            </div>
             <div className="job-card">
              <img src="/images/company2.jpg" alt="Company 2" />
              <h4>Social media manager</h4>
              <p>at Multimedia • Accra</p>
              <button>Apply Now</button>
            </div>
             <div className="job-card">
              <img src="/images/company2.jpg" alt="Company 2" />
              <h4>Junior Software Developer</h4>
              <p>at Amalgamate Ltd • Kaneshie</p>
              <button>Apply Now</button>
            </div>
             <div className="job-card">
              <img src="/images/company2.jpg" alt="Company 2" />
              <h4>Marketing Assistant</h4>
              <p>at AdsGuru • Accra</p>
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
