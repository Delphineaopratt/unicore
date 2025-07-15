// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/api/hostels', require('./routes/hostels'));
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/bookings', require('./routes/bookings'));
// app.use('/api/applications', require('./routes/applications'));
// app.use('/api/payments', require('./routes/payments'));


// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// app.get('/test', (req, res) => res.json({ message: 'Backend is running' }));
// app.listen(3000, () => console.log('Server running on port 3000'));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/test', (req, res) => res.json({ message: 'Backend is running' }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/hostels', require('./routes/hostels'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/payments', require('./routes/payments'));

app.listen(3000, () => console.log('Server running on port 3000'));