import { Global } from "./Global";
import { useContext, useEffect } from "react";
import axios from "axios";

function ButtonDeleteNumbers({ li }) {
  const {
    setDeleteNumber,
    destroyNumber,
    setErrorMessage,
    setNumbersResponse,
    setDeleteResponse,
    setLastUpdate,
  } = useContext(Global);
  const deleteNumberHandler = () => {
    setDeleteNumber(li);
  };

  return (
    <button onClick={deleteNumberHandler} className="button">
      Delete
    </button>
  );
}

export default ButtonDeleteNumbers;
