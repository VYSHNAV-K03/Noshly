const express = require("express");
const multer = require("multer");
const path = require("path");
const Restaurant = require("../models/restaurant");
const User = require("../models/User");

const router = express.Router();

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// Register a new restaurant
router.post("/register", upload.single("logo"), async (req, res) => {
  try {
    const { name, email, password, phone, location } = req.body;
    const logo = req.file ? req.file.filename : null;

    const restaurant = new Restaurant({ name, email, password, phone, location, logo });
    await restaurant.save();

    res.status(201).json({ message: "Restaurant registered successfully", restaurant });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get restaurants by location or all restaurants
router.post("/", async (req, res) => {
  try {
    const { location } = req.body;
    console.log(location);
    
    let query = location ? { location: new RegExp(location, "i") } : {};
    // console.log(query);
    const restaurants = await User.find({role:"restaurant",'location.address': { $regex: location, $options: "i" } });
    console.log(restaurants);
    
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update restaurant rating
router.put("/:id/rate", async (req, res) => {
  try {
    const { rating } = req.body;
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: "Not found" });

    restaurant.rating = rating;
    await restaurant.save();
    res.json({ message: "Rating updated", restaurant });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
