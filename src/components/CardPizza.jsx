import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { formatoSeparador } from "../utils/utils";

const CardPizza = (props) => {
  const precioFormateado = formatoSeparador(props.precio);

  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="fs-3">{props.nombre}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="p-3">
            <Card.Title className="text-center fw-normal">Ingredientes</Card.Title>
            <Card.Text>🍕 {props.ingredientes.join(", ")}</Card.Text>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Title className="text-center fw-bold fs-3 mb-4 mt-2">Precio: ${precioFormateado}</Card.Title>
            <section className="d-flex justify-content-around align-items-center mb-3">
              <Button variant="outline-secondary">Ver más 👀</Button>
              <Button variant="dark">Añadir al 🛒</Button>
            </section>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default CardPizza;
