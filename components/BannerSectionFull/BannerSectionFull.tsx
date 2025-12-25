import React from "react";

import Button from "../Button/Button";

import bannerHeroBackground from "../../images/bannerHeroBackground.png";

import { BiSolidZap } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

import "./BannerSectionFull.css";

export interface BannerSectionFullProps {
  alertText?: string;
  title?: string;
  subtitle?: string;
  background?: string;
  image?: string;
  alt?: string;
  buttonText?: string;
  buttonLink?: string;
}

const BannerSectionFull = ({
  alertText,
  title,
  subtitle,
  background,
  image,
  alt,
  buttonText,
  buttonLink,
}: BannerSectionFullProps) => {
  return (
    <section
      className="bannerSectionFull"
      style={{
        backgroundImage: bannerHeroBackground.src
          ? `url("${bannerHeroBackground.src}")`
          : undefined,
      }}
      role="img"
      aria-label={alt}
    >
      <div className="bannerSectionFull__alertText">
        <BiSolidZap />
        <span className="bannerSectionFull__alertText--font">
          Marketing Digital de Alta Performance
        </span>
      </div>
      <div className="bannerSectionFull__title">
        <p className="bannerSectionFull__title--main">Sua Presença Digital</p>
        <p className="bannerSectionFull__title--purple">
          Elevada ao Próximo Nível
        </p>
      </div>
      <p className="bannerSectionFull__subtitle">
        Criamos experiências digitais que não apenas atraem olhares, mas dominam
        mercados. Design de elite para marcas visionárias.
      </p>
      <Button
        href={buttonLink}
        text={"Falar com um especialista"}
        icon={<IoIosArrowForward />}
      />
    </section>
  );
};

export default BannerSectionFull;
