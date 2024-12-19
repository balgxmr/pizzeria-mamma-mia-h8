import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { formatoSeparador } from "../utils/utils";

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
              <button type="button" className="btn btn-outline-secondary text-white">
                🍕 Home
              </button>

              {token ? (
                <>
                  {/* Si el usuario está logueado */}
                  <button type="button" className="btn btn-outline-secondary text-white">
                    🔓 Profile
                  </button>
                  <button type="button" className="btn btn-outline-secondary text-white">
                    🔒 Logout
                  </button>
                </>
              ) : (
                <>
                  {/* Si el usuario NO está logueado */}
                  <button type="button" className="btn btn-outline-secondary text-white">
                    🔐 Login
                  </button>
                  <button type="button" className="btn btn-outline-secondary text-white">
                    🔐 Register
                  </button>
                </>
              )}
            </Nav>

            {/* Botón del carrito con el total */}
            <Form className="d-flex">
              <button type="button" className="btn btn-outline-secondary text-white">
                🛒 Total: {totalFormateado || 0}
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
