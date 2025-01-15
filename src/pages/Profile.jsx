import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Profile = () => {
  return (
    <Card style={{ maxWidth: "30rem" }} className="text-center mx-auto m-5">
      <Card.Header className="bg-dark text-white">Perfil</Card.Header>
      <Card.Body className="d-flex row m-3">
        <Card.Title>Email:</Card.Title>
        <Card.Text>
          <p>jose@pixelos.net</p>
        </Card.Text>
        <Button variant="danger">
          <i className="fa-solid fa-right-from-bracket"></i> Cerrar sesión
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Profile;
