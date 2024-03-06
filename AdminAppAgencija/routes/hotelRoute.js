const { sequelize, Hotel } = require("../models");
const express = require("express");

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get("/", async (req, res) => {
  try {
    const prom = await Hotel.findAll({
      attributes: ["id", "ime", "zvezdice", "destinacijaID"],
    });
    res.json(prom);
  } catch {
    console.log(err);
    res.status(500).json({ error: "Greska" });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const prom = await Hotel.findByPk(req.params.id);
    return res.json(prom);
  } catch {
    res.status(500).json({ error: "Greska" });
  }
});

route.post("/", async (req, res) => {
  try {
    let prom = await Hotel.create(req.body);
    res.send(prom);
  } catch {
    res.status(500).json({ error: "Greska" });
  }
});

route.put("/:id", async (req, res) => {
  Hotel.findOne({ where: { id: req.params.id } }).then((prom) => {
    

    prom.ime = req.body.ime;
    prom.zvezdice = req.body.zvezdice;
    prom.destinacijaID = req.body.destinacijaID;

    prom
      .save()
      .then((prom) => res.json(prom))
      .catch((err) => res.status(500).json(err));
  });
});

route.delete("/:id", async (req, res) => {
  try {
    let prom = await Hotel.findByPk(req.params.id);
    await prom.destroy();
    res.send(prom);
  } catch {
    res.status(500).json({ error: "Greska" });
  }
});

module.exports = route;
