import React from "react";
import { FaFacebook, FaInstagram, FaMapMarkerAlt  } from "react-icons/fa";

const Footer = () => {
return (
<div className="footer-container">
    <div className="footer-left">
        <h2>Shree Ram Tour Travel</h2>
        <p className="footer-para">Our Agents offer you super cab services. Our cab service provides the best tourism service and convenience as per the feedback of our customers. Our car rental Indore is one of the best choices to travel. Not only will you be assured of fair and transparent fare, but can also enjoy the journey safely with an experienced driver to assist you.</p>
          <button className="footer-button">
          ↗ Learn More
        </button>
    </div>
    <div className="footer-features">
        <h2>Quick Links</h2>
         <ul className="footer-links">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/review">Review</a></li>
    <li><a href="/contact">Contact Us</a></li>
  </ul>
    </div>
    <div className="footer-right">
        <h2>Contact Us</h2>
        <h4 className="footer-para">Phone :</h4>
        <h5>+91 9301277735</h5>
        <h4 className="footer-para">Email :</h4>
        <h5 className="footer-email">
          <a href="mailto:Support@shreeramtourtravel.com">Support@shreeramtourtravel.com</a><br />
          <a href="mailto:tanish.g930@gmail.com">infotanish.g930@gmail.com</a>
            <div className="footer-socials">
    <a href="https://facebook.com/YourPageName" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={24} />
    </a>
    <a href="https://www.instagram.com/ram.travels1847?igsh=MWVsczBsdDBzc2V3NQ==" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={24} />
    </a>
  </div>
     </h5>
        <h4 className="footer-para">Address</h4>
        <a
  href="https://www.google.com/maps/place/Dwarkapuri,+Indore,+Madhya+Pradesh/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaMapMarkerAlt size={24} color="white" />
</a>
        <h5>932 Dwarkapuri Fothi Kothi Road City Indore</h5>
    </div>
</div>

);
}
export default Footer;