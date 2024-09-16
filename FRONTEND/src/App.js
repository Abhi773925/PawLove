import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Delivery from './Components/Delivery/Delivery';
import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About/About";
import Contact from './Components/About/Contact';
import Login from "./Components/Form/Login";
import Signup from "./Components/Form/Signup";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Components/Profile";
import Listing from "./Components/Listing/Listing";
import OneCard from "./Components/Card/OneCard";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') !== null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="mainbody">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard /></PrivateRoute>} />
        <Route path="/adopt/:id" element={<Delivery />} />
        <Route path="/delivery/:id" element={<Delivery />} />

        <Route path="/card" element={<Card />} />
        <Route path="/new-listing" element={<Listing/>} />
        <Route path="/cards" element={<OneCard />} />

      </Routes>
    </div>
  );
}

export default App;
