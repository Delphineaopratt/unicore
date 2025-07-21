import React from 'react';
import '../styles.css';
import './landingpage.css'

function Landingpage() {
  return (
    <div className="container">
      <header>
        <div className="logo">
               <img src="/images/unicorelogo.png"  alt = "Img"/>
          Unicore
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Why Unicore?</a>
          <a href="#">Team</a>
          <a href="#" className='btn'>Login</a>
        </nav>
      </header>
      <section className="hero">
          <img src="/images/unicorelogo.png"  alt = "Img"/>
        <h1>Unicore</h1>
        <p>Your campus companion.</p>
        <div className="buttons">
          <a href="#" className="btn">For Students</a>
          <a href="#" className="btn">For Hostels</a>
          <a href="#" className="btn">For Employers</a>
        </div>
        <img src="/images/background_img.png"  alt = "Img"/>
      </section>
      <section className="features">
        <h2>Product Features</h2>
        <div className="feature-item">
          <img src="/images/feature1.png" alt="Feature 1" />
          <h3>Feature</h3>
          <p>Find tailored jobs easily</p>
          <a href="#" className="btn">Learn More</a>
        </div>
        <div className="feature-item">
          <img src="/images/feature2.png" alt="Feature 2" />
          <h3>Feature</h3>
          <p>Have a chatbot write your CV.</p>
          <a href="#" className="btn">Learn More</a>
        </div>
      </section>
      <section className="why-unicore">
        <h2>Why Choose Unicore?</h2>
        <div className="why-item">
          <h3>Seamless Integration</h3>
          <p>Integrate with your favorite tools effortlessly.</p>
        </div>
        <div className="why-item">
          <h3>Custom Jobs</h3>
          <p>Create tailored job listings with ease.</p>
        </div>
        <div className="why-item">
          <h3>Digital Management</h3>
          <p>Manage your team digitally with advanced tools.</p>
        </div>
        <div className="why-item">
          <h3>Personal Recommendations</h3>
          <p>Get personalized suggestions for your needs.</p>
        </div>
        <div className="why-item">
          <h3>Real-time Updates</h3>
          <p>Stay updated with real-time notifications.</p>
        </div>
      </section>
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="/images/profile1.png" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Founder</p>
          <a href="#" className="social">Twitter</a>
        </div>
        <div className="team-member">
          <img src="/images/profile1.png" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Co-founder</p>
          <a href="#" className="social">Twitter</a>
        </div>
        <div className="team-member">
          <img src="/images/profile1.png" alt="Team Member 3" />
          <h3>Alex Brown</h3>
          <p>Developer</p>
          <a href="#" className="social">Twitter</a>
        </div>
      </section>
      <footer>
        <p>Unicore</p>
      </footer>
    </div>
  );
}

export default Landingpage;