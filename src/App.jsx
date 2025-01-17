import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CartProvider from "./context/CartContext";
import PizzaProvider from "./context/PizzaContext";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <PizzaProvider>
          <main>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/login" element={<LoginPage></LoginPage>}></Route>
              <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="/pizza/p001" element={<Pizza></Pizza>}></Route>
              <Route path="/profile" element={<Profile></Profile>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
          </main>
        </PizzaProvider>

        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
