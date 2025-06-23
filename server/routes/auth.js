// backend/routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const auth = require('../middleware/auth');
const upload = require('../middleware/multer');
require('dotenv').config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Registration route
router.post('/register', upload.single('logo'), async (req, res) => {
  const { name, email, password, role, bio,latitude,longitude,address } = req.body;
  const logo = req.file ? req.file.path : null;

  

  console.log(role);
  
  

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password and logo path
    user = new User({ name, email,isVerified: role == 'user' ? true : false, password: hashedPassword, role, bio, logo,location:{latitude,longitude,address} });
    console.log(user);
    
    await user.save();

    console.log(req.body);
    
    console.log(user);
    

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token,user, msg: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});
// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt with email:", email);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    console.log("User found:", user);

    // Check if user has been verified
    if (user.isVerified ) {
      const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          console.log("Password does not match");
          return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, role: user.role,isVerified: user.isVerified,user });
    }else{
      console.log("User not verified");
      return res.status(400).json({ msg: 'User not verified' });
    }
    // Compare hashed password
    
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ msg: 'Server error' });
  }
});


router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password'); // Exclude the password field
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
