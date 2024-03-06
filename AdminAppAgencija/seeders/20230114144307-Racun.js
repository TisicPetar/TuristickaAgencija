"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Racuns", [
      {
        id: "991",
        popust: "10",
        korisnikID: "4",
        cenovnikID: "1111",
        placanjeID: "1",
      },
      {
        id: "992",
        popust: "10",
        korisnikID: "5",
        cenovnikID: "1111",
        placanjeID: "1",
      },
      {
        id: "993",
        popust: "15",
        korisnikID: "1",
        cenovnikID: "2222",
        placanjeID: "2",
      },
      {
        id: "995",
        popust: "5",
        korisnikID: "4",
        cenovnikID: "4444",
        placanjeID: "3",
      },
      {
        id: "997",
        popust: "0",
        korisnikID: "5",
        cenovnikID: "5555",
        placanjeID: "5",
      },
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
