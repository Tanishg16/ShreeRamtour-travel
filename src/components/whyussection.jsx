import React from "react";
import { FaUserTie, FaClock, FaCarSide, FaFileInvoice } from "react-icons/fa";
const WhyUsSection = () => {
  const features = [
    { icon: <FaUserTie size={24} color="#6b21a8" />, title: "Experienced Drivers" },
    { icon: <FaClock size={24} color="#f59e0b" />, title: "On Time Service" },
    { icon: <FaCarSide size={24} color="#10b981" />, title: "Door step Pickup/Drop" },
    { icon: <FaFileInvoice size={24} color="#6366f1" />, title: "Transparent Billing" },
  ];
   return (
    <div className="whyus-container">
      {/* Left Section */}
      <div className="whyus-left">
        <h4 className="whyus-subtitle">Why us</h4>
        <h2 className="whyus-title">
          Hassle free and <br />
          comfortable travel each <br />
          and every time
        </h2>
        <button className="whyus-button">
          ↗ KNOW MORE
        </button>
      </div>

      {/* Right Section */}
      <div className="whyus-features">
        {features.map((item, index) => (
          <div key={index} className="whyus-card">
            <div className="whyus-icon">{item.icon}</div>
            <div className="whyus-text">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
 export default WhyUsSection;