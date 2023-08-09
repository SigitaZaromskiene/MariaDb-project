import { useState, useContext } from "react";
import Button from "./Button";
import { Global } from "./Global";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");
  const [psw1, setPsw1] = useState("");

  const { setErrorMessage, message, setRoute } = useContext(Global);

  const registerUserHandler = (e) => {
    e.preventDefault();

    if (!name || !psw || !psw1) {
      setErrorMessage("Please fill all details");
      return;
    }

    if (name.length < 3) {
      setErrorMessage("Name is too short");
      return;
    }

    if (psw.length < 3) {
      setErrorMessage("Password is too short");
      return;
    }

    if (psw !== psw1) {
      setErrorMessage("Passwords dismatch");
      return;
    } else {
      axios
        .post(
          "http://localhost:3004/register",
          { name, psw },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "ok") {
            setName("");
            setPsw("");
            setPsw1("");
            setRoute("login");
          } else {
            setErrorMessage("Server error");
          }
        });
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form">
        {message ? (
          <h4 style={{ color: "red" }}>{message}</h4>
        ) : (
          <h4>Please register</h4>
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

          <div
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <label>Repeat password</label>
            <input
              type="number"
              value={psw1}
              onChange={(e) => setPsw1(e.target.value)}
            ></input>
          </div>
        </div>
        <Button action={registerUserHandler} text="Register"></Button>
      </form>
    </div>
  );
}

export default Register;
