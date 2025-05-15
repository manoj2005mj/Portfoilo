const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "manojmageesha@gmail.com", // Your email
    pass: "zypnyskwqkaznecd", // Your app password
  },
});

// POST route to handle contact form submissions
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate the data
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    // Send email using Nodemailer
    const info = await transporter.sendMail({
      from: "manojmageesha@gmail.com", // Sender's email (user's email)
      to: "manojmageesha@gmail.com", // Your email
      subject: `New Contact Form Submission from ${name}`, // Subject line
      text: message, // Plain text body
    });

    console.log("Message sent: %s", info.messageId);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

module.exports = router;