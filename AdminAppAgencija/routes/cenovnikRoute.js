const { sequelize, Cenovnik } = require("../models");
const express = require("express");

const route = express.Router();
route.use(express());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get("/", async (req, res) => {
  try {
    const prom = await Cenovnik.findAll({
      attributes: ["id","cena", "sezonaID", "aranzmanID"],
    });
    res.json(prom);
  } catch {
    
    res.status(500).json({ error: "Greska" });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const prom = await Cenovnik.findByPk(req.params.id);
    return res.json(prom);
  } catch {
    res.status(500).json({ error: "Greska" });
  }
});

route.post("/", async (req, res) => {
  try {
    let prom = await Cenovnik.create(req.body);
    res.send(prom);
  } catch {
    res.status(500).json({ error: "Greska"});
  }
});

route.put("/:id", async (req, res) => {
  Cenovnik.findOne({ where: { id: req.params.id } }).then((prom) => {
    prom.cena = req.body.cena;
    prom.sezonaID = req.body.sezonaID;
    prom.aranzmanID = req.body.aranzmanID;

    prom
      .save()
      .then((prom) => res.json(prom))
      .catch((err) => res.status(500).json(err));
  });
});

route.delete("/:id", async (req, res) => {
  try {
    let prom = await Cenovnik.findByPk(req.params.id);
    await prom.destroy();
    res.send(prom);
  } catch {
    res.status(500).json({ error: "Greska"});
  }
});

module.exports = route;
