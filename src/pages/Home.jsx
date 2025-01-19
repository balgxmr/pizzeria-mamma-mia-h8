import { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { PizzaContext } from "../context/PizzaContext";

const Home = () => {
  const { pizza } = useContext(PizzaContext);

  return (
    <>
      <Header />
      <h2 className="text-center mt-5">Pizzas más destacadas</h2>

      <Row xs={1} md={3} className="g-4 ms-5 me-5 mb-5 mt-3">
        {pizza.map((pizza) => {
          return (
            <Col key={pizza.id}>
              <CardPizza pizza={pizza}></CardPizza>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
