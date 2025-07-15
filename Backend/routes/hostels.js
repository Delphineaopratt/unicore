const express = require('express');
const router = express.Router();
const Hostel = require('../Models/Hostel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// const authMiddleware = (req, res, next) => {
//   const token = req.headers['authorization']?.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'No token provided' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(403).json({ message: 'Invalid token' });
//     req.user = decoded;
//     next();
//   });
// };

const authMiddleware = require('../middleware/auth');

// Create
router.post('/', authMiddleware, async (req, res) => {
  const { name, location, address, pricePerMonth, capacity, availableRooms, amenities } = req.body;
  try {
    const hostel = new Hostel({ name, location, address, pricePerMonth, capacity, availableRooms, amenities, postedBy: req.user.id });
    await hostel.save();
    res.status(201).json(hostel);
  } catch (error) {
    res.status(500).json({ message: 'Error creating hostel', error });
  }
});

// Read all
router.get('/', authMiddleware, async (req, res) => {
  try {
    const hostels = await Hostel.find().populate('postedBy', 'email');
    res.json(hostels);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hostels', error });
  }
});

// Read one
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id).populate('postedBy', 'email');
    if (!hostel) return res.status(404).json({ message: 'Hostel not found' });
    res.json(hostel);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hostel', error });
  }
});

// Update
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const hostel = await Hostel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!hostel) return res.status(404).json({ message: 'Hostel not found' });
    res.json(hostel);
  } catch (error) {
    res.status(500).json({ message: 'Error updating hostel', error });
  }
});

// Delete
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const hostel = await Hostel.findByIdAndDelete(req.params.id);
    if (!hostel) return res.status(404).json({ message: 'Hostel not found' });
    res.json({ message: 'Hostel deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting hostel', error });
  }
});

module.exports = router;