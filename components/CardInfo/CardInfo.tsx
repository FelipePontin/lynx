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
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="cardInfo">
      {items.map((item, index) => (
        <div
          key={index}
          className="cardInfo__item"
          data-aos="fade-down"
          onMouseMove={handleMouseMove}
        >
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
