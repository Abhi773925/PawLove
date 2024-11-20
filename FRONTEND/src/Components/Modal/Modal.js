import React, { useEffect, useState } from 'react';
import './Modal.css'; 
import { useNavigate } from 'react-router-dom';

const Modal = ({ pet, onClose }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') !== null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!pet) return null;

  const handleAdoptClick = () => {
    if(!isLoggedIn){
      navigate(`/login`);
      return;
    } 
    console.log('Navigating to /delivery/', pet.id); // Debugging line
    navigate(`/delivery/${pet.id}`, { state: { pet } });
  };

  return (
    <div className="modal-overlay" aria-labelledby="modal-title" aria-hidden="true">
      <div className="modall-content">
        <button className="close-button" onClick={onClose} aria-label="Close modal">&times;</button>
        <h2 id="modal-title">Meet {pet.name}</h2>
        <img src={pet.imgUrl} alt={pet.name} className="modal-image" />
        <button className="adoption" onClick={ handleAdoptClick}>Adopt Now</button>
        <p className='aa'><strong>Breed:</strong> {pet.breed}</p>
        <p className='aa'><strong>Type:</strong> {pet.type}</p>
        <p className='aa'><strong>Location:</strong> {pet.location}</p>
        <p className='aa'><strong>Specifications:</strong> {pet.specifications.join(', ')}</p>
        <p className='aa'><strong>Brief Detail:</strong> {pet.briefDetail}</p>
        <p className='aa'><strong>Detailed Details:</strong> {pet.detailedDetails}</p>
      </div>
    </div>
  );
};

export default Modal;
