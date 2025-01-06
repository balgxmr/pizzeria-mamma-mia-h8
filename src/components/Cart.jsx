import React, { useState } from "react";
import { pizzaCart } from "../data/pizzas";
import "../App.css";
import { formatoSeparador } from "../utils/utils";

const Cart = () => {
  // Estado para manejar el carrito
  const [cart, setCart] = useState(pizzaCart);

  const incrementarCantidad = (id) => {
    setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item)));
  };

  const decrementarCantidad = (id) => {
    setCart(
      (prevCart) => prevCart.map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item)).filter((item) => item.count > 0) // Elimina pizzas con count <= 0
    );
  };

  // Calcular el total del carrito
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="m-5">
      <h1>Carrito de compras</h1>
      <h4>Detalles del pedido:</h4>
      {cart.length > 0 ? (
        <div className="cart-container">
          {cart.map((pizza) => (
            <div className="pizza-cartDiv" key={pizza.id}>
              <img src={pizza.img} className="pizza-cartDiv--img" alt={pizza.name} />
              <p className="h6 pizza-cartDiv--name">{pizza.name}</p>
              <p className="h6 pizza-cartDiv--price">${formatoSeparador(pizza.price)}</p>
              <div className="pizza-cartDiv--quantity">
                <button className="btn btn-outline-danger btn-sm" onClick={() => decrementarCantidad(pizza.id)}>
                  -
                </button>
                <span className="mx-2">{pizza.count}</span>
                <button className="btn btn-outline-primary btn-sm" onClick={() => incrementarCantidad(pizza.id)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay pizzas en el carrito.</p>
      )}
      <h3 className="mt-4">Total: ${formatoSeparador(total)}</h3>
      <button className="btn btn-dark mt-3">Pagar</button>
    </div>
  );
};

export default Cart;
