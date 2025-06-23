const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  location: String,
  logo: String, // Store image URL or file path
  rating: { type: Number, default: 0 },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
