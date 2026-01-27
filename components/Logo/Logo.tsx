import React from "react";
import Image from "next/image";
import LogoLynx from "../../images/logo-lynx.png";

import "./Logo.css";

const Logo = () => {
  return <Image src={LogoLynx} alt="Logo Lynx Dsn" className="logo" />;
};

export default Logo;
