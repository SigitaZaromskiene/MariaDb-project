import { Global } from "./Global";
import { useContext } from "react";

function ButtonDeleteNumbers({ li }) {
  const { setDeleteNumber } = useContext(Global);

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
