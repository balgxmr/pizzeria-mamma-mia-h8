import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

const Header = () => {
  return (
    <div className="header-container">
      <Container>
        <h1 className="header-title">¡Pizzeria Mamma Mía!</h1>
        <p className="header-description">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </Container>
    </div>
  );
};

export default Header;
