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
          &copy; {new Date().getFullYear()} ComprasBitcoin v0.0.6 | Tenemos{" "}
          {numberOfPoints} negocios registrados |{" "}
          <span>
            ¿Queres agregar un establecimiento 🏢 al mapa de ComprasBitcoin.ar?{" "}
            <a
              href="https://forms.gle/vsn6BmqYLJjo9MWq7"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Llena este formulario 📝!
            </a>{" "}
            | Tambien podes{" "}
            <a
              href="https://discord.com/invite/SN8JNhMgvY"
              target="_blank"
              rel="noopener noreferrer"
            >
              entrar a nuestro Discord y dejarnos un mensaje! 😊
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
