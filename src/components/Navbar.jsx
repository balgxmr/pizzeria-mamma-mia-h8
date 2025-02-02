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
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand className="text-white">Pizzería Mamma Mía</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 gap-3" navbarScroll>
            <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-grey"} btn btn-outline-secondary`} to="/">
              🍕 Home
            </NavLink>

            {user ? (
              <>
                <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-grey"} btn btn-outline-secondary`} to="/profile">
                  🔓 Profile
                </NavLink>
                <button className="btn btn-outline-secondary text-grey" onClick={logout}>
                  🔒 Logout
                </button>
              </>
            ) : (
              <>
                <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-grey"} btn btn-outline-secondary`} to="/login">
                  🔐 Login
                </NavLink>
                <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-grey"} btn btn-outline-secondary`} to="/register">
                  🔐 Register
                </NavLink>
              </>
            )}
          </Nav>

          <Form className="d-flex">
            <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-grey"} btn btn-outline-secondary`} to="/cart">
              🛒 Total: ${formatoSeparador(calculaTotal()) || 0}
            </NavLink>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
