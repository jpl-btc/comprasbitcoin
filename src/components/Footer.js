//Begining of Footer.js file//

import React from "react";

import Container from "./Container";
//import "./assets/stylesheets/Footer.css";
import jsonData from "../data/locations.json";

const Footer = () => {
  const numberOfPoints = jsonData.features.filter(
    (feature) => feature.geometry.type === "Point"
  ).length;

  return (
    <footer>
      <Container>
        <p>
          &copy; {new Date().getFullYear()} ComprasBitcoin v0.0.7 |{" "}
          {numberOfPoints} registros |{" "}
          <span>
            {" "}
            📝
            <a
              href="https://forms.gle/vsn6BmqYLJjo9MWq7"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Agregar un establecimiento🏢!
            </a>{" "}
            |{" "}
            <a
              href="https://t.me/+kTrnxYGIwKY2YWVh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Soporte por Telegram
            </a>{" "}
            | Tambien podes{" "}
            <a
              href="https://discord.com/invite/SN8JNhMgvY"
              target="_blank"
              rel="noopener noreferrer"
            >
              La Crypta Discord! 😊
            </a>{" "}
            |
          </span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

//End of Footer.js file//
