import axios from "axios";
import { useContext } from "react";
import { Global } from "./Global";

const URL = "http://localhost:3004/logout";

function Logout() {
  const { setRoute, setLogged, setLoggedName, setErrorMessage } =
    useContext(Global);

  const logoutHandler = () => {
    axios.post(URL, {}, { withCredentials: true }).then((res) => {
      console.log(res);
      setRoute("home");
      setLogged(null);
      setLoggedName("");
    });
  };

  return <div onClick={logoutHandler}>Logout</div>;
}

export default Logout;
