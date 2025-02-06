const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const connectDB = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());
app.use(cors());

const bulkBookingRoutes = require("./routes/bulkBookingRoutes");
app.use("/api/bulk-booking", bulkBookingRoutes);

// Connect to MongoDB
connectDB();

// Default route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Contact form schema and model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});
const Contact = mongoose.model("Contact", ContactSchema);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Sender email from .env
    pass: process.env.EMAIL_PASS, // App password from .env
  },
});

// 📩 Contact Form - Save to DB & Send Email
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // Receiver email from .env
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Form submitted and email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting form or sending email", error });
  }
});

// 📦 Order Schema & Model
// Order Schema & Model
const OrderSchema = new mongoose.Schema({
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
      id: Number,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  total: Number,
  createdAt: { type: Date, default: Date.now },
});

// ✅ Prevent OverwriteModelError
const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);


// 📩 Order Placement - Save to DB & Send Confirmation Email
app.post("/api/orders/save", async (req, res) => {
  try {
    const { customer, items, total } = req.body;

    // Save to MongoDB
    const newOrder = new Order({ customer, items, total });
    await newOrder.save();

    // Send Order Confirmation Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: customer.email, // Send email to customer
      subject: "🛒 Your Order Confirmation - MangoMart",
      html: `
        <h2>Thank You for Your Order!</h2>
        <p>Hi <strong>${customer.firstName}</strong>,</p>
        <p>We've received your order and will process it soon.</p>
        <h3>📝 Order Details:</h3>
        <ul>
          ${items.map(
            (item) => `<li>${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}</li>`
          ).join("")}
        </ul>
        <p><strong>Total: ₹${total}</strong></p>
        <p>🚚 Your order will be delivered to:</p>
        <p>${customer.address}, ${customer.city}, ${customer.state}, ${customer.pincode}</p>
        <p>📞 Contact: ${customer.phone}</p>
        <br/>
        <p>Thank you for shopping with us! 🥭</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "✅ Order placed successfully! Confirmation email sent." });
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).json({ message: "❌ Order placement failed", error });
  }
});

// Use order routes
app.use("/api/orders", orderRoutes);

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
