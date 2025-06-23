// backend/server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const restaurantRoutes = require("./routes/restaurantroutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

console.log("hi");

app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin')); // Admin routes
app.use('/api/courses', require('./routes/courses'));
app.use('/api/sections', require('./routes/sections')); // Add this line
// app.use('/api/mentor', require('./routes/mentor'));
app.use('/api/payments', require('./routes/paymentRoutes'));

app.use('/api/suppliers', require('./routes/productRoutes')); // Product management routes for suppliers

app.use('/api/customers', require('./routes/customerRoutes'));

app.use('/api/payments', require('./routes/paymentRoutesProduct'));

app.use("/api/orders", require('./routes/orderRoutes'));

app.use('/api/cart', require('./routes/cart'));

app.use("/api/posts", require('./routes/postRoutes'));
app.use("/api/restaurants", restaurantRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
