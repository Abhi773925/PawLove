// Components/About.js
import React from 'react';
import './About.css'; 
import Aboutme from './Aboutme';
import Mission from './Mission';
import Vision from './Vision';
import Goal from './Goal';
import Team from './Team';
import Footer from '../Footer';
const About = () => {
  return (

      <div>
      <Aboutme/>
      <Mission/>
      <Vision/>
      <Goal/>
      {/* <Team/> */}
      Reach developer - anshkmr991@gmail.com
      <Footer/>
    </div>
    
  );
};

export default About;
