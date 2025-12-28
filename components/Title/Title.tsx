import React from "react";

import "./Title.css";

export interface TitleProps {
  text?: string;
  coloredText?: string;
  description?: string;
}

const Title = ({ text, coloredText, description }: TitleProps) => {
  return (
    <div className="title" data-aos="fade-down">
      <p className="title__text">
        {text}
        <span className="title__colored">{coloredText}</span>
      </p>
      <p className="title__description">{description}</p>
    </div>
  );
};

export default Title;
