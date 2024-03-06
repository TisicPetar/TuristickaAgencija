"use strict";
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Hash passwords
    const hashedPassword1 = await bcrypt.hash("admin", 10);
    const hashedPassword2 = await bcrypt.hash("peric", 10);
    const hashedPassword3 = await bcrypt.hash("markovic", 10);
    const hashedPassword4 = await bcrypt.hash("katic", 10);
    const hashedPassword5 = await bcrypt.hash("markovic", 10);

    await queryInterface.bulkInsert("Korisniks", [
      {
        id: "1",
        ime: "petar",
        prezime: "tisic",
        email: "ptisic@raf.rs",
        sifra: hashedPassword1,
        admin: true,
        moderator: false,
      },
      {
        id: "2",
        ime: "pera",
        prezime: "peric",
        email: "pera@gmail.com",
        sifra: hashedPassword2,
        admin: false,
        moderator: true,
      },
      {
        id: "3",
        ime: "marko",
        prezime: "markovic",
        email: "marko@gmail.com",
        sifra: hashedPassword3,
        admin: false,
        moderator: true,
      },
      {
        id: "4",
        ime: "katarina",
        prezime: "katic",
        email: "katarina@gmail.com",
        sifra: hashedPassword4,
        admin: false,
        moderator: false,
      },
      {
        id: "5",
        ime: "marija",
        prezime: "markovic",
        email: "marija@gmail.com",
        sifra: hashedPassword5,
        admin: false,
        moderator: false,
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
