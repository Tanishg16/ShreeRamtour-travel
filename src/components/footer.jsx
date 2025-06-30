import React from "react";
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
        <h5>Support@shreeramtourtravel.com <br/>infotanish.g930@gmail.com </h5>
        <h4 className="footer-para">Address</h4>
        <h5>932 Dwarkapuri Fothi Kothi Road City Indore</h5>
    </div>
</div>

);
}
export default Footer;