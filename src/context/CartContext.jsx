import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [nextId, setNextId] = useState(1); // Contador para generar IDs únicos

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const newPizza = { ...pizza, cartItemId: nextId }; // Añade un ID único
      setNextId(nextId + 1); // Seinncrementa el contador para el siguiente ID único
      return [...prevCart, { ...newPizza, count: 1 }];
    });
  };

  const incrementarCantidad = (cartItemId) => {
    setCart((prevCart) => prevCart.map((item) => (item.cartItemId === cartItemId ? { ...item, count: item.count + 1 } : item)));
  };

  const decrementarCantidad = (cartItemId) => {
    setCart(
      (prevCart) => prevCart.map((item) => (item.cartItemId === cartItemId ? { ...item, count: item.count - 1 } : item)).filter((item) => item.count > 0) // Elimina pizzas con count <= 0
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  const value = {
    cart,
    addToCart,
    total,
    incrementarCantidad,
    decrementarCantidad,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
