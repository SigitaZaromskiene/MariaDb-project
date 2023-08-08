import { useContext, useEffect } from "react";
import Button from "./Button";
import { Global } from "./Global";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import ButtonDeleteNumbers from "./ButtonDeleteNumbers";

const URL = "http://localhost:3004/numbers";

function NumbersList() {
  const {
    setErrorMessage,
    message,
    numbersResponse,
    setNumbersResponse,
    lastUpdate,
  } = useContext(Global);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setNumbersResponse(res.data))
      .catch((error) => setErrorMessage(error.message));
  }, [lastUpdate]);

  return (
    <div className="right-container">
      {!numbersResponse ? (
        <ErrorMessage setErrorMessage={setErrorMessage} message={message} />
      ) : (
        numbersResponse.map((li) => (
          <li key={li.id} style={{ backgroundColor: li.color }}>
            <p>{li.number}</p>
            <div className="button-flex">
              <ButtonDeleteNumbers li={li}></ButtonDeleteNumbers>
              <Button text="Change number"></Button>
            </div>
          </li>
        ))
      )}
    </div>
  );
}

export default NumbersList;
