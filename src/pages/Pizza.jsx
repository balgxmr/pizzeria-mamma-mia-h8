import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { formatoSeparador } from "../utils/utils";

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "",
    ingredients: [],
    price: 0,
    img: "",
    desc: "",
  });

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener los datos de la pizza:", error);
      }
    }

    obtenerDatos();
  }, []);

  return (
    <Container className="my-5">
      <Row className="d-flex align-items-center">
        <Col md={6} className="text-center">
          <img src={pizza.img} alt={pizza.name} className="img-fluid rounded shadow-lg" />
        </Col>
        <Col md={6}>
          <h1 className="display-4">{pizza.name}</h1>
          <p className="text-muted">
            <strong>Ingredientes:</strong> {pizza.ingredients?.join(", ") || "No disponible"}
          </p>
          <h2>${formatoSeparador(pizza.price)}</h2>
          <p className="mt-3">{pizza.desc}</p>
          <Button variant="success" size="lg" className="mt-4">
            Ordenar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Pizza;
