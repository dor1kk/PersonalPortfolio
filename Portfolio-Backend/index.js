const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'trickynamed@gmail.com',
    pass: 'Do12rik18'
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, phone, budget, message } = req.body;

  const mailOptions = {
    from: 'trickynamed@gmail.com', // Use the same email address as 'user'
    to: 'dorajetkukaj@gmail.com',
    subject: 'New Message from Contact Form',
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Budget: ${budget}</p>
      <p>Message: ${message}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
