//Begining of Footer.js file//

import React from "react";

import Container from "./Container";
//import "./assets/stylesheets/Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>
          &copy; {new Date().getFullYear()} ComprasBitcoin v0.0.5 |{" "}
          <span>
            ¿Queres agregar un establecimiento al mapa de ComprasBitcoin.ar?{" "}
            <a
              href="https://discord.com/invite/SN8JNhMgvY"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Entra a nuestro Discord y dejanos un mensaje!
            </a>
          </span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

//End of Footer.js file//
