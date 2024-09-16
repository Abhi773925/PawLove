import React from "react";
import frame from "../../assets/frame.png";
import SignupForm from "./SignupForm.js";
import LoginForm from "./LoginForm.js";
import { FcGoogle } from "react-icons/fc";
import DogCarousel from './DogCarousel.js'
import './Template.css';
const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="mango">
      <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between bg-soft-fur-cream">
      <div className="w-11/12 max-w-[450px] mx-0 text-paw-print-brown">
        <h1 className="text-paw-print-brown font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span>{desc1}</span>
          <span className="text-warm-nose-pink italic">{desc2}</span>
        </p>

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-shadowy-gray"></div>
          <p className="text-shadowy-gray font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-shadowy-gray"></div>
        </div>

        <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-paw-print-brown border-shadowy-gray border px-[12px] py-[8px] gap-x-2 mt-6 bg-playful-green hover:bg-[#66BB6A]">
          <FcGoogle />
          <h3>Sign in With Google</h3>
        </button>
      </div>

    </div>
    </div>
  );
};

export default Template;