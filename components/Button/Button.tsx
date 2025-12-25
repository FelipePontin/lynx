import React from "react";
import "./Button.css";

import { ReactNode } from "react";

export interface ButtonProps {
  text?: string;
  href?: string;
  icon?: ReactNode;
}

const Button = ({ text, href, icon }: ButtonProps) => {
  if (href) {
    return (
      <a href={href} className="button">
        {text}
        {icon && <span className="button__icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button className="button">
      {text}
      {icon && <span className="button__icon">{icon}</span>}
    </button>
  );
};

export default Button;
