"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Cenovniks", [
      { id: "1111", cena: "15000", sezonaID: "01", aranzmanID: "18273" },
      { id: "2222", cena: "22000", sezonaID: "01", aranzmanID: "18274" },
      { id: "3333", cena: "30000", sezonaID: "02", aranzmanID: "18275" },
      { id: "4444", cena: "21000", sezonaID: "02", aranzmanID: "18276" },
      { id: "5555", cena: "35000", sezonaID: "03", aranzmanID: "18277" },
      { id: "6666", cena: "25000", sezonaID: "03", aranzmanID: "18278" },
      { id: "7777", cena: "37000", sezonaID: "04", aranzmanID: "18279" },
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
