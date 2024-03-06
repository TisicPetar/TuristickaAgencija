const { sequelize, Aranzman } = require("../models");
const express = require("express");

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get("/", async (req, res) => {
  try {
    const prom = await Aranzman.findAll({
      attributes: ["id", "naziv", "kolicina","hotelID","pansionID","trajanjeID"],
    });
    res.json(prom);
  } catch {
    console.log(err);
    res.status(500).json({ error: "Greska" });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const prom = await Aranzman.findByPk(req.params.id);
    return res.json(prom);
  } catch {
    res.status(500).json({ error: "Greska" });
  }
});

route.post("/", async (req, res) => {
  try {
    let prom = await Aranzman.create(req.body);
    res.send(prom);
  } catch {
    res.status(500).json({ error: "Greska" });
  }
});

route.put("/:id", async (req, res) => {
  Aranzman.findOne({ where: { id: req.params.id } }).then((prom) => {
    prom.naziv = req.body.naziv;
    prom.kolicina = req.body.kolicina;
    prom.hotelID = req.body.hotelID;
    prom.pansionID = req.body.pansionID;
    prom.trajanjeID = req.body.trajanjeID;

    prom
      .save()
      .then((prom) => res.json(prom))
      .catch((err) => res.status(500).json(err));
  });
});

route.delete("/:id", async (req, res) => {
  try {
    let prom = await Aranzman.findByPk(req.params.id);
    await prom.destroy();
    res.send(prom);
  } catch {
    res.status(500).json({ error: "Greska" });
  }
});

module.exports = route;
