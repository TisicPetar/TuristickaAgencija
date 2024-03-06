"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Destinacijas", [
      { id: "1", grad: "Berlin", drzava: "Nemacka" },
      { id: "2", grad: "Krakov", drzava: "Poljska" },
      { id: "3", grad: "Pariz", drzava: "Francuska" },
      { id: "4", grad: "Vankuver", drzava: "Kanada" },
      { id: "5", grad: "Buenos Aires", drzava: "Argentina" },
      { id: "6", grad: "Istambul", drzava: "Turska" },
      { id: "7", grad: "Bec", drzava: "Austrija" },
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
