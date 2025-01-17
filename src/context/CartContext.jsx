import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      // Buscar si la pizza ya está en el carrito
      const existingPizza = prevCart.find((item) => item.id === pizza.id && item.name === pizza.name);
      if (existingPizza) {
        // Si ya existe, incrementar su cantidad
        return prevCart.map((item) => (item.id === pizza.id && item.name === pizza.name ? { ...item, count: item.count + 1 } : item));
      } else {
        // Si no existe, añadir una nueva con un ID único
        const newPizza = { ...pizza, cartItemId: nextId, count: 1 };
        setNextId(nextId + 1);
        return [...prevCart, newPizza];
      }
    });
  };

  const incrementarCantidad = (cartItemId) => {
    setCart((prevCart) => prevCart.map((item) => (item.cartItemId === cartItemId ? { ...item, count: item.count + 1 } : item)));
  };

  const decrementarCantidad = (cartItemId) => {
    setCart((prevCart) => prevCart.map((item) => (item.cartItemId === cartItemId ? { ...item, count: item.count - 1 } : item)).filter((item) => item.count > 0));
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
