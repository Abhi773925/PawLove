import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://pawlove.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      // console.log(result.user)

      if (response.ok) {
        setIsLoggedIn(true);
        toast.success("Login Successful");
        localStorage.setItem("user", JSON.stringify(result.user));

        navigate("/dashboard");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed. Please try again.");
    }
  }

  return (
    <div className="cls">
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <label className="w-full">
          <p className="text-[0.875rem] text-richcream-5 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
          </p>

          <input
            type="email"
            required
            value={formData.email}
            placeholder="Enter your email address"
            onChange={changeHandler}
            name="email"
            className=" rounded-[0.75rem] w-full p-[12px] border border-black"
          />
        </label>

        <label className="w-full relative">
          <p className="text-[0.875rem] text-richcream-5 mb-1 leading-[1.375rem]">
            Password
            <sup className="text-pink-200">*</sup>
          </p>

          <input
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            placeholder="Enter Password"
            onChange={changeHandler}
            name="password"
            className=" rounded-[0.75rem] w-full p-[12px] border border-black "
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[50px] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              
            )}
          </span>

          <Link
            to="/signup"
            className="text-[1rem] text-blue-400 transition-colors duration-300 hover:border-white"
          >
            Don't have an account? Sign Up
          </Link>
        </label>

        <button className="signn">Sign in</button>
      </form>
    </div>
  );
};

export default LoginForm;
