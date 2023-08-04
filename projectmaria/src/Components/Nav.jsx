import { useContext } from "react";
import { Global } from "./Global";

function Nav() {
  const { setRoute, route } = useContext(Global);
  return (
    <div className="navigation">
      <div className="list-container">
        <div>
          <li
            className={route === "home" ? "active" : null}
            onClick={() => setRoute("home")}
          >
            Home
          </li>
          <li
            className={route === "numbers" ? "active" : null}
            onClick={() => setRoute("numbers")}
          >
            Numbers
          </li>
          <li
            className={route === "users" ? "active" : null}
            onClick={() => setRoute("users")}
          >
            Users
          </li>
        </div>
        <div>
          <li
            className={route === "login" ? "active" : null}
            onClick={() => setRoute("login")}
          >
            Login
          </li>
          <li
            className={route === "register" ? "active" : null}
            onClick={() => setRoute("register")}
          >
            Register
          </li>
        </div>
      </div>
    </div>
  );
}

export default Nav;
