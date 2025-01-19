import { formatoSeparador } from "../utils/utils";
import { Link, NavLink } from "react-router-dom";
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
              <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-grey"} btn btn-outline-secondary`} to="/" type="button">
                🍕 Home
              </NavLink>

              {token ? (
                <>
                  {/* Si el usuario está logueado */}
                  <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-grey"} btn btn-outline-secondary`} to="/profile" type="button">
                    🔓 Profile
                  </NavLink>
                  <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-grey"} btn btn-outline-secondary`} to="/logout" type="button">
                    🔒 Logout
                  </NavLink>
                </>
              ) : (
                <>
                  {/* Si el usuario NO está logueado */}
                  <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-grey"} btn btn-outline-secondary`} to="/login" type="button">
                    🔐 Login
                  </NavLink>
                  <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-grey"} btn btn-outline-secondary`} to="/register" type="button">
                    🔐 Register
                  </NavLink>
                </>
              )}
            </Nav>

            {/* Botón del carrito con el total */}
            <Form className="d-flex">
              <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-grey"} btn btn-outline-secondary`} to="/cart" type="button">
                🛒 Total: ${formatoSeparador(calculaTotal()) || 0}
              </NavLink>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
