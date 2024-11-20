import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Delivery.css';
import qrCodeImage from '../../assets/clientqr.jpg'; // Path to your QR code image

const Delivery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: ''
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (location.state && location.state.pet) {
      setPet(location.state.pet);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!pet) {
      alert('Pet details are missing');
      return;
    }

    const deliveryData = {
      name: formData.name,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      phone: formData.phone,
      email: formData.email,
      pet: {
        name: pet.name,
        breed: pet.breed,
        type: pet.type,
        imgUrl: pet.imgUrl,
      },
    };
  
    try {
      const response = await fetch('https://pawlove.onrender.com/api/delivery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(deliveryData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setShowModal(true); // Show the modal on successful form submission
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Failed to submit delivery details.');
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/'); // Navigate to another page after closing the modal
  };

  return (
    <div className="delivery-form-container">
      {pet && (
        <div className="pet-info-container">
          <div className="pet-info">
            <h3>I'm {pet.name}</h3>
            <img src={pet.imgUrl} alt={pet.name} className="pet-image" />
            <p><strong>Name:</strong> {pet.name}</p>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Type:</strong> {pet.type}</p>
            <button onClick={handleGoBack} className="go-back-button">Go Back</button>
          </div>
          
          {/* Donation Section */}
          <div className="donation-section">
            <h2>Be a hero for pets with Pawlove</h2>
            <p>Your donation creates brighter futures today! Scan the QR code below to help our organization and make a difference in the lives of pets in need.</p>
            <img src={qrCodeImage} alt="QR Code for Donation" className="qr-code" />
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="delivery-form">
        <h2>Your Address</h2>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name Here..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Saran, Bihar"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Chapra"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Bihar"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">ZIP Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="XX XX XX"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(+91) 91928238833"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@gmail.com"
            required
          />
        </div>
        <button type="submit" className="submit-button">Adopt Now</button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Thank You!</h2>
            <p className='pky'>We have received your message and our team contact you back within the next 24 hours. Thank you!</p>
            <button onClick={handleCloseModal} className="close-modal-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delivery;
