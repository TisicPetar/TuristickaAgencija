const { sequelize, Korisnik } = require("../models");
const express = require("express");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const route = express.Router();
route.use(express());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));
/*
function authToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).json("No access");
  //jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, korisnik) => {
  // if (err) return res.status(403).json({ msg: err });

  // req.korisnik = korisnik;

  next();
  //});
}
route.use(authToken);
*/

route.get("/", async (req, res) => {
  try {
    const prom = await Korisnik.findAll({
      attributes: [
        "id",
        "ime",
        "prezime",
        "email",
        "sifra",
        "moderator",
        "admin",
      ],
    });
    res.json(prom);
  } catch {
    console.log(err);
    res.status(500).json({ error: "Greska" });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const prom = await Korisnik.findByPk(req.params.id);
    return res.json(prom);
  } catch {
    res.status(500).json({ error: "Greska" });
  }
});

route.post("/", async (req, res) => {
  const provera = Joi.object().keys({
    ime: Joi.string().min(3).max(15).required(),
    prezime: Joi.string().min(3).max(16).required(),
    email: Joi.string().trim().email().required(),
    sifra: Joi.string().min(5).max(15).required(),
  });

  const validator = provera.validate(req.body);
  if (validator.error) {
    res.status(422).json({ msg: validator.error.message });
  } else {
    try {
      let prom = await Korisnik.create(req.body);
      res.send(prom);
    } catch {
      res.status(500).json({ error: "Greska" });
    }
  }
});

route.put("/:id", async (req, res) => {
  Korisnik.findOne({ where: { id: req.params.id } }).then((prom) => {
    prom.ime = req.body.ime;
    prom.prezime = req.body.prezime;
    prom.email = req.body.email;
    prom.sifra = req.body.sifra;
    if (req.body.telefon) prom.telefon = req.body.telefon;

    prom
      .save()
      .then((prom) => res.json(prom))
      .catch((err) => res.status(500).json(err));
  });
});

route.delete("/:id", async (req, res) => {
  try {
    let prom = await Korisnik.findByPk(req.params.id);
    await prom.destroy();
    res.send(prom);
  } catch {
    res.status(500).json({ error: "Greska" });
  }
});

module.exports = route;
