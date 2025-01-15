import { useState } from "react";
import "../App.css";
import { Container } from "react-bootstrap";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == "" || pass == "") {
      alert("Llena todos los campos!");
    } else if (pass.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres!");
    } else {
      alert("Inicio de sesión correcto!");
    }
  };

  return (
    <>
      <Container className="text-center">
        <h1 className="pt-5">
          <span className="fw-bold">Pizzería Mamma Mía!</span>
        </h1>
        <hr className="mt-5" />
      </Container>

      <section className="d-flex flex-column align-items-start formulario">
        <h1 className="mb-4">Login</h1>
        <form action="" className="w-100">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="text" id="email" placeholder="Ingresa tu correo electrónico" className="form-control" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input type="password" id="password" placeholder="Ingresa tu contraseña" className="form-control" onChange={(e) => setPass(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>
            Iniciar sesión
          </button>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
