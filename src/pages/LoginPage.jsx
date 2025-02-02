import { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import UserContext from "../context/UserContext";

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !pass) {
      alert("Llena todos los campos!");
      return;
    }
    await login(email, pass);
  };

  return (
    <Container className="text-center">
      <h1 className="pt-5">Pizzería Mamma Mía | Inicio de Sesión</h1>
      <hr className="mt-5" />
      <section className="d-flex flex-column align-items-start formulario">
        <h1 className="mb-4">Login</h1>
        <form className="w-100" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="text" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input type="password" id="password" className="form-control" onChange={(e) => setPass(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Iniciar sesión
          </button>
        </form>
      </section>
    </Container>
  );
};

export default LoginPage;
