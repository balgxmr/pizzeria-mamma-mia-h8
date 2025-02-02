import { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import UserContext from "../context/UserContext";

const RegisterPage = () => {
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !pass || !confirmPass) {
      alert("Llena todos los campos!");
      return;
    }
    if (pass !== confirmPass) {
      alert("Las contraseñas no coinciden!");
      return;
    }
    await register(email, pass);
  };

  return (
    <Container className="text-center">
      <h1 className="pt-5">Pizzería Mamma Mía | Registro</h1>
      <hr className="mt-5" />
      <section className="d-flex flex-column align-items-start formulario">
        <h1 className="mb-4">Registrarme</h1>
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
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar contraseña
            </label>
            <input type="password" id="confirmPassword" className="form-control" onChange={(e) => setConfirmPass(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Registrarme
          </button>
        </form>
      </section>
    </Container>
  );
};

export default RegisterPage;
