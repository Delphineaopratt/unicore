const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Student
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  coverLetter: { type: String },
  status: { type: String, enum: ['applied', 'reviewed', 'accepted', 'rejected'], default: 'applied' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);