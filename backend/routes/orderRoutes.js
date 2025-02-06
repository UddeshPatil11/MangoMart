const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const Order = require("../Models/orderModels");

// Save Order to Database
router.post("/save", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving order" });
  }
});

// Fetch All Orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error fetching orders" });
  }
});


// Send Order Email API
router.post("/send-email", async (req, res) => {
  const { customer, items, total } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: "New Order Received",
    html: `
      <h2>New Order Details</h2>
      <p><strong>Name:</strong> ${customer.firstName} ${customer.lastName}</p>
      <p><strong>Email:</strong> ${customer.email}</p>
      <p><strong>Phone:</strong> ${customer.phone}</p>
      <p><strong>Address:</strong> ${customer.address}, ${customer.city}, ${customer.state}, ${customer.pincode}</p>
      <h3>Order Items</h3>
      <ul>
        ${items
          .map(
            (item) =>
              `<li>${item.name} - ₹${item.price} x ${item.quantity}</li>`
          )
          .join("")}
      </ul>
      <h3>Total Amount: ₹${total}</h3>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Order email sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
