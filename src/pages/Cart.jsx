import React, { useContext } from "react";
import "../App.css";
import { formatoSeparador } from "../utils/utils";
import { CartContext } from "../context/CartContext";
import UserContext from "../context/UserContext";

const Cart = () => {
  const { cart, incrementarCantidad, decrementarCantidad, total, clearCart } = useContext(CartContext);
  const { user, token } = useContext(UserContext);

  const handleCheckout = async () => {
    if (!token) return alert("Debes iniciar sesión para realizar la compra");

    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (res.ok) {
        alert("Compra realizada con éxito");
        clearCart(); // Vaciar el carrito después de la compra
      } else {
        alert("Hubo un problema con la compra");
      }
    } catch (error) {
      console.error("Error en checkout:", error);
    }
  };

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
      <button className="btn btn-dark mt-3" onClick={handleCheckout} disabled={!user}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;
