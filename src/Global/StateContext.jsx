import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [theme , setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const data = {theme , setTheme}

  return (
    <StateContext.Provider value={data}>
        {children}
    </StateContext.Provider>
  )

};

export const StateContextCustom = () => useContext(StateContext);
