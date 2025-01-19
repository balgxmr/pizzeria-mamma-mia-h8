import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(true); // true indica que el usuario está logueado

  const logout = () => setUser(false);

  return <UserContext.Provider value={{ user, setUser, logout }}>{children}</UserContext.Provider>;
};

export default UserContext;
