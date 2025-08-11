import React, { useState } from 'react';
import './hosteladmindashboard.css';

const Sidebar = ({ onNavigate, activeSection }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/public/images/unicorelogo.png" alt="Unicore" />
      </div>
      <ul className="sidebar-menu">
        <li
          className={activeSection === 'dashboard' ? 'active' : ''}
          onClick={() => onNavigate('dashboard')}
        >
          <i className="fas fa-building"></i> Add Hostels
        </li>
        <li
          className={activeSection === 'hostelListings' ? 'active' : ''}
          onClick={() => onNavigate('hostelListings')}
        >
          <i className="fas fa-list"></i> Hostel Listings
        </li>
        <li
          className={activeSection === 'notifications' ? 'active' : ''}
          onClick={() => onNavigate('notifications')}
        >
          <i className="fas fa-bell"></i> Notifications
        </li>
      </ul>
    </div>
  );
};

const AddNewHostelForm = () => {
  const [hostelName, setHostelName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [availableRooms, setAvailableRooms] = useState('');
  const [photos, setPhotos] = useState(null);

  const clearForm = () => {
    setHostelName('');
    setLocation('');
    setDescription('');
    setAvailableRooms('');
    setPhotos(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle hostel upload logic here
    alert('Hostel uploaded!');
    clearForm();
  };

  return (
    <div className="form-section">
      <h2>Add New Hostel</h2>
      <p>Fill in the details to add a new hostel listing.</p>
      <form onSubmit={handleSubmit} className="hostel-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="E.g., Friendly Hostel"
            value={hostelName}
            onChange={(e) => setHostelName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="E.g., Westlands"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            placeholder="Hostel Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="E.g., 8"
            value={availableRooms}
            onChange={(e) => setAvailableRooms(e.target.value)}
            required
            min="0"
          />
        </div>
        <div className="form-row file-upload-row">
          <label htmlFor="hostelPhotos" className="file-upload-label">
            Hostel Photos
          </label>
          <input
            id="hostelPhotos"
            type="file"
            multiple
            onChange={(e) => setPhotos(e.target.files)}
          />
          <span className="file-upload-info">
            {photos ? `${photos.length} files chosen` : 'No files chosen'}
          </span>
        </div>
        <div className="form-buttons">
          <button type="button" className="btn-clear" onClick={clearForm}>
            Clear Form
          </button>
          <button type="submit" className="btn-upload">
            Upload Hostel
          </button>
        </div>
      </form>
    </div>
  );
};

const AddNewRoomForm = () => {
  const [roomName, setRoomName] = useState('');
  const [amenities, setAmenities] = useState('');
  const [price, setPrice] = useState('');
  const [availableRooms, setAvailableRooms] = useState('');
  const [photos, setPhotos] = useState(null);

  const clearForm = () => {
    setRoomName('');
    setAmenities('');
    setPrice('');
    setAvailableRooms('');
    setPhotos(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle room add logic here
    alert('Room added!');
    clearForm();
  };

  return (
    <div className="form-section">
      <h2>Add New Room</h2>
      <p>Fill in the details to add a new hostel listing.</p>
      <form onSubmit={handleSubmit} className="room-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="E.g., Room 1"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="E.g., Balcony"
            value={amenities}
            onChange={(e) => setAmenities(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            placeholder="E.g., 3500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0"
          />
          <input
            type="number"
            placeholder="E.g., 8"
            value={availableRooms}
            onChange={(e) => setAvailableRooms(e.target.value)}
            required
            min="0"
          />
        </div>
        <div className="form-row file-upload-row">
          <label htmlFor="roomPhotos" className="file-upload-label">
            Hostel Photos
          </label>
          <input
            id="roomPhotos"
            type="file"
            multiple
            onChange={(e) => setPhotos(e.target.files)}
          />
          <span className="file-upload-info">
            {photos ? `${photos.length} files chosen` : 'No files chosen'}
          </span>
        </div>
        <div className="form-buttons">
          <button type="button" className="btn-clear" onClick={clearForm}>
            Clear Form
          </button>
          <button type="submit" className="btn-upload">
            Add room
          </button>
        </div>
      </form>
    </div>
  );
};

const HostelListings = ({ onViewAvailableRooms }) => {
  const [activeTab, setActiveTab] = useState('hostelListings');

  const hostels = [
    {
      id: 1,
      name: "Stephanie's Hostel",
      location: 'Westlands',
      roomsAvailable: 6,
      images: [
        'https://images.unsplash.com/photo-1501183638714-3c3b0eac7f5a?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60',
      ],
    },
    {
      id: 2,
      name: 'Joyous Hostel',
      location: 'Dzorwulu',
      roomsAvailable: 3,
      images: [
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1501183638714-3c3b0eac7f5a?auto=format&fit=crop&w=800&q=60',
      ],
    },
  ];

  return (
    <div className="hostel-listings-container">
      <div className="tabs">
        <button
          className={activeTab === 'hostelListings' ? 'active' : ''}
          onClick={() => setActiveTab('hostelListings')}
        >
          Hostel Listings
        </button>
        <button
          className={activeTab === 'availableRooms' ? 'active' : ''}
          onClick={() => {
            setActiveTab('availableRooms');
            onViewAvailableRooms();
          }}
        >
          Available Rooms
        </button>
      </div>
      <h2>Your Hostel Listings</h2>
      {activeTab === 'hostelListings' && (
        <div className="hostel-cards">
          {hostels.map((hostel) => (
            <div key={hostel.id} className="hostel-card">
              <div className="hostel-image-slider">
                <img src={hostel.images[0]} alt={hostel.name} />
                {/* Slider dots */}
                <div className="slider-dots">
                  {hostel.images.map((_, idx) => (
                    <span key={idx} className={idx === 0 ? 'active' : ''}></span>
                  ))}
                </div>
              </div>
              <div className="hostel-info">
                <h3>{hostel.name}</h3>
                <p><i className="fas fa-map-marker-alt"></i> {hostel.location}</p>
                <p><i className="fas fa-bed"></i> {hostel.roomsAvailable} rooms available</p>
                <button className="btn-view-hostel">View Hostel</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const AvailableRooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Room 1',
      description: [
        'Shared room of 4',
        'Shared bathroom',
        'Shared kitchen',
        'Balcony',
        'Shared bathroom',
        '2000 per bed',
      ],
      image: 'https://images.unsplash.com/photo-1501183638714-3c3b0eac7f5a?auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 5,
      name: 'Room 5',
      description: [
        'Single room',
        'Single bathroom',
        'Single kitchen',
        'Balcony',
        '6000',
      ],
      image: 'https://images.unsplash.com/photo-1501183638714-3c3b0eac7f5a?auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 10,
      name: 'Room 10',
      description: [
        'Shared room of 4',
        'Shared bathroom',
        'Shared kitchen',
        'Balcony',
        'Shared bathroom',
        '2000 per bed',
      ],
      image: 'https://images.unsplash.com/photo-1501183638714-3c3b0eac7f5a?auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 11,
      name: 'Room 11',
      description: [
        'Shared room of 4',
        'Shared bathroom',
        'Shared kitchen',
        'Balcony',
        'Shared bathroom',
        '2000 per bed',
      ],
      image: 'https://images.unsplash.com/photo-1501183638714-3c3b0eac7f5a?auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 12,
      name: 'Room 12',
      description: [
        'Shared room of 4',
        'Shared bathroom',
        'Shared kitchen',
        'Balcony',
        'Shared bathroom',
        '2000 per bed',
      ],
      image: 'https://images.unsplash.com/photo-1501183638714-3c3b0eac7f5a?auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 13,
      name: 'Room 13',
      description: [
        'Shared room of 4',
        'Shared bathroom',
        'Shared kitchen',
        'Balcony',
        'Shared bathroom',
        '2000 per bed',
      ],
      image: 'https://images.unsplash.com/photo-1501183638714-3c3b0eac7f5a?auto=format&fit=crop&w=800&q=60',
    },
  ];

  return (
    <div className="available-rooms-container">
      <div className="tabs">
        <button className="active">Explore Hostels</button>
        <button>Booking History</button>
      </div>
      <h2>Hostel Description</h2>
      <p>
        Stephanie's Hostel is located at Westlands, near Bethel Dental Clinic, on the 19th Street of Nii Lane. We have comfortable single and shared rooms coming at affordable prices. Each single room is ....... Shared rooms are ....
      </p>
      <h2>Available Rooms</h2>
      <div className="room-cards">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <div className="room-image-slider">
              <img src={room.image} alt={room.name} />
              <div className="slider-dots">
                {room.description.map((_, idx) => (
                  <span key={idx} className={idx === 0 ? 'active' : ''}></span>
                ))}
              </div>
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
        ))}
      </div>
    </div>
  );
};

const HostelAdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showAvailableRooms, setShowAvailableRooms] = useState(false);

  const handleNavigate = (section) => {
    setActiveSection(section);
    setShowAvailableRooms(false);
  };

  const handleViewAvailableRooms = () => {
    setShowAvailableRooms(true);
  };

  return (
    <div className="hostel-admin-dashboard">
      <Sidebar onNavigate={handleNavigate} activeSection={activeSection} />
      <div className="main-content">
        <h1>Hostel Management Dashboard</h1>
        {activeSection === 'dashboard' && (
          <>
            <AddNewHostelForm />
            <AddNewRoomForm />
          </>
        )}
        {activeSection === 'hostelListings' && !showAvailableRooms && (
          <HostelListings onViewAvailableRooms={handleViewAvailableRooms} />
        )}
        {activeSection === 'hostelListings' && showAvailableRooms && <AvailableRooms />}
        {activeSection === 'notifications' && (
          <div>
            {/* Placeholder for notifications */}
            <h2>Notifications (to be implemented)</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default HostelAdminDashboard;
