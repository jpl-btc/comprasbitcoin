//Begining of Footer.js file//

import React from "react";

import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; {new Date().getFullYear()} ComprasBitcoin v0.0.3</p>
      </Container>
    </footer>
  );
};

export default Footer;

//End of Footer.js file//
