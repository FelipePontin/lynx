import React from "react";

import Image from "next/image";

import Title from "../Title/Title";
import { FaRegCircleCheck } from "react-icons/fa6";

import WhyChooseNew from "../../images/why-choose-new.png";

import "./BannerSection.css";

const BannerSection = () => {
  return (
    <section className="bannerSection">
      <div className="bannerSection__content">
        <p className="bannerSection__title">Por que escolher a</p>
        <p className="bannerSection__title--colored">Lynx Dsn?</p>
        <p className="bannerSection__description">
          Combinamos a precisão técnica com a sensibilidade artística para
          entregar resultados que outros apenas prometem.
        </p>
        <div className="bannerSection__benefits">
          <div className="bannerSection__benefits--section">
            <div className="bannerSection__icon--division">
              <FaRegCircleCheck className="bannerSection__icon" />
            </div>
            <p className="bannerSection__benefits--name">Metodologia Ágil</p>
          </div>
          <div className="bannerSection__benefits--section">
            <div className="bannerSection__icon--division">
              <FaRegCircleCheck className="bannerSection__icon" />
            </div>
            <p className="bannerSection__benefits--name">Suporte 24/7</p>
          </div>
          <div className="bannerSection__benefits--section">
            <div className="bannerSection__icon--division">
              <FaRegCircleCheck className="bannerSection__icon" />
            </div>
            <p className="bannerSection__benefits--name">Relatórios Reais</p>
          </div>
          <div className="bannerSection__benefits--section">
            <div className="bannerSection__icon--division">
              <FaRegCircleCheck className="bannerSection__icon" />
            </div>
            <p className="bannerSection__benefits--name">Design Exclusivo</p>
          </div>
        </div>
      </div>
      <div className="bannerSection__image--division">
        <Image className="bannerSection__image" src={WhyChooseNew} alt={""} />
      </div>
    </section>
  );
};

export default BannerSection;
