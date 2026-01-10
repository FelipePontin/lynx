"use client";

import React from "react";
import Image from "next/image";

import "./CardInfoImage.css";

import ImageBenefitDesign from "../../images/apple-style-1.png";
import ImageBenefitPerformance from "../../images/apple-style-2.png";
import ImageBenefitCostumer from "../../images/apple-style-3.png";

const CardInfoImage = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const card = e.currentTarget;
    card.style.setProperty("--mouse-x", `50%`);
    card.style.setProperty("--mouse-y", `50%`);
  };

  return (
    <div className="cardInfoImage" data-aos="fade-down">
      <div
        className="cardInfoImage__card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          className="cardInfoImage__image"
          src={ImageBenefitDesign}
          alt="Design Moderno"
        />
        <p className="cardInfoImage__title">Design Moderno</p>
        <p className="cardInfoImage__description">
          Criamos experiências que guiam o usuário até a conversão.
        </p>
      </div>

      <div
        className="cardInfoImage__card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          className="cardInfoImage__image"
          src={ImageBenefitPerformance}
          alt="Performance Extrema"
        />
        <p className="cardInfoImage__title">Performance</p>
        <p className="cardInfoImage__description">
          Soluções otimizadas para carregar em milissegundos, garantindo a
          melhor experiência.
        </p>
      </div>

      <div
        className="cardInfoImage__card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          className="cardInfoImage__image"
          src={ImageBenefitCostumer}
          alt="Foco no Cliente"
        />
        <p className="cardInfoImage__title">Foco no Cliente</p>
        <p className="cardInfoImage__description">
          Estratégias personalizadas para o seu público-alvo, focadas em
          resultados reais.
        </p>
      </div>
    </div>
  );
};

export default CardInfoImage;
