const express = require("express");
const app = express();
const PORT = process.env.PORT | 5000;
const mysql = require("mysql");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/isAuth", (req, res) => {
  console.log(req.cookies.Auth);
  if (req.cookies !== undefined && req.cookies.Auth === "true") {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.post("/login", (req, res) => {
  const userName = req.body.data.userName,
    password = req.body.data.password;
  connection.query(
    "SELECT * FROM user WHERE user_name = ? AND password = ?",
    [userName, password],
    (err, result) => {
      if (result.length > 0) {
        res
          .status(200)
          .cookie("Auth", true, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(new Date().getTime() + 100 * 1000),
          })
          .cookie("user_name", userName, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(new Date().getTime() + 100 * 1000),
          })
          .send(true);
      } else {
        res.send(false);
      }
    }
  );
});

app.get("/logout", (req, res) => {
  res.clearCookie("Auth");
  res.clearCookie("user_name");
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log("Server is listening on PORT ${}");
});
