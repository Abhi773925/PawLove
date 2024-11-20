import React, { useState } from "react";
import './Filter.css';

const Filter = ({ setPets }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  // Handle button click and update selected filter
  const handleButtonClick = async (filter) => {
    setSelectedFilter(filter); // Update the selected filter
    await handleSubmit(filter); // Call handleSubmit to fetch filtered data
  };

  // Fetch filtered pets based on the selected type
  const handleSubmit = async (typeName) => {
    try {
      const response = await fetch(`https://pawlove.onrender.com/pets/filter?type=${typeName}`);
      const data = await response.json();
      setPets(data); // Update pets with the fetched data
    } catch (error) {
      console.error('Error filtering pets:', error);
    }
  };

  return (
    <div className="ramu">
      <div className="filter-container">
        <button
          className={`filterr-button ${selectedFilter === '' ? 'active' : ''}`}
          onClick={() => handleButtonClick('')}
        >
          All
        </button>
        <button
          className={`filterr-button ${selectedFilter === 'Dog' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Dog')}
        >
          Dog
        </button>
        <button
          className={`filterr-button ${selectedFilter === 'Cat' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Cat')}
        >
          Cat
        </button>
        <button
          className={`filterr-button ${selectedFilter === 'Bird' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Bird')}
        >
          Bird
        </button>
      </div>
    </div>
  );
};

export default Filter;
