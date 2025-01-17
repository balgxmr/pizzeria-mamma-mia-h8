import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const pizzaExists = prevCart.find((item) => item.id === pizza.id);
      if (pizzaExists) {
        return prevCart.map((item) => (item.id === pizza.id ? { ...item, count: item.count + 1 } : item));
      }
      return [...prevCart, { ...pizza, count: 1 }];
    });
  };

  const incrementarCantidad = (id) => {
    setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item)));
  };

  const decrementarCantidad = (id) => {
    setCart(
      (prevCart) => prevCart.map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item)).filter((item) => item.count > 0) // Elimina pizzas con count <= 0
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
