import { useContext } from "react";
import { useEffect } from "react";
import { Global } from "./Global";

function ErrorMessage({ message, setErrorMessage }) {
  const { setRoute } = useContext(Global);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
  }, [message]);

  return (
    <div className={message ? "error-message-container" : null}>
      <div className="message">{message}</div>
    </div>
  );
}

export default ErrorMessage;
