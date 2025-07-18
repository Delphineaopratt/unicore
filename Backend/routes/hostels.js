const express = require('express');
const router = express.Router();
const Hostel = require('../Models/Hostel');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const authMiddleware = require('../middleware/auth');

require('dotenv').config();

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

// Configure multer to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.use(authMiddleware);

// Create a new hostel with image upload
router.post('/', upload.single('image'), async (req, res) => {
  const { name, location, address, pricePerMonth, capacity, availableRooms, description, amenities } = req.body;
  try {
    let imageUrl = '';
    if (req.file) {
      const uploadResponse = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }).end(req.file.buffer);
      });
      imageUrl = uploadResponse.secure_url;
    }

    const hostel = new Hostel({
      name,
      location,
      address,
      pricePerMonth,
      capacity,
      availableRooms,
      description,
      amenities,
      postedBy: req.user.id,
      imageUrl,
    });
    await hostel.save();
    res.status(201).json(hostel);
  } catch (error) {
    res.status(500).json({ message: 'Error creating hostel', error });
  }
});

// Read all hostels
router.get('/', async (req, res) => {
  try {
    const hostels = await Hostel.find().populate('postedBy', 'email');
    res.json(hostels);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hostels', error });
  }
});



module.exports = router;