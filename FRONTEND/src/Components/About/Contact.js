import React, { useState } from 'react';
import './Contact.css'; // Importing the updated CSS
import Footer from '../Footer'; // Import your Footer component
import contact from '../../assets/contactus-img.webp';
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    privacyPolicy: false,
  });
  const clientMail = "Ar4164677@gmail.com";
  const [submitted, setSubmitted] = useState(false); // New state to track form submission status

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://pawlove.onrender.com/api/contactRoutes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSubmitted(true); // Show success message
        // Optionally reset form fields
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          privacyPolicy: false,
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error submitting the contact form:', error);
      alert('Failed to submit the form. Please try again.');
    }
  };
  
  return (
    <div className="contact-page">
      <div className="kawruh-contact-container">
        <div className="kawruh-contact-form">
          <h4>Get in Touch</h4>
          <h1>Let's Chat, Reach Out to Us</h1>
          <p>
            Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.
          </p>

          {submitted && (
            <div className="kawruh-success-message">
              🎉 Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="kawruh-form-row">
              <input 
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Leave us a message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="kawruh-privacy-policy">
              <input
              className='checking'
                type="checkbox"
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                required
              />
              <label>
                I agree to our friendly privacy policy
              </label>
            </div>
            <button type="submit">Submit</button>
            <br></br><br></br>
            <a href={`mailto:${clientMail}`}>Mail me Personally</a>
          </form>
        </div>
       
        <div className="kawruh-contact-info">
          <img
            src={contact}
            alt="image"
            className="kawruh-contact-image"
          />
          {/* <div className="kawruh-info-details">
            <div className="kawruh-info-item">
              <span className="kawruh-info-icon">📧</span>
              <span className="kawruh-info-text">rockabhisheksingh@gmail.com</span>
            </div>
            <div className="kawruh-info-item">
              <span className="kawruh-info-icon">📞</span>
              <span className="kawruh-info-text">+91 7739254874</span>
            </div>
          </div> */}
        </div>
      </div>
      {/* Adding space between the contact form and the footer */}
      <div className="footer-spacing"></div>
      <Footer />
    </div>
  );
};

export default Contact;
