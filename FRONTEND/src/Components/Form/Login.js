import React from 'react';
import loginImg from "../../assets/login.png"; // Assuming the image fits the theme
import Template from './Template';
import './Login.css';
function Login({ setIsLoggedIn }) {
  return (
    <div className='cc'>
      <div className='apple'>
      <Template 
      title="Welcome Back to PawLove"
      desc1="Find your perfect companion today."
      desc2="Connect with local shelters and adopt a pet in need."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
    </div>
    </div>
  );
}

export default Login;
