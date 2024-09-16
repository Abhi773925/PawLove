const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  privacyPolicy: { type: Boolean, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
