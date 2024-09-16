import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Adopt.css';

const Adopt = ({ pet, onClose }) => {
  const navigate = useNavigate();
  const [loggedIn,setIsLoggedIn] = useState(JSON.parse('user') !== 'null')


  const handleAdoptClick = () => {
    if(!loggedIn) return;
    navigate(`/adopt/${pet.id}`, { state: { pet } });

  };

  if (!pet) return null;

  return (
    <div className="modal-overlay" aria-labelledby="modal-title" aria-hidden="true">
      <div className="modal-content">
        <button className="close-button" onClick={onClose} aria-label="Close modal">&times;</button>
        <h2 id="modal-title">{pet.name}</h2>
        <img src={pet.imgUrl} alt={pet.name} className="modal-image" />
        {/* <button className="adoption" onClick={handleAdoptClick}>Adopt Now</button> */}
        <p><strong>Breed:</strong> {pet.breed}</p>
        <p><strong>Type:</strong> {pet.type}</p>
        <p><strong>Location:</strong> {pet.location}</p>
        <p><strong>Specifications:</strong> {pet.specifications.join(', ')}</p>
        <p><strong>Brief Detail:</strong> {pet.briefDetail}</p>
        <p><strong>Detailed Details:</strong> {pet.detailedDetails}</p>
      </div>
    </div>
  );
};

export default Adopt;
