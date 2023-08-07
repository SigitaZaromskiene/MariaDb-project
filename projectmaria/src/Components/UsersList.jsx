import Button from "./Button";
import { useContext, useEffect } from "react";
import { Global } from "./Global";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import BigButtons from "./BigButtons";

const URL = "http://localhost:3004/users";

function UsersList() {
  const { usersList, setUsersList, setErrorMessage, message } =
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
  }, [usersList]);

  return (
    <div className="users-list-page">
      <div className="users-container">
        {!usersList ? (
          <ErrorMessage
            setErrorMessage={setErrorMessage}
            message={message}
          ></ErrorMessage>
        ) : (
          usersList.map((li) => (
            <li key={li.id} className="user">
              <p>{li.name}</p>
              <Button text="Delete"></Button>
            </li>
          ))
        )}
      </div>
      <div className="flex">
        <BigButtons text="Sort"></BigButtons>
        <BigButtons text="Filter admin"></BigButtons>
      </div>
    </div>
  );
}

export default UsersList;
