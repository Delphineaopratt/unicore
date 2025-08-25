import React, { useState, useContext } from 'react';
import HostelAdminSidebar from '../components/HostelAdminSidebar';
import { AddingNewRoom } from '../components/AddingNewRoom';
import './HostelListings.css';

export default function HostelListings() {
  const [activeTab, setActiveTab] = useState('hostelListings');
  const { rooms } = useContext(AddingNewRoom);

  const hostels = [
    { id: 1, name: "Stephanie's Hostel", location: 'Westlands', roomsAvailable: 6, images: ['https://images.unsplash.com/photo-1501183638714-3c3b0eac7f5a?auto=format&fit=crop&w=800&q=60'] },
    { id: 2, name: 'Joyous Hostel', location: 'Dzorwulu', roomsAvailable: 3, images: ['https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60'] },
  ];

  return (
    <div className="hostel-admin-dashboard">
      <HostelAdminSidebar activeSection="hostelListings" />
      <div className="main-content">
        <h1>Hostel Management Dashboard</h1>
        <div className="tabs">
          <button
            className={activeTab === 'hostelListings' ? 'active' : ''}
            onClick={() => setActiveTab('hostelListings')}
          >
            Hostel Listings
          </button>
          <button
            className={activeTab === 'availableRooms' ? 'active' : ''}
            onClick={() => setActiveTab('availableRooms')}
          >
            Available Rooms
          </button>
        </div>

        {activeTab === 'hostelListings' && (
          <div className="hostel-cards">
            {hostels.map((hostel) => (
              <div key={hostel.id} className="hostel-card">
                <div className="hostel-image-slider">
                  <img src={hostel.images[0]} alt={hostel.name} />
                </div>
                <div className="hostel-info">
                  <h3>{hostel.name}</h3>
                  <p>{hostel.location}</p>
                  <p>{hostel.roomsAvailable} rooms available</p>
                  <button className="btn-view-hostel">View Hostel</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'availableRooms' && (
          <div className="available-rooms-container">
            <h2>Available Rooms</h2>
            <div className="room-cards">
              {rooms.length === 0 ? (
                <p>No rooms added yet. Go to "Add Hostels" to create one.</p>
              ) : (
                rooms.map((room) => (
                  <div key={room.id} className="room-card">
                    <div className="room-image-slider">
                      <img src={room.image} alt={room.name} />
                    </div>
                    <div className="room-info">
                      <h3>{room.name}</h3>
                      <ul>
                        {room.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                      <div className="room-buttons">
                        <button className="btn-edit">Edit</button>
                        <button className="btn-delete">Delete</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
