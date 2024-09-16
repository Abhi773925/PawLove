const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define delivery schema
const deliverySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  pet: {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    type: { type: String, required: true },
    imgUrl: { type: String, required: true },
  },
});

// Create delivery model
const Delivery = mongoose.model('Delivery', deliverySchema);

// Route to handle delivery form submission
router.post('/', async (req, res) => {
  try {
    const { name, address, city, state, zip, phone, email, pet } = req.body;

    // Validate if pet data exists
    if (!pet || !pet.name || !pet.breed || !pet.type) {
      return res.status(400).json({ message: 'Invalid pet information' });
    }

    const deliveryDetails = new Delivery({
      name,
      address,
      city,
      state,
      zip,
      phone,
      email,
      pet,
    });

    await deliveryDetails.save();
    res.status(201).json({ message: 'Delivery details submitted successfully', delivery: deliveryDetails });
  } catch (error) {
    console.error('Error saving delivery details:', error);
    res.status(500).json({ message: 'Failed to submit delivery details', error: error.message });
  }
});

module.exports = router;
