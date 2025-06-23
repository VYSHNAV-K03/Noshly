const express = require('express');
const router = express.Router();
const multer = require('multer');
const enrollmentModel = require('../models/enrollmentModel');
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const upload = require('../middleware/multer');

router.post('/products', auth, upload.fields([
    { name: 'image', maxCount: 5 },  // Allow multiple images (adjust maxCount as needed)
  ]), 
  async (req, res) => {
    try {
      const {
        name,
        description,
        price,
      } = req.body;
  
      console.log(req.files.image);
      
  
      const image = req.files ? req.files.image.map(file => file.path) : []; // Handling multiple image files
  
      // Check if all required fields are provided
      if (!name || !description || !price ) {
        return res.status(400).json({ message: 'Please fill out all required fields' });
      }
  
      // Create a new product with the supplier ID from the authenticated user
      const newProduct = new Product({
        name,
        description,
        price,
        image,
        supplier: req.user.userId, // Supplier is the authenticated user
      });
  
      // Save the new product to the database
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  

);
router.get('/products', auth, async (req, res) => {
  try {
    const products = await Product.find({ supplier: req.user.userId });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
);
router.delete('/products/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// router.get('/bookings', authMiddleware, async (req, res) => {
//   try {
//     const supplierId = req.user.userId; // Get the supplier ID from the authenticated user

//     // Find bookings where the supplier is linked to the product
//     const bookings = await enrollmentModel.find()
//       .populate({
//         path: 'itemId',
//         match: { supplier: supplierId }, // Match products for the supplier
//         select: 'name price',
//       })
//       .populate({
//         path: 'userId',
//         select: 'name email', // Include name and email of the user
//       })
//       .sort({ createdAt: -1 });

//     // Filter out bookings where the product doesn't match the supplier
//     const filteredBookings = bookings.filter((booking) => booking.itemId);

//     res.status(200).json(filteredBookings);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch bookings', error: error.message });
//   }
// });


// router.put('/products/:id/update-stock', authMiddleware, async (req, res) => {
//   const { id } = req.params;
//   const { stock } = req.body;

//   if (isNaN(stock) || stock < 0) {
//     return res.status(400).json({ message: 'Invalid stock value' });
//   }

//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       id,
//       { stock },
//       { new: true }
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     res.status(200).json({ message: 'Stock updated successfully', product: updatedProduct });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to update stock', error: error.message });
//   }
// });


module.exports = router;
