import React, { useState } from "react";
import "../styles/Navbar.css"
import StoneSlider from "../components/StoneSlider "
import Section from "./Section";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img
          src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
          alt="Logo"
        />
      </div>

      {/* Links (hidden on small screens) */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#">Shop by Category</a>
        <a href="#">Partner with Us</a>
      </div>

      {/* Search Bar */}
      <div className={`navbar-search ${menuOpen ? "open" : ""}`}>
        <div className="search-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input type="text" placeholder="Search for products..." />
        </div>
      </div>

      {/* Icons */}
      <div className="navbar-icons">
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      
    </nav>
    <StoneSlider />
    <Section />
    </>
  );
};

export default Navbar;
