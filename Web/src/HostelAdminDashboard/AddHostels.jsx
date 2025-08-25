import React, { useState, useContext } from 'react'; 
import HostelAdminSidebar from '../components/HostelAdminSidebar';
import { AddingNewRoom } from '../components/AddingNewRoom';
import './AddHostels.css';

export default function AddHostels() {
  const { rooms, setRooms } = useContext(AddingNewRoom);

  //New Hostel Form
  const [hostelName, setHostelName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [hostelAvailableRooms, setHostelAvailableRooms] = useState('');
  const [hostelPhotos, setHostelPhotos] = useState(null);


  //New Room Form 
  const [roomName, setRoomName] = useState('');
  const [amenities, setAmenities] = useState('');
  const [price, setPrice] = useState('');
  const [roomAvailableRooms, setRoomAvailableRooms] = useState('');
  const [roomPhotos, setRoomPhotos] = useState(null);

  // Clear Hostel form
  const clearHostelForm = () => {
    setHostelName('');
    setLocation('');
    setDescription('');
    setHostelAvailableRooms('');
    setHostelPhotos(null);
  };
// Clear Room form
  const clearRoomForm = () => {
    setRoomName('');
    setAmenities('');
    setPrice('');
    setRoomAvailableRooms('');
    setRoomPhotos(null);
  };

  // Submit Hostel form
  const handleHostelSubmit = (e) => {
    e.preventDefault();
    alert('Hostel uploaded!');
    clearHostelForm();
  };

  // Submit Room form
  const handleRoomSubmit = (e) => {
    e.preventDefault();

    const newRoom = {
      id: Date.now(),
      name: roomName,
      amenities,
      price,
      availableRooms: roomAvailableRooms,
      image: roomPhotos ? URL.createObjectURL(roomPhotos[0]) : "https://via.placeholder.com/200",
      description: [
        `Shared room of ${roomAvailableRooms}`,
        amenities,
        `${price} per bed`
      ]
    };

    setRooms([...rooms, newRoom]);
    alert('Room added!');
    clearRoomForm();
  };

  return (
    <div className="hostel-admin-dashboard">
      <HostelAdminSidebar activeSection="addHostels" />

      <div className="main-content">
        {/* Add Hostel Form */}
        <div className="form-section">
          <h2>Add New Hostel</h2>
          <p>Fill in the details to add a new hostel listing.</p>
          <form onSubmit={handleHostelSubmit} className="hostel-form">
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
                value={hostelAvailableRooms}
                onChange={(e) => setHostelAvailableRooms(e.target.value)}
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
                onChange={(e) => setHostelPhotos(e.target.files)}
              />
              <span className="file-upload-info">
                {hostelPhotos ? `${hostelPhotos.length} files chosen` : 'No files chosen'}
              </span>
            </div>
            <div className="form-buttons">
              <button type="button" className="btn-clear" onClick={clearHostelForm}>
                Clear Form
              </button>
              <button type="submit" className="btn-upload">
                Upload Hostel
              </button>
            </div>
          </form>
        </div>


        {/* --- Add Room Form --- */}
        <div className="form-section">
          <h2>Add New Room</h2>
          <form onSubmit={handleRoomSubmit} className="room-form">
            <div className="form-row">
              <label>Name of Room</label>
              <input
                type="text"
                placeholder="E.g., Room 1"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                required
              />
              <label>Amenities</label>
              <input
                type="text"
                placeholder="E.g., Balcony"
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <label>Price</label>
              <input
                type="number"
                placeholder="E.g., 3500"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
             
            </div>
            <div className="form-row file-upload-row">
              <label htmlFor="roomPhotos" className="file-upload-label">
                Hostel Photos
              </label>
              <input
                id="roomPhotos"
                type="file"
                onChange={(e) => setRoomPhotos(e.target.files)}
              />
              <span className="file-upload-info">
                {roomPhotos ? `${roomPhotos.length} files chosen` : 'No files chosen'}
              </span>
            </div>
            <div className="form-buttons">
              <button type="button" className="btn-clear" onClick={clearRoomForm}>
                Clear Form
              </button>
              <button type="submit" className="btn-upload">
                Add Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
