import React from "react";

import { FaWhatsapp } from "react-icons/fa";

import "./WhatsappButton.css";

const WhatsappButton = () => {
  return (
    <div className="whatsappButton">
      <a href="">
        <FaWhatsapp className="whatsappButton__icon" />
      </a>
    </div>
  );
};

export default WhatsappButton;
