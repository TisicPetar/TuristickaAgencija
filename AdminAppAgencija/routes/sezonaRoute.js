const { sequelize, Sezona } = require("../models");
const express = require("express");

const route = express.Router();
route.use(express());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get("/", async (req, res) => {
  try {
    const prom = await Sezona.findAll({
      attributes: ["id", "sezona", "godinaID"],
    });
    res.json(prom);
  } catch {
    console.log(err);
    res.status(500).json({ error: "Greska", data: err });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const prom = await Sezona.findByPk(req.params.id);
    return res.json(prom);
  } catch {
    res.status(500).json({ error: "Greska"});
  }
});

route.post("/", async (req, res) => {
  try {
    let prom = await Sezona.create(req.body);
    res.send(prom);
  } catch {
    res.status(500).json({ error: "Greska"});
  }
});

route.put("/:id", async (req, res) => {
  Sezona.findOne({ where: { id: req.params.id } }).then((prom) => {
    prom.sezona = req.body.sezona;
    prom.godinaID = req.body.godinaID;

    prom
      .save()
      .then((prom) => res.json(prom))
      .catch((err) => res.status(500).json(err));
  });
});

route.delete("/:id", async (req, res) => {
  try {
    let prom = await Sezona.findByPk(req.params.id);
    await prom.destroy();
    res.send(prom);
  } catch {
    res.status(500).json({ error: "Greska"});
  }
});

module.exports = route;
