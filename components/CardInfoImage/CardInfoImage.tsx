import React from "react";

import Image from "next/image";

import "./CardInfoImage.css";

import ImageBenefitDesign from "../../images/apple-style-1.png";
import ImageBenefitPerformance from "../../images/apple-style-2.png";
import ImageBenefitCostumer from "../../images/apple-style-3.png";

const CardInfoImage = () => {
  return (
    <div className="cardInfoImage" data-aos="fade-down">
      <div className="cardInfoImage__card">
        <Image
          className="cardInfoImage__image"
          src={ImageBenefitDesign}
          alt={""}
        />
        <p className="cardInfoImage__title">Design de Elite</p>
        <p className="cardInfoImage__description">
          Criamos experiências que guiam o usuário até a conversão.
        </p>
      </div>
      <div className="cardInfoImage__card">
        <Image
          className="cardInfoImage__image"
          src={ImageBenefitPerformance}
          alt={""}
        />
        <p className="cardInfoImage__title">Performance Extrema</p>
        <p className="cardInfoImage__description">
          Soluções otimizadas para carregar em milissegundos, garantindo a
          melhor experiência.
        </p>
      </div>
      <div className="cardInfoImage__card">
        <Image
          className="cardInfoImage__image"
          src={ImageBenefitCostumer}
          alt={""}
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
