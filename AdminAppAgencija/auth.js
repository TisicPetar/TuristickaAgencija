const express = require("express");
const { sequelize, Korisnik } = require("./models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

//dodaje novog korisnika i vraca njegov jwt
app.post("/register", (req, res) => {
  const obj = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    email: req.body.email,
    sifra: bcrypt.hashSync(req.body.sifra, 10),
    moderator: false,
    admin: false,
  };

  Korisnik.create(obj)
    .then((rows) => {
      const korisnik = {
        id: rows.id,
        ime: rows.ime,
        admin: rows.admin,
        moderator: rows.moderator,
      };
      const token = jwt.sign(korisnik, process.env.ACCESS_TOKEN_SECRET);
      res.json({ token: token });
    })
    .catch((err) => res.status(500).json(err));
});

//od kredencijala pravi jwt token za postojeceg korisnika
app.post("/login", (req, res) => {
  Korisnik.findOne({ 
    where: {
      ime: req.body.ime,
    }
  })
    .then((usr) => {
      if (bcrypt.compareSync(req.body.sifra, usr.sifra)) {
        const korisnik = {
          id: usr.id,
          ime: usr.ime,
          admin: usr.admin,
          moderator: usr.moderator,
        };
        // console.log("ID:"+korisnik.id+" IME:"+korisnik.ime+" ADMIN:"+korisnik.admin+" MODERATOR:"+korisnik.moderator);
        const token = jwt.sign(korisnik, process.env.ACCESS_TOKEN_SECRET);
        res.json({ token: token });
      } else {
        res.status(400).json({msg:"neispravna sifra"});
      }
    })
    .catch((err) => res.status(500).json(err));
});

app.listen({ port: 8080 }, async () => {
  console.log("AUTH started on port 8080");
});
