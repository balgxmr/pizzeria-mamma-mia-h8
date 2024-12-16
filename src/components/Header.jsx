import React from "react";
import { Container } from "react-bootstrap";
import "../App.css"; // Importa el CSS

const Header = () => {
  return (
    <div className="header-container">
      <Container>
        <h1 className="header-title">¡Pizzería Mamma Mia!</h1>
        <p className="header-description">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </Container>
    </div>
  );
};

export default Header;
