import Home from "./Home";
import Numbers from "./Numbers";
import UsersList from "./UsersList";
import Login from "./Login";
import Register from "./Register";
import { useContext } from "react";
import { Global } from "./Global";

function Routes() {
  const { route } = useContext(Global);

  switch (route) {
    case "home":
      return <Home></Home>;
    case "numbers":
      return <Numbers></Numbers>;
    case "users":
      return <UsersList></UsersList>;
    case "login":
      return <Login></Login>;
    case "register":
      return <Register />;
    default:
      return null;
  }
}

export default Routes;
