import { useState } from "react";
import { createContext } from "react";
const adminContext = createContext();

export function AdminProvider({ children }) {
  const [tokenAdmin, setTokenAdmin] = useState("");

  const addTokenAdmin = (token) => {
    setTokenAdmin(token);
    console.log(token);
  };
  return (
    <adminContext.Provider value={{ tokenAdmin, addTokenAdmin }}>
      {children}
    </adminContext.Provider>
  );
}
export default adminContext;
