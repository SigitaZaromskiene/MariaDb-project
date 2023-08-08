import { Global } from "./Global";
import { useContext } from "react";

function ButtonDeleteUser({ li }) {
  const { setDestroyUser } = useContext(Global);

  const deleteUserHandler = () => {
    setDestroyUser(li);
  };

  return (
    <button onClick={deleteUserHandler} className="button">
      Delete
    </button>
  );
}

export default ButtonDeleteUser;
