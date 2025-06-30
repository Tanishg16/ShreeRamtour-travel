import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ContactButtons = () => {
  const whatsappNumber = "+919301277735"; // With country code
  const callNumber = "+919301277735";       // Local number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleCallClick = () => {
    window.open(`tel:${callNumber}`, "_self");
  };

  return (
    <>
      {/* Right side: WhatsApp */}
      <div className="contact-button left-button" onClick={handleWhatsAppClick}>
        <FaWhatsapp size={24} color="#fff" />
      </div>

      {/* Left side: Call */}
      <div className="contact-button right-button" onClick={handleCallClick}>
        <FaPhoneAlt size={24} color="#fff" />
      </div>
    </>
  );
};

export default ContactButtons;

