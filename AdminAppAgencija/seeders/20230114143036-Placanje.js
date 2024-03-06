"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Placanjes", [
      { id: "1", nacin: "kartica" },
      { id: "2", nacin: "gotovina" },
      { id: "3", nacin: "rate" },
      { id: "4", nacin: "kartica" },
      { id: "5", nacin: "mix" },
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
