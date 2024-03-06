const express = require("express");
const path = require("path");
// const bcrypt = require("bcrypt");
const jtw = require("jsonwebtoken");
const cors = require("cors");
const { sequelize, Korisnik } = require("./models");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "static")));

function getCookie(req) {
  const cookies = req.headers.cookie.split("; ");
  const parsedCookies = {};

  cookies.forEach((element) => {
    pc = element.split("=");
    parsedCookies[pc[0]] = pc[1];
  });

  return parsedCookies;
}

function authToken(req, res, next) {
  const cookies = getCookie(req);
  const token = cookies["token"];
  if (token === null) return res.sendStatus(401);

  jtw.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get("/admin", authToken, (req, res) => {
  res.sendFile("home.html", { root: "static" });
});

app.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "static" });
});

app.get("/register", (req, res) => {
  res.sendFile("register.html", { root: "static" });
});

app.get("/admin/destinacija", authToken, (req, res) => {
  res.sendFile("destinacija.html", { root: "static" });
});

app.get("/admin/hotel", authToken, (req, res) => {
  res.sendFile(path.join(__dirname, "static", "hotel.html"));
});

app.get("/admin/godina", authToken, (req, res) => {
  res.sendFile(path.join(__dirname, "static", "godina.html"));
});

app.get("/admin/aranzman", authToken, (req, res) => {
  res.sendFile(path.join(__dirname, "static", "aranzman.html"));
});

app.get("/admin/korisnik", authToken, (req, res) => {
  res.sendFile(path.join(__dirname, "static", "korisnik.html"));
});

app.get("/admin/pansion", authToken, (req, res) => {
  res.sendFile(path.join(__dirname, "static", "pansion.html"));
});

app.get("/admin/sezona", authToken, (req, res) => {
  res.sendFile(path.join(__dirname, "static", "sezona.html"));
});

app.get("/admin/cenovnik", authToken, (req, res) => {
  res.sendFile(path.join(__dirname, "static", "cenovnik.html"));
});

app.get("/admin/racun", authToken, (req, res) => {
  res.sendFile(path.join(__dirname, "static", "racun.html"));
});

app.get("/admin/trajanje", authToken, (req, res) => {
  res.sendFile(path.join(__dirname, "static", "trajanje.html"));
});

app.listen({ port: 8000 }, async () => {
  // await sequelize.authenticate();
  console.log("APP started on port 8000");
});
