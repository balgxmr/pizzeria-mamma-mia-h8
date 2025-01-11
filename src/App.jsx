import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";

function App() {
  return (
    <>
      <Navbar total={25000} />
      {/* <Home /> */}
      {/* <RegisterPage />
      <LoginPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
