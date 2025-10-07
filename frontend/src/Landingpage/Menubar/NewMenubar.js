import React, { useState } from "react";
import "./NewMenubar.css";  
import logo from "../../Asset/Logo Tagline-02 (1).png";

function NewMenubar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="KG Genius Labs Logo" className="logo-img" />
      </div>

      {/* Hamburger menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "change" : ""}`}></div>
        <div className={`bar ${isOpen ? "change" : ""}`}></div>
        <div className={`bar ${isOpen ? "change" : ""}`}></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default NewMenubar;
