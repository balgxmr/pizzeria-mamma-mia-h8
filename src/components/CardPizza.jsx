import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { formatoSeparador } from "../utils/utils";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);
  const precioFormateado = formatoSeparador(pizza.price);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      img: pizza.img,
    });
  };

  const verDetalle = () => {
    // alert(id);
    navigate(`/pizza/${pizza.id}`);
  };

  return (
    <Card>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title className="fs-3">{pizza.name}</Card.Title>
        <Card.Text className="fw-normal">{pizza.desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="p-3">
          <Card.Title className="text-center fw-normal">Ingredientes</Card.Title>
          <ul className="text-center list-unstyled">
            {pizza.ingredients.map((ingrediente, index) => (
              <li key={index}>🍕 {ingrediente}</li>
            ))}
          </ul>
        </ListGroup.Item>
        <ListGroup.Item>
          <Card.Title className="text-center fw-bold fs-3 mb-4 mt-2">Precio: ${precioFormateado}</Card.Title>
          <section className="d-flex justify-content-around align-items-center mb-3">
            <Button onClick={() => verDetalle()} variant="outline-secondary">
              Ver más 👀
            </Button>
            <Button variant="dark" onClick={handleAddToCart}>
              Añadir al 🛒
            </Button>
          </section>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardPizza;
