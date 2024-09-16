// Filter.js
import React from "react";
import './Filter.css';

const Filter = ({ setPets }) => {
  const handleSubmit = async (typeName) => {
    try {
      const response = await fetch(`https://pawlove.onrender.com/pets/filter?type=${typeName}`);
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.error('Error filtering pets:', error);
    }
  };

  return (
    <div className="ramu">
     <div className="filter-container">
     <button className="filterr-button" onClick={() => handleSubmit('')}>All</button>
      {/* Replace this with actual types */}
      <button className="filterr-button" onClick={() => handleSubmit('Dog')}>Dog</button>
      <button className="filterr-button" onClick={() => handleSubmit('Cat')}>Cat</button>
      <button className="filterr-button" onClick={() => handleSubmit('Bird')}>Bird</button>
     </div>
    </div>
  );
};

export default Filter;
