import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Global = createContext();

const URL = "http://localhost:3004/numbers";
const URLUSER = "http://localhost:3004/users";

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  // users

  const [usersList, setUsersList] = useState(null);
  const [destroyUser, setDestroyUser] = useState(null);

  console.log(destroyUser);

  // messages

  const [message, setErrorMessage] = useState(null);

  // numbers

  const [createData, setCreateData] = useState(null);
  const [numbersList, setNumbersList] = useState(null);
  const [numbersResponse, setNumbersResponse] = useState(null);
  const [destroyNumber, setDeleteNumber] = useState(null);

  useEffect(() => {
    if (null === destroyNumber) {
      return;
    }
    axios.delete(URL + "/" + destroyNumber.id).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  }, [destroyNumber]);

  useEffect(() => {
    if (null === destroyUser) {
      return;
    }
    axios.delete(URLUSER + "/" + destroyUser.id).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  }, [destroyUser]);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        usersList,
        setUsersList,
        setErrorMessage,
        message,
        createData,
        setCreateData,
        numbersList,
        setNumbersList,
        lastUpdate,
        setLastUpdate,
        numbersResponse,
        setNumbersResponse,
        destroyNumber,
        setDeleteNumber,
        setDestroyUser,
      }}
    >
      {children}
    </Global.Provider>
  );
};
