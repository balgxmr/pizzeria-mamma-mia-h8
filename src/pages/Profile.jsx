import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user, getProfile, logout } = useContext(UserContext);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Card style={{ maxWidth: "30rem" }} className="text-center mx-auto m-5">
      <Card.Header className="bg-dark text-white">Perfil</Card.Header>
      <Card.Body className="d-flex row m-3">
        <Card.Title>Email:</Card.Title>
        <Card.Text>
          <p>{user || "Cargando..."}</p>
        </Card.Text>
        <Button variant="danger" onClick={logout}>
          <i className="fa-solid fa-right-from-bracket"></i> Cerrar sesión
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Profile;
