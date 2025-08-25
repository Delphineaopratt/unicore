import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hostel.css';

const HostelDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/hostels'); // Adjust the path as necessary
  };

  return (
    <div className="hostel-details">
      <button className="back-button" onClick={handleBack}>
        ← Back
      </button>
      <h1>Hostel Description</h1>
      <p>Stephanie's Hostel is located at Kisseman, near Bethel Dental Clinic, on the 19th Street of Nii Lane. We have comfortable single and shared rooms coming at affordable prices. Each single room is .... Shared rooms are .....</p>
      <h2>Available Rooms</h2>
      <div className="room-grid">

        {/* Example room cards */}
        <div className="room-card">
          <h4>Room 1</h4>
          <p>Shared room of 4</p>
          <p>Balcony</p>
          <p>Shared bathroom</p>
          <p>2000 per bed</p>
          <button className="book-btn">Book</button>
        </div>
          <div className="room-card">
          <h4>Room 1</h4>
          <p>Shared room of 4</p>
          <p>Balcony</p>
          <p>Shared bathroom</p>
          <p>2000 per bed</p>
          <button className="book-btn">Book</button>
        </div>
          <div className="room-card">
          <h4>Room 1</h4>
          <p>Shared room of 4</p>
          <p>Balcony</p>
          <p>Shared bathroom</p>
          <p>2000 per bed</p>
          <button className="book-btn">Book</button>
        </div>
          <div className="room-card">
          <h4>Room 1</h4>
          <p>Shared room of 4</p>
          <p>Balcony</p>
          <p>Shared bathroom</p>
          <p>2000 per bed</p>
          <button className="book-btn">Book</button>
        </div>
          <div className="room-card">
          <h4>Room 1</h4>
          <p>Shared room of 4</p>
          <p>Balcony</p>
          <p>Shared bathroom</p>
          <p>2000 per bed</p>
          <button className="book-btn">Book</button>
        </div>
          <div className="room-card">
          <h4>Room 1</h4>
          <p>Shared room of 4</p>
          <p>Balcony</p>
          <p>Shared bathroom</p>
          <p>2000 per bed</p>
          <button className="book-btn">Book</button>
        </div>


      </div>
    </div>
  );
};

export default HostelDetails;
