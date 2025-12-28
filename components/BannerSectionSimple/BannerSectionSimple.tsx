import React from "react";

import Image from "next/image";

import "./BannerSectionSimple.css";

export interface BannerSectionSimpleProps {
  title?: string;
  subtitle?: string;
  imageLeft?: boolean;
  imageLink?: string;
  altImage?: string;
}

const BannerSectionSimple = ({
  title,
  subtitle,
  imageLeft,
  imageLink = "",
  altImage = "",
}: BannerSectionSimpleProps) => {
  return (
    <section
      className={`bannerSectionSimple ${
        imageLeft ? "bannerSectionSimple__left" : "bannerSectionSimple__right"
      }`}
      data-aos="fade-down"
    >
      <div className="bannerSectionSimple__content">
        <p className="bannerSectionSimple__title">{title}</p>
        <p className="bannerSectionSimple__subtitle">{subtitle}</p>
      </div>
      <div className="bannerSectionSimple__image--division">
        <Image
          className="bannerSectionSimple__image"
          src={imageLink}
          width={450}
          height={450}
          alt={altImage}
        />
      </div>
    </section>
  );
};

export default BannerSectionSimple;
