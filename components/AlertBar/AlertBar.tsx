import React from "react";

import "./AlertBar.css";

export interface AlertBarProps {
  className?: string;
}

const AlertBar = ({ className }: AlertBarProps) => {
  return (
    <div className={`alertBar ${className}`}>
      <div className="alertBar__badge">Novo</div>
      <p className="alertBar__text">
        Materiais visuais pensados para destacar sua marca
      </p>
    </div>
  );
};

export default AlertBar;
