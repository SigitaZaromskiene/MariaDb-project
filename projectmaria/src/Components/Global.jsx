import { createContext } from "react";
import { useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");

  // users

  const [usersList, setUsersList] = useState(null);

  // messages

  const [message, setErrorMessage] = useState(null);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        usersList,
        setUsersList,
        setErrorMessage,
        message,
      }}
    >
      {children}
    </Global.Provider>
  );
};
