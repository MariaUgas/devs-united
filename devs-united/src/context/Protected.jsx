import { createContext, useContext, useState } from "react";
import React from "react";

const Context = createContext();
export const useProtectedContext = () => {
  useContext(Context);
};
const ProtectedContext = ({ children }) => {
  return <Context.Provider value={true}>{children}</Context.Provider>;
};
export default ProtectedContext;
