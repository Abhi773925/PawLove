import React from 'react';
import signupImg from "../../assets/signup.png"; // Ensure this image is relevant to pet adoption
import Template from './Template';
import './signup.css'
function Signup({ setIsLoggedIn }) {
  return (
    <div className='aaa'>
      <div className='aky'>
      <Template
      title="Find Your New Best Friend with PawLove!"
      // desc1="Connect with local shelters and find the perfect pet for your home."
      // desc2="Your journey to a loving companion starts here."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
    </div>
    </div>
  );
}

export default Signup;
