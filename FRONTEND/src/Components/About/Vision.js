import React from 'react';
import './Vision.css';
import vision from '../../assets/vision.png';

const Vision = () => {
  return (
    <div className='vision-container'>
      <div className='left'>
        <img src={vision} alt='Vision' />
      </div>
      <div className='right'>
        <h1 className="text-gray-900 font-[900] text-[4rem]">Our Vision</h1>
        <p>We aim to create a world where every pet finds a loving home. Our platform connects pet lovers with animals in need, fostering a community of care and compassion.</p>
      </div>
    </div>
  );
};

export default Vision;
