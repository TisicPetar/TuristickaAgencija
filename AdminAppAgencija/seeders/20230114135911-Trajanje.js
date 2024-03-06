"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Trajanjes", [
      { id: "5", dani: "5" },
      { id: "7", dani: "7" },
      { id: "10", dani: "10" },
      { id: "15", dani: "15" },
      { id: "3", dani: "3" },
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
