"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Sezonas", [
      { id: "1", sezona: "Prolece", godinaID: "2022" },
      { id: "2", sezona: "Leto", godinaID: "2022" },
      { id: "3", sezona: "Jesen", godinaID: "2022" },
      { id: "4", sezona: "Zima", godinaID: "2022" },
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
