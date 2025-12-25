import React from "react";

import AlertBar from "@/components/AlertBar/AlertBar";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <AlertBar />
      <div className="header__content">
        <div className='header__division'>
          <p className="header__logo">LYNX</p>
          <ul className="header__options">
            <li className="header__links">
              <a className="header__link" href="">
                Serviços
              </a>
              <a className="header__link" href="">
                Destaque
              </a>
              <a className="header__link" href="">
                Projetos
              </a>
            </li>
          </ul>
        </div>
        <button className="header__button">Começar projeto</button>
      </div>
    </header>
  );
};

export default Header;
