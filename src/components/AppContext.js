import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toDo, setTodo] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={{ toDo, setTodo, count, setCount }}>
      {children}
    </AppContext.Provider>
  );
};
