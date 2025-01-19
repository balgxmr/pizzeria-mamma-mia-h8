import { formatoSeparador } from "../utils/utils";
import { Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { CartContext } from "../context/CartContext";
import UserContext from "../context/UserContext";

const NavbarComponent = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);

  const calculaTotal = () => cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);

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

              {user ? (
                <>
                  {/* Si el usuario está logueado */}
                  <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-grey"} btn btn-outline-secondary`} to="/profile" type="button">
                    🔓 Profile
                  </NavLink>
                  <NavLink className={({ isActive }) => `${isActive ? "text-grey" : ""} btn btn-outline-secondary`} to="/" type="button" onClick={logout}>
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
