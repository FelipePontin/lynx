import React from "react";
import "./CardInfo.css";

export interface CardInfoItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export interface CardInfoProps {
  items: CardInfoItemProps[];
}

const CardInfo = ({ items }: CardInfoProps) => {
  return (
    <section className="cardInfo">
      {items.map((item, index) => (
        <div key={index} className="cardInfo__item" data-aos="fade-down">
          {item.icon && (
            <div className="cardInfo__icon--division">{item.icon}</div>
          )}

          <p className="cardInfo__title">{item.title}</p>
          <p className="cardInfo__description">{item.description}</p>

          {item.imageSrc && (
            <img
              className="cardInfo__image"
              src={item.imageSrc}
              alt={item.imageAlt || item.title}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default CardInfo;
