const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const md5 = require("md5");
const { v4: uuidv4 } = require("uuid");

const mysql = require("mysql");

const app = express();
const port = 3004;
// app.use(express.json({ limit: "10mb" }));
// app.use(express.static("public"));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mariadb",
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/users", (req, res) => {
  const sql = `
  SELECT id, name, role, showUser, row
  FROM users
 
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/numbers", (req, res) => {
  const sql = `
  SELECT id, color, date, number
  FROM numbers
 
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/numbers", (req, res) => {
  const sql = `
  INSERT INTO numbers (color, date, number)
  VALUES (?, ?, ?)

  `;

  con.query(sql, [req.body.color, req.body.date, req.body.number], (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.post("/register", (req, res) => {
  const showUser = "true";
  const role = "manager";
  const session = uuidv4();
  const sql = `
  INSERT INTO users (session, name, psw, role, showUser)
  VALUES (?, ?, ?, ?, ?)

  `;

  con.query(
    sql,
    [session, req.body.name, md5(req.body.psw), role, showUser],
    (err, result) => {
      if (err) throw err;
      if (result.affectedRows) {
        res.cookie("usersSession", session);
        res.json({
          status: "ok",
          name: req.body.name,
        });
      } else {
        res.json({
          status: "error",
        });
      }
    }
  );
});

app.delete("/numbers/:id", (req, res) => {
  const sql = `
        DELETE FROM numbers
        WHERE id = ?
    `;
  con.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.delete("/users/:id", (req, res) => {
  const sql = `
        DELETE FROM users
        WHERE id = ?
    `;
  con.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.put("/numbers/:id", (req, res) => {
  const sql = `
        UPDATE numbers
        SET number = ?
        WHERE id = ?
    `;
  con.query(sql, [req.body.number, req.params.id], (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.listen(port, () => {
  console.log(`LN is on port number: ${port}`);
});
