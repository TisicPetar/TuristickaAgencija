const path = require("path");
const express = require("express");
const cors = require("cors");
const {
  sequelize,
  Hotel,
  Destinacija,
  Aranzman,
  Trajanje,
  Pansion,
  Cenovnik,
  Godina,
  Korisnik,
  Placanje,
  Racun,
  Sezona,
} = require("./models");

const { Server } = require('socket.io')
const http = require('http')
const app = express();
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    },
    allowEIO3: true
})

let corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

const dist= path.join(__dirname, './dist')
app.use('/', express.static(dist))

io.on('connection', socket => {
  socket.on('smanji', data => {
      Aranzman.findOne({
          where:{
            id: data.id
          }
      })
      .then(el => {
        el.kolicina = el.kolicina - 1;
        return el.save(); // Return the promise from save() to ensure proper chaining
      })
      .then(() => {
          // After saving, find all Aranzman and emit the updated rows
          return Aranzman.findAll();
      })
      .then(rows => {
          rows = rows.map(el => el.dataValues);
          socket.emit('vracen', rows);
      })
      .catch(error => {
          console.error("Error:", error);
      });
  })
})

app.use(express.json());
app.use(cors(corsOptions));

const aranzmanRoute = require("./routes/aranzmanRoute.js");
app.use("/admin/aranzman", aranzmanRoute);

const cenovnikRoute = require("./routes/cenovnikRoute.js");
app.use("/admin/cenovnik", cenovnikRoute);

const destinacijaRoute = require("./routes/destinacijaRoute.js");
app.use("/admin/destinacija", destinacijaRoute);

const godinaRoute = require("./routes/godinaRoute.js");
app.use("/admin/godina", godinaRoute);

const hotelRoute = require("./routes/hotelRoute.js");
app.use("/admin/hotel", hotelRoute);

const korisnikRoute = require("./routes/korisnikRoute.js");
app.use("/admin/korisnik", korisnikRoute);

const pansionRoute = require("./routes/pansionRoute.js");
app.use("/admin/pansion", pansionRoute);

const placanjeRoute = require("./routes/placanjeRoute.js");
app.use("/admin/placanje", placanjeRoute);

const racunRoute = require("./routes/racunRoute.js");
app.use("/admin/racun", racunRoute);

const sezonaRoute = require("./routes/sezonaRoute.js");
app.use("/admin/sezona", sezonaRoute);

const trajanjeRoute = require("./routes/trajanjeRoute.js");
// const exp = require("constants");
app.use("/admin/trajanje", trajanjeRoute);

// app.listen({ port: 7000 }, async () => {
//   console.log("REST started on port 7000");
// });

server.listen({port:process.env.PORT || 7000}),async ()=>{
  await sequelize.authenticate();
}