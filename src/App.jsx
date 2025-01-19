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
import { useContext } from "react";
import UserContext from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <CartProvider>
        <Navbar />
        <PizzaProvider>
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={user ? <Home /> : <LoginPage />}></Route>
              <Route path="/register" element={user ? <Home /> : <RegisterPage />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/pizza/:id" element={<Pizza />}></Route>
              <Route path="/profile" element={user ? <Profile /> : <LoginPage />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </main>
        </PizzaProvider>

        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
