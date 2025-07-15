const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  fullName: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  studentId: { type: String },
  course: { type: String },
  year: { type: Number },
  companyName: { type: String },
  industry: { type: String },
  department: { type: String },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Profile', profileSchema);