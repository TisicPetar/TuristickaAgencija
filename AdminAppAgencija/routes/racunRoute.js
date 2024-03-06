const { sequelize, Racun, Korisnik } = require("../models");
const express = require("express");

const route = express.Router();
route.use(express());
route.use(express.json());
route.use(express.urlencoded({ extended: true }));
require('dotenv').config()
const jtw = require('jsonwebtoken')

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null){
      res.sendStatus(401)
    }
    console.log("token:"+token);
    jtw.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if (err) return res.sendStatus(403)
        usercina = user
        console.log("AAAA: "+ user.id);
        next()
    })
}

route.get("/", authenticateToken, (req, res) => {
        Racun.findAll({
            where:{
                korisnikID: usercina.id
            }
        })
            .then(
                rows => {
                    rows = rows.map(el =>{
                        const { ...newObj} = el.dataValues
                        return newObj
                    })
                    res.json(rows)
                }
            )
            .catch(
                err => res.status(500).json(err)
            )
    });

    const cenovnikArray = []; cenovnikArray.push(1111); cenovnikArray.push(2222); cenovnikArray.push(3333); cenovnikArray.push(4444); cenovnikArray.push(5555); cenovnikArray.push(6666);cenovnikArray.push(7777);
    const placanjeArray = []; placanjeArray.push(1); placanjeArray.push(2);placanjeArray.push(3);placanjeArray.push(4);placanjeArray.push(5);
    const popustArray = []; popustArray.push(0); popustArray.push(5); popustArray.push(10); popustArray.push(0);
    function getRandomNumber() {
      const randomIndex = Math.floor(Math.random() * cenovnikArray.length);
      return cenovnikArray[randomIndex];
    }
    function getRandomNumber2() {
      const randomIndex = Math.floor(Math.random() * placanjeArray.length);
      return placanjeArray[randomIndex];
    }
    function getRandomNumber3() {
      const randomIndex = Math.floor(Math.random() * popustArray.length);
      return popustArray[randomIndex];
    }
route.post("/",authenticateToken ,async (req, res) => {
  try {
    let prom = await Racun.create({
      popust: getRandomNumber3(),
      korisnikID: usercina.id,
      cenovnikID: getRandomNumber(),
      placanjeID: getRandomNumber2() 
    });
    res.send(prom);
  } catch {
    res.status(500).json({ error: "Greska" });
  }
});

route.put("/:id", async (req, res) => {
  Racun.findOne({ where: { id: req.params.id } }).then((prom) => {
    prom.popust = req.body.popust;
    prom.korisnikID = req.body.korisnikID;
    prom.cenovnikID = req.body.cenovnikID;
    prom.placanjeID = req.body.placanjeID;

    prom
      .save()
      .then((prom) => res.json(prom))
      .catch((err) => res.status(500).json(err));
  });
});

route.delete("/:id", async (req, res) => {
  try {
    let prom = await Racun.findByPk(req.params.id);
    await prom.destroy();
    res.send(prom);
  } catch {
    res.status(500).json({ error: "Greska" });
  }
});

module.exports = route;
