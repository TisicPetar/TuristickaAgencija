"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Pansions", [
      { id: "111", naziv: "polupansion", opis: "polupansion" },
      {
        id: "222",
        naziv: "pun pansion",
        opis: "pun pansion za potpuni ugodjaj",
      },
      { id: "333", naziv: "studentski", opis: "idealno za studente" },
      { id: "444", naziv: "allinclusive", opis: "sve mogucnosti dostupne" },
      { id: "777", naziv: "relax", opis: "preporuceno za penzionere" },
      { id: "888", naziv: "nista", opis: "bez ikakvih pogodnosti" },
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
