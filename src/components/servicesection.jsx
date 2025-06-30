import React from "react";
import { FaPlaneDeparture, FaSuitcase, FaRoad, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <div className="service-container">
      <h2 className="service-heading">Pick Your Best Cab for Your Destination Anytime</h2>
      <p className="service-subheading">
        Enjoy a Smooth and Relaxing Ride with the hodophile's Finest Taxi Service in Indore
      </p>

      <a
        href="https://wa.me/919301277735" // Replace with actual WhatsApp number  
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp style={{ marginRight: '5px'}} /> BOOK ON WHATSAPP
      </a>

      <div className="card-container">
        <div className="service-card">
          <FaPlaneDeparture className="icon" />
          <h3>Airport Cab</h3>
          <p>Hire Taxi for Airport Pickup/Drop</p>
        </div>
        <div className="service-card">
          <FaSuitcase className="icon" />
          <h3>Corporate Cab Service</h3>
          <p>Hire Taxi for Corporate Requirements</p>
        </div>
        <div className="service-card">
          <FaRoad className="icon" />
          <h3>One Way Cabs</h3>
          <p>Hire Taxi for One Way Travel</p>
        </div>
        <div className="service-card">
          <FaMapMarkedAlt className="icon" />
          <h3>Roundtrip Cabs</h3>
          <p>Hire Taxi for Roundtrip Travel</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
