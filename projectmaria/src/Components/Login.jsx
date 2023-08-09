import { useState, useContext } from "react";
import { Global } from "./Global";
import Button from "./Button";
import axios from "axios";

function Login() {
  const { setErrorMessage, message, setRoute, setLogged, setLoggedName } =
    useContext(Global);

  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  const loginUserHandler = (e) => {
    e.preventDefault();

    if (!name || !psw) {
      setErrorMessage("Please fill all details");
      return;
    }

    axios
      .post(
        "http://localhost:3004/login",
        { name, psw },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          setName("");
          setPsw("");
          setRoute("numbers");
          setLogged(true);
          setLoggedName(res.data.name);
        } else {
          setErrorMessage("Not correct details");
        }
      });
  };

  return (
    <div className="login-form-container">
      <form className="login-form">
        {message ? (
          <h4 style={{ color: "red" }}>{message}</h4>
        ) : (
          <h4>Please login</h4>
        )}
        <div className="border"></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "space-between",
            flexDirection: "column",
            gap: "30px",
            padding: "25px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <label>Password</label>
            <input
              type="number"
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
            ></input>
          </div>
        </div>
        <Button action={loginUserHandler} text="Login"></Button>
      </form>
    </div>
  );
}

export default Login;
