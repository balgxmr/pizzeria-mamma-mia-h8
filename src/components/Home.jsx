import { Row, Col } from "react-bootstrap";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas";

const Home = () => {
  return (
    <>
      <Header />
      <h2 className="text-center mt-5">Pizzas más destacadas</h2>
      {/*<Row xs={1} md={3} className="g-4 ms-5 me-5 mb-5 mt-3">
        <Col>
          <CardPizza nombre="Napolitana" precio={5950} ingredientes={["mozzarella", "tomates", "jamón", "orégano"]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" />
        </Col>
        <Col>
          <CardPizza nombre="Española" precio={6950} ingredientes={["mozzarella", "gorgonzola", "parmesano", "provolone"]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab" />
        </Col>
        <Col>
          <CardPizza nombre="Pepperoni" precio={6950} ingredientes={["mozzarella", "pepperoni", "orégano"]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3" />
        </Col>
      </Row> */}

      <Row xs={1} md={3} className="g-4 ms-5 me-5 mb-5 mt-3">
        {pizzas.map((pizza) => {
          return (
            <Col key={pizza.id}>
              <CardPizza nombre={pizza.name} desc={pizza.desc} precio={pizza.price} ingredientes={pizza.ingredients} img={pizza.img}></CardPizza>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
