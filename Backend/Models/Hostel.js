const mongoose = require('mongoose'); 

const hostelSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  availability: Number,
  bookings: [{ userId: String, date: Date }]
});

module.exports = mongoose.model('Hostel', hostelSchema);