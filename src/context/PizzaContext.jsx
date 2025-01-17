import React, { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    async function obtenerDatos() {
      const res = await fetch("http://localhost:5000/api/pizzas");
      const data = await res.json();

      console.log(data);

      setPizza(data);
    }

    obtenerDatos();
  }, []);

  return <PizzaContext.Provider value={{ pizza }}>{children}</PizzaContext.Provider>;
};

export default PizzaProvider;
