const mongoose = require("mongoose");

const bulkBookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  quantity: Number,
  variety: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BulkBooking", bulkBookingSchema);
