const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
  },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  total: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
