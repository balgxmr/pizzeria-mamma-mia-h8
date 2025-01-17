import { formatoSeparador } from "../utils/utils";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { CartContext } from "../context/CartContext";

const NavbarComponent = () => {
  const { cart } = useContext(CartContext); // Accede al contexto del carrito

  // Calcula el total del carrito
  const calculaTotal = () => cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);

  // Simula el estado del token (puedes reemplazar esto con tu lógica real de autenticación)
  const token = false;

  return (
    <div>
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          {/* Título de la Navbar */}
          <Navbar.Brand href="#" className="text-white">
            Pizzería Mamma Mía
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 gap-3" style={{ maxHeight: "100px" }} navbarScroll>
              <Link to="/" className="btn btn-outline-secondary text-white">
                🍕 Home
              </Link>

              {token ? (
                <>
                  {/* Si el usuario está logueado */}
                  <Link to="/profile" type="button" className="btn btn-outline-secondary text-white">
                    🔓 Profile
                  </Link>
                  <Link type="button" className="btn btn-outline-secondary text-white">
                    🔒 Logout
                  </Link>
                </>
              ) : (
                <>
                  {/* Si el usuario NO está logueado */}
                  <Link to="/login" type="button" className="btn btn-outline-secondary text-white">
                    🔐 Login
                  </Link>
                  <Link to="/register" type="button" className="btn btn-outline-secondary text-white">
                    🔐 Register
                  </Link>
                </>
              )}
            </Nav>

            {/* Botón del carrito con el total */}
            <Form className="d-flex">
              <Link to="/cart" type="button" className="btn btn-outline-secondary text-white">
                🛒 Total: ${formatoSeparador(calculaTotal()) || 0}
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
