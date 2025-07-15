const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String },
  salary: { type: Number },
  requirements: [String],
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Employer
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['open', 'closed'], default: 'open' }
});

module.exports = mongoose.model('Job', jobSchema);