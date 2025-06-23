const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'restaurant', 'user'],
    default: 'user',
  },
  logo: {
    type: String, // Stores the filename or URL of the uploaded logo
    default: '',
  },
  bio: {
    type: String,
    default: '',
  },
  location: {
    latitude: Number,
    longitude: Number,
    address: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
