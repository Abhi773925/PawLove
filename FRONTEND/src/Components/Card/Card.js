// Card.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ pet, onViewProfile, onAdopt }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') !== null);

  const handleAdoptClick = () => {
    if(!isLoggedIn){
      navigate(`/login`);
      return;
    } 
    navigate(`/adopt/${pet.id}`, { state: { pet } });
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={pet.imgUrl} alt={pet.name} />
      </div>
      <div className="card-content">
        <p className='abc'>{pet.title}</p>
        <p className='brief-detail'>{pet.briefDetail}</p>
        <div className="card-buttons">
          <button onClick={onViewProfile}>View Profile</button>
          <button className="adoption" onClick={handleAdoptClick}>Adopt Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
