import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center m-5">
      <Container className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          <span className="text-danger">Oops!</span> Página no encontrada.
        </p>
        <p className="lead">La página que estás buscando no existe.</p>
        <Link to="/" className="btn btn-warning">
          Volver al Home
        </Link>
      </Container>
    </div>
  );
};

export default NotFound;
