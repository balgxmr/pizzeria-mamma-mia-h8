import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.email);
        setToken(data.token);
        localStorage.setItem("token", data.token);
      } else {
        alert("Error en inicio de sesión");
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  const register = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        login(email, password); // Iniciar sesión automáticamente después de registrar
      } else {
        alert("Error en registro");
      }
    } catch (error) {
      console.error("Error en registro:", error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.email);
      }
    } catch (error) {
      console.error("Error obteniendo perfil:", error);
    }
  };

  return <UserContext.Provider value={{ user, token, login, register, logout, getProfile }}>{children}</UserContext.Provider>;
};

export default UserContext;
