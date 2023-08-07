function Register() {
  return (
    <div className="login-form-container">
      <form className="login-form">
        <h4>Please login</h4>
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
            <input></input>
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
            <input></input>
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
            <label>Repeat password</label>
            <input></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
