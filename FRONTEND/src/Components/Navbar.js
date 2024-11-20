import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  FiHome,
  FiInfo,
  FiPhone,
  FiLogOut,
  FiSearch,
  FiPlus,
  FiUser,
} from "react-icons/fi";
import "./Navbar.css";
import logo from "../assets/pawnewlogo.png";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [userName, setUserName] = useState("Welcome Guest");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("admin");
  const [userImage, setUserImage] = useState(
    "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
  );

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Include token if required
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUserName(data.name || "Guest");
      setUserEmail(data.email || "");
      setUserRole(data.role || ""); // Set the user role
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserData();
    }
  }, [isLoggedIn]);

  return (
    <div className="lpp">
      {/* Standard Navigation for Larger Screens */}
      <div className="top-navigation">
        <div className="nav-container">
          {/* Logo aligned to the left */}
          <div className="nav-left">
            <NavLink to="/">
              <img className="ak" src={logo} loading="lazy" alt="Logo" />
            </NavLink>
          </div>

          {/* Links and Search Bar aligned to the center */}
          <div className="nav-middle">
            <nav>
              <ul className="nav-links">
                <li className="text">
                  <NavLink to="/" activeClassName="active-link">
                    Home
                  </NavLink>
                </li>
                <li className="text">
                  <NavLink to="/about" activeClassName="active-link">
                    About
                  </NavLink>
                </li>
                <li className="text">
                  <NavLink to="/contact" activeClassName="active-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Search Bar */}
          </div>

          {/* Login, Sign Up, and Dark Mode Toggle aligned to the right */}
          <div className="nav-right">
            {isLoggedIn ? (
              <>
                <div className="profile-menu">
                  <button
                    onClick={handleProfileClick}
                    className="profile-icon-btn"
                  >
                    {/* Display Random Profile Image */}
                    {/* <img
                      src={userImage}
                      alt="User Profile"
                      className="profile-image"
                    /> */}
                    <div className="profile-image">
                    {user?.firstName?.charAt(0).toUpperCase()}
                    </div>
                  </button>
                  <div
                    className={`profile-menu-dropdown bg-black ${
                      isProfileMenuOpen ? "show" : ""
                    }`}
                  >
                    <div className="profile-menu-item">
                      <p className="profile-name">Hi! {user?.firstName}</p>
                      {/* <p className="profile-email">{user?.lastName}</p> */}
                    </div>
                    {/* Conditionally render New Listing button */}
                    {user?.accountType === "Admin" && (
                      <NavLink to="/new-listing" activeClassName="active-link">
                        <button className="profile-menu-item">
                          Add New Pet
                        </button>
                      </NavLink>
                    )}
                   
                    <button
                      className="profile-menu-item"
                      onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged out successfully");
                        localStorage.removeItem("user");
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <NavLink to="/login" activeClassName="active-link">
                  <button className="nav-login">Log In</button>
                </NavLink>
                {/* <NavLink to="/signup" activeClassName="active-link">
                  <button className="text-[1.2rem] font-[900]">Sign Up</button>
                </NavLink> */}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation for Small Screens */}
      <div className="bottom-navigation">
        <nav className="bottom-nav">
          <ul className="nav-icons">
            <li>
              <NavLink to="/" activeClassName="active-link">
                <FiHome size={24} />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active-link">
                <FiInfo size={24} />
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link">
                <FiPhone size={24} />
                <span>Contact</span>
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
                {/* <li>
                  <NavLink to="/dashboard" activeClassName="active-link">
                    <FiUser size={24} />
                    <span>Dashboard</span>
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/">
                    <FiLogOut
                      size={24}
                      onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged out successfully");
                        localStorage.clear();
                        localStorage.removeItem('user');
                      }}
                    />
                    <span>Logout</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    activeClassName="active-link"
                    className="nav-login"
                  >
                    <FiUser size={24} />
                    <span>Login</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    activeClassName="active-link"
                    className="nav-signup"
                  >
                    <FiUser size={24} />
                    <span>Sign Up</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
