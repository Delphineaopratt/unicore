const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  address: { type: String },
  pricePerMonth: { type: Number, required: true },
  capacity: { type: Number, required: true },
  availableRooms: { type: Number, required: true, default: 0 },
  description: { type: String },
  amenities: [String],
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Employer or admin
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Hostel', hostelSchema);