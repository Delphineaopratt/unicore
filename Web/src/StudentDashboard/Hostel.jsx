 import React, { useState } from 'react';
import './Hostel.css';
import StudentSidebar from '../components/Studentsidebar';
import { useNavigate } from 'react-router-dom';

const initialHostels = [
  { name: "Stephanie's", location: 'Kisseman', rooms: 6, image: '/images/hostel1.jpg' },
  { name: "Jane's Hostel", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman2.jpg' },
  { name: "The Dreamer", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman3.jpg' },
  { name: "Pink Hostel", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman4.jpg' },
  { name: "Palacio Hostel", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman1.jpg' },
  { name: "Chief Hostel", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman2.jpg' },
  { name: "Friendly Hostel", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman3.jpg' },
  { name: "Stephanie's", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman4.jpg' },
  { name: "Stephanie's", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman1.jpg' },
  { name: "Stephanie's", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman2.jpg' },
  { name: "Stephanie's", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman3.jpg' },
  { name: "Stephanie's", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman4.jpg' },
  { name: "Stephanie's", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman1.jpg' },
  { name: "Stephanie's", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman2.jpg' },
  { name: "Stephanie's", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman3.jpg' },
  { name: "Stephanie's", location: 'Kisseman', rooms: 6, image: '/images/stephanie-kisseman4.jpg' },

];

export default function Hostels() {
  const [hostels] = useState(initialHostels);
  const [activeTab, setActiveTab] = useState('Explore Hostels');
  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const navigate = useNavigate();
  const openHostelDetails = ()=>{
    navigate("/HostelDetails")
  }

  return (
    <StudentSidebar>
      <main className="main-content">
        <h1>Hostel Booking</h1>
        <p>Find and book a hostel near your university.</p>

        <div className="search-bar">
          <select>
            <option>Select University</option>
            <option>GIMPA</option>
            <option>UG Legon</option>
            <option>UPS</option>
          </select>
          <button className="location-btn">Enable Location</button>
        </div>

      <div className="tab-bar">
          <button
            className={activeTab === 'Explore Hostels' ? 'active' : ''}
            onClick={() => handleTabClick('Explore Hostels')}
          >
            Explore Hostels
          </button>
          <button
            className={activeTab === 'Booking History' ? 'active' : ''}
            onClick={() => handleTabClick('Booking History')}
          >
            Booking History
          </button>
          <button
            className={activeTab === 'Notifications' ? 'active' : ''}
            onClick={() => handleTabClick('Notifications')}
          >
            Notifications
          </button>
        </div>

        <h2>Hostel Listings</h2>
        <div className="hostel-grid">
          {hostels.map((hostel, index) => (
            <div key={index} className="hostel-card">
              <div className="hostel-image-placeholder"></div>
              <h4>{hostel.name}</h4>
              <p><span role="img" aria-label="location">📍</span> {hostel.location}</p>
              <p>{hostel.rooms} rooms available</p>
              <button className="view-btn"onClick={openHostelDetails}>View Hostel</button>
            </div>
          ))}
        </div>
      </main>
    </StudentSidebar>
  );
}