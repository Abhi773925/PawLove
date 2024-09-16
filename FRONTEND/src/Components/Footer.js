import React from 'react';
import './Footer.css'; 
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section logo">
                    <h2>Paw<span>Love</span></h2>
                </div>
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>PawLove has been the best pet adoption service agency in town for over 5 years and counting.</p>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: rockabhisheksingh778189@gmail.com</p>
                    <p>Phone: +91 7739254874</p>
                </div>
                <div className="footer-section social">
                    <a href="#" aria-label="Facebook"><FaFacebook /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="Twitter"><FaTwitter /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 PawLove. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
