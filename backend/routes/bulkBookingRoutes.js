const express = require("express");
const router = express.Router();
const BulkBooking = require("../Models/bulkBookingModel");

// Save Bulk Booking to Database
router.post("/save", async (req, res) => {
  try {
    const newBooking = new BulkBooking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Bulk booking saved successfully!" });
  } catch (error) {
    console.error("Error saving bulk booking:", error);
    res.status(500).json({ error: "Error saving bulk booking" });
  }
});

// Fetch All Bulk Bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await BulkBooking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bulk bookings:", error);
    res.status(500).json({ error: "Error fetching bulk bookings" });
  }
});

module.exports = router;
