const mongoose = require('mongoose');

// Define User schema in 'pet_adoption' collection
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accountType: { type: String, default: 'User' }
});

// Use the 'pet_adoption' collection
const User = mongoose.model('User', userSchema);

module.exports = User;
