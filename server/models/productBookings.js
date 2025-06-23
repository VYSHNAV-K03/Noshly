const mongoose = require('mongoose');

const productBookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  paymentId: { type: String },
  amountPaid: { type: Number },
  currency: { type: String, default: 'INR' },
  status: { type: String, enum: ['Paid', 'Failed', 'Responded'], default: 'Paid' },
  deliveryTime: { type: String }, // Field to store delivery time
  responseText: { type: String }, // Field to store response message
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', productBookingSchema);
