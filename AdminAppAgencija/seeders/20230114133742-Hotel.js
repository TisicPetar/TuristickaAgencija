"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Hotels", [
      { id: "193", ime: "Hajat", zvezdice: "5", destinacijaID: "1" },
      { id: "475", ime: "Krakovska noc", zvezdice: "3", destinacijaID: "2" },
      { id: "120", ime: "Light", zvezdice: "3", destinacijaID: "3" },
      { id: "57", ime: "Jonson", zvezdice: "4", destinacijaID: "6" },
      {
        id: "17",
        ime: "Seraton",
        zvezdice: "2",
        destinacijaID: "6",
      },
      { id: "34", ime: "Inter Kontinental", zvezdice: "5", destinacijaID: "1" },
      { id: "99", ime: "Maria Hilf", zvezdice: "4", destinacijaID: "7" },
      { id: "376", ime: "Palace", zvezdice: "3", destinacijaID: "7" },
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
