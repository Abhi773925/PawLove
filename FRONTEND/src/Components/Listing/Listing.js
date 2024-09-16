import React, { useState } from 'react';
import './Listing.css'; // Import the CSS file for styling

const Listing = () => {
  const [petData, setPetData] = useState({
    id: '',
    title: '',
    name: '',
    breed: '',
    type: '',
    location: '',
    specifications: '',
    briefDetail: '',
    detailedDetails: '',
    imgUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...petData,
          specifications: petData.specifications.split(','), // Convert specifications to an array
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Pet added successfully:', data);

      // Reset form after successful submission
      setPetData({
        id: '',
        title: '',
        name: '',
        breed: '',
        type: '',
        location: '',
        specifications: '',
        briefDetail: '',
        detailedDetails: '',
        imgUrl: ''
      });
    } catch (error) {
      console.error('Failed to add pet:', error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Pet</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <input type="text" name="id" placeholder="Pet ID" value={petData.id} onChange={handleChange} required />
        <input type="text" name="title" placeholder="Title" value={petData.title} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" value={petData.name} onChange={handleChange} required />
        <input type="text" name="breed" placeholder="Breed" value={petData.breed} onChange={handleChange} required />
        <input type="text" name="type" placeholder="Type (e.g. Dog)" value={petData.type} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={petData.location} onChange={handleChange} required />
        <input type="text" name="specifications" placeholder="Specifications (comma separated)" value={petData.specifications} onChange={handleChange} required />
        <input type="text" name="briefDetail" placeholder="Brief Detail" value={petData.briefDetail} onChange={handleChange} required />
        <textarea name="detailedDetails" placeholder="Detailed Details" value={petData.detailedDetails} onChange={handleChange} required />
        <input type="text" name="imgUrl" placeholder="Image URL" value={petData.imgUrl} onChange={handleChange} required />
        <button type="submit" className="form-submit">Submit</button>
      </form>
    </div>
  );
};

export default Listing;
