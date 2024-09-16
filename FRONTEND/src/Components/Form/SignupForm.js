import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import './SignupForm.css';

const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("User");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          accountType,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Signup failed. Please try again.");
    }
  }

  return (
    <div className="signup-container">
      <div className="navigation-buttons">
        <button
          onClick={() => setAccountType("User")}
          className={`account-type-btn ${accountType === "User" ? "active" : ""}`}
        >
          User
        </button>
        <button
          onClick={() => setAccountType("Admin")}
          className={`account-type-btn ${accountType === "Admin" ? "active" : ""}`}
        >
          Admin
        </button>
      </div>

      <form onSubmit={submitHandler} className="signup-form">
        <div className="form-fields">
          <div className="flex gap-x-4">
            <label className="w-full">
              <p className="label-text">First Name <sup className="required-asterisk">*</sup></p>
              <input
                type="text"
                required
                placeholder="Enter First Name"
                onChange={changeHandler}
                value={formData.firstName}
                name="firstName"
                className="input-field"
              />
            </label>

            <label className="w-full">
              <p className="label-text">Last Name <sup className="required-asterisk">*</sup></p>
              <input
                type="text"
                required
                placeholder="Enter Last Name"
                onChange={changeHandler}
                value={formData.lastName}
                name="lastName"
                className="input-field"
              />
            </label>
          </div>

          <label className="w-full">
            <p className="label-text">Email Address <sup className="required-asterisk">*</sup></p>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={formData.email}
              onChange={changeHandler}
              className="input-field"
              name="email"
            />
          </label>

          <div className="flex gap-x-4">
            <label className="w-full relative">
              <p className="label-text">Create Password <sup className="required-asterisk">*</sup></p>
              <input
                type={showCreatePass ? "text" : "password"}
                required
                placeholder="Enter Password"
                onChange={changeHandler}
                value={formData.password}
                name="password"
                className="input-field"
              />
              <span
                onClick={() => setShowCreatePass(!showCreatePass)}
                className="eye-icon"
              >
                {showCreatePass ? (
                  <AiOutlineEyeInvisible fontSize={24} />
                ) : (
                  <AiOutlineEye fontSize={24} />
                )}
              </span>
            </label>

            <label className="w-full relative">
              <p className="label-text">Confirm Password <sup className="required-asterisk">*</sup></p>
              <input
                type={showConfirmPass ? "text" : "password"}
                required
                placeholder="Confirm Password"
                onChange={changeHandler}
                value={formData.confirmPassword}
                name="confirmPassword"
                className="input-field"
              />
              <span
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="eye-icon"
              >
                {showConfirmPass ? (
                  <AiOutlineEyeInvisible fontSize={24} />
                ) : (
                  <AiOutlineEye fontSize={24} />
                )}
              </span>
            </label>
          </div>
        </div>

        <button className="button-primary" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
