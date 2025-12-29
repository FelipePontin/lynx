import React from "react";

import { FaWhatsapp } from "react-icons/fa";

import "./WhatsappButton.css";

const WhatsappButton = () => {
  return (
    <div className="whatsappButton">
      <a href="https://api.whatsapp.com/send?phone=5511982558477&text=Olá! Eu gostaria de fazer um orçamento.">
        <FaWhatsapp className="whatsappButton__icon" />
      </a>
    </div>
  );
};

export default WhatsappButton;
