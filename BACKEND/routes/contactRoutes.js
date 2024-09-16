const express = require('express');
const router = express.Router();
const Contact = require('../models/contact'); 

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, message, privacyPolicy } = req.body;

    if (!firstName || !lastName || !email || !message || !privacyPolicy) {
      return res.status(400).json({ message: 'All fields are required, and you must agree to the privacy policy.' });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      message,
      privacyPolicy,
    });

    await newContact.save();

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Failed to submit contact form', error: error.message });
  }
});

module.exports = router;
