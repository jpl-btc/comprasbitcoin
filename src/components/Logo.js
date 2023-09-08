import React from "react";

import logo from "../assets/shared/images/avatar.jpg";

const Logo = () => {
  return (
    <span className="logo">
      <img src={logo} alt="Logo" />
      ComprasBitcoin - Un proyecto nacido en La Crypta
    </span>
  );
};

export default Logo;
