"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Godinas", [
      { id: "2022", godina: "2022" },
      { id: "2021", godina: "2021" },
      { id: "2020", godina: "2020" },
      { id: "2019", godina: "2019" },
      { id: "2018", godina: "2018" },
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
