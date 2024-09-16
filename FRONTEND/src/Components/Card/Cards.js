// Cards.js
import React, { useState } from 'react';
import Card from './Card';
import Modal from '../Modal/Modal';
import Adopt from "../Modal/Adopt";
import './Cards.css';

const Cards = ({ pets }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdoptModalOpen, setIsAdoptModalOpen] = useState(false);
  const [adoptPet, setAdoptPet] = useState(null);

  const handleViewProfile = (pet) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  const handleAdopt = (pet) => {
    setAdoptPet(pet);
    setIsAdoptModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setAdoptPet(null);
    setIsAdoptModalOpen(false);
  };

  return (
    <div className="cards-container">
      {!pets || pets.length === 0 ? (
        <div className="no-data">
          <p>No Data Found</p>
        </div>
      ) : (
        pets.map((pet) => (
          <Card
            key={pet.id}
            pet={pet}
            onViewProfile={() => handleViewProfile(pet)}
            onAdopt={() => handleAdopt(pet)}
          />
        ))
      )}
      {isModalOpen && <Modal pet={selectedPet} onClose={closeModal} />}
      {isAdoptModalOpen && <Adopt pet={adoptPet} onClose={closeModal} />}
    </div>
  );
};

export default Cards;
