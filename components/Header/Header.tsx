"use client";

import React, { useEffect, useState } from "react";

import AlertBar from "@/components/AlertBar/AlertBar";

import "./Header.css";

const Header = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowAlert(false);
      } else {
        setShowAlert(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      {/* {showAlert && <AlertBar />} */}

      <div className="header__content">
        <div className="header__division">
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
        <a href="https://api.whatsapp.com/send?phone=551198255-8477&text=Olá! Eu gostaria de fazer um orçamento.">
          <button className="header__button">Começar projeto</button>{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
