import React, { useEffect, useState } from "react";
// import BuildIcon from "@mui/icons-material/Build";
import logo from "../images/logoimage1.jpg"; // Placeholder for the new logo

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Navbar Brand */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="SHREE RAM TOUR & TRAVEL Logo" className="navbar-logo" />
          SHREE RAM TOUR & TRAVEL
        </a>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navbar Items */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#" className="nav-link">About</a></li>
          <li><a href="#" className="nav-link">Services</a></li>
          <li><a href="#" className="nav-link">Our Fleet</a></li>
          <li><a href="#" className="nav-link">Review</a></li> 
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
