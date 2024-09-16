import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

const Profile = ({ user, setIsLoggedIn, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the logout endpoint on the backend
      await fetch('http://localhost:5000/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // Clear token from local storage
      localStorage.removeItem('token');
      
      // Update state
      setIsLoggedIn(false);
      setUser(null);

      // Redirect to login page
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) {
    return <p>Loading...</p>; // Show loading if user is not defined
  }

  return (
    <div className="profile-dropdown">
      <FiUser size={24} />
      <div className="profile-menu">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <NavLink to="/dashboard" className="active-link">
          Dashboard
        </NavLink>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
