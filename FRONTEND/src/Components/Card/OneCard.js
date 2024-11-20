// OneCard.js
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Filter from './Filter';
import Cards from './Cards';
import Footer from "../Footer";
import './OneCard.css';

const OneCard = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch pets from the backend
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://pawlove.onrender.com/pets');
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="home-footer">
      <div>
        <Filter setPets={setPets} />
        <Cards pets={pets} />
      </div>
      <Footer />
    </div>
  );
};

export default OneCard;
