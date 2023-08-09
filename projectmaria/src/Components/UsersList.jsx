import Button from "./Button";
import { useContext, useEffect } from "react";
import { Global } from "./Global";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import BigButtons from "./BigButtons";
import ButtonDeleteUser from "./ButtonDeleteUser";

const URL = "http://localhost:3004/users";

function UsersList() {
  const { usersList, setUsersList, setErrorMessage, message, lastUpdate } =
    useContext(Global);

  //   useEffect(() => {
  //     getUsersList();
  //   }, []);

  //   async function getUsersList() {
  //     try {
  //       const res = await fetch(URL);
  //       if (!res.ok) {
  //         throw new Error("Something is wrong with data");
  //       }
  //       const data = await res.json();
  //       setUsersList(data);
  //     } catch (error) {
  //       setErrorMessage(error.message);
  //     }

  //   }

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setUsersList(res.data))
      .catch((err) => setErrorMessage(err.message));
  }, [lastUpdate]);

  const sortHandler = () => {
    setUsersList((li) => [...li].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const filterAdmin = () => {
    setUsersList((li) =>
      li.map((li) =>
        li.role === "admin"
          ? { ...li, showUser: true }
          : { ...li, showUser: false }
      )
    );
  };

  const showAllUsers = () => {
    setUsersList((li) => li.map((li) => ({ ...li, showUser: true })));
  };

  const sortDefaultHandler = () => {
    setUsersList((li) => [...li].sort((a, b) => a.row - b.row));
  };

  return (
    <div className="users-list-page">
      <div className="users-container">
        {!usersList ? (
          <ErrorMessage
            setErrorMessage={setErrorMessage}
            message={message}
          ></ErrorMessage>
        ) : (
          usersList.map((li) =>
            li.showUser ? (
              <li key={li.id} className="user">
                <p>{li.name}</p>
                <p>{li.role}</p>
                <ButtonDeleteUser li={li}></ButtonDeleteUser>
              </li>
            ) : null
          )
        )}
      </div>
      <div className="flex">
        <BigButtons action={sortHandler} text="Sort"></BigButtons>
        <BigButtons
          action={sortDefaultHandler}
          text="Default sort"
        ></BigButtons>
        <BigButtons action={filterAdmin} text="Filter admin"></BigButtons>
        <BigButtons action={showAllUsers} text="Show all"></BigButtons>
      </div>
    </div>
  );
}

export default UsersList;
