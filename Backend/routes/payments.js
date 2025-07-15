const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth'); // Import the middleware

router.use(authMiddleware);

router.post('/status', async (req, res) => {
  const { bookingId, status } = req.body; // e.g., 'pending', 'completed', 'failed'
  try {
    // Simulate biometric payment status update (replace with actual integration)
    res.json({ bookingId, status, message: 'Payment status updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating payment status', error });
  }
});

module.exports = router;