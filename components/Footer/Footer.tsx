import React from "react";

import Logo from "../Logo/Logo";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

import Link from 'next/link'

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
      </div>
      <div className="footer__socials">
        <Link href="https://www.instagram.com/lynx.dsn/">
          <FaInstagram className="footer__social--icon" />
        </Link>
        {/* <LuLinkedin className="footer__social--icon" /> */}
        {/* <FaXTwitter className="footer__social--icon" /> */}
      </div>
      <div className="footer__copy">
        <p className="footer__copy--text">© 2026 Lynx Dsn</p>
        <p className="footer__copy--description">
          Excelência em Marketing Digital.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
