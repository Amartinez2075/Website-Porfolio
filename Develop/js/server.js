const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route to handle form submission
app.post("/submit-form", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Set up your email service configuration
    service: "your-email-service",
    auth: {
      user: "your-email",
      pass: "your-email-password",
    },
  });

  // Set up email data
  const mailOptions = {
    from: "sender@example.com",
    to: "Asharamart2075@gmail.com",
    subject: "New Message from Contact Form",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Failed to send message.");
    } else {
      console.log("Message sent:", info.response);
      res.status(200).send("Message sent successfully!");
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});