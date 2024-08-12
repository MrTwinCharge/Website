const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // For loading environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email route
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  // Set up the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVING_EMAIL, // Use environment variables
    subject: `New message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(`Error: ${error.toString()}`);
    }
    res.status(200).send(`Email sent: ${info.response}`);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
