import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import doggy from '../assets/hero-section.png';
import OneCard from "./Card/OneCard";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const handleAdoptNowClick = () => {
    // Navigate to the '/cards' route
    navigate('/cards');
    // Optionally, you can scroll to OneCard if needed
    // This is just for demonstration; it may not be required if navigating to a separate page
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="dog">
      <div className="home-container">
        {/* Left side: Animated Thoughts */}
        <div className="pl-5 py-4 rounded-[30px] mr-5">
          <div className="thoughts-container">
            <h2 className="text-[#2c3e50] font-[900] text-[4rem]">For the Love of Pets</h2>
            <p className="thoughts-animated">
              "A pet is not just a friend; it's family."
            </p>
            <button className="adopt-button" onClick={handleAdoptNowClick}>Adopt Now</button>
          </div>
        </div>

        {/* Right side: Image Carousel */}
        <div className="carousel-container">
          <img className="iii" src={doggy} alt="Hero section image"/>
        </div>
      </div>

      {/* Ensure OneCard is included and use ref */}
      <div ref={cardRef}>
        <OneCard />
      </div>
    </div>
  );
};

export default Home;
