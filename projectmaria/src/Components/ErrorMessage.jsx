
import { useEffect } from "react";


function ErrorMessage({ message, setErrorMessage }) {
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
