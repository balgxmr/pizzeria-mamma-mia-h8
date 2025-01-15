import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { formatoSeparador } from "../utils/utils";
import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  const token = false;

  const totalFormateado = formatoSeparador(props.total);

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
                🛒 Total: {totalFormateado || 0}
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
