import React, { useState } from 'react';
import './Goal.css';

const cards = [
  {
    title: "Promote Adoption",
    description: "We strive to connect loving homes with pets in need, ensuring every animal finds a caring family.",
  },
  {
    title: "Raise Awareness",
    description: "Our platform educates the public on responsible pet ownership and the benefits of adopting over buying.",
  },
  {
    title: "Support Shelters",
    description: "We collaborate with local shelters to provide them with resources and exposure to help them care for and rehome pets.",
  },
  {
    title: "Encourage Volunteering",
    description: "We encourage community involvement by promoting volunteer opportunities and fostering a network of pet lovers.",
  },
  {
    title: "Facilitate Resources",
    description: "We offer resources and guidance to pet adopters, including tips on pet care and integration into their new homes.",
  },
  {
    title: "Build a Community",
    description: "We aim to build a strong, supportive community of pet enthusiasts who share their experiences and support each other.",
  }
];

const Goal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const visibleCards = [
    cards[(currentIndex + 0) % cards.length],
    cards[(currentIndex + 1) % cards.length],
    cards[(currentIndex + 2) % cards.length],
    cards[(currentIndex + 3) % cards.length]
  ];

  return (
    <div className="goal-container">
      <h1 className="text-gray-900 font-[900] text-[4rem]">Why We Are Here</h1>
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>‹</button>
        <div className="carousel-slide">
          {visibleCards.map((card, index) => (
            <div className="card" key={index}>
              <h2 className='headd'>{card.title}</h2>
              <p className='desc'>{card.description}</p>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={nextSlide}>›</button>
      </div>
    </div>
  );
}

export default Goal;
