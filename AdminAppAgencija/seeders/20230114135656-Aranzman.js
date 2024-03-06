"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Aranzmans", [
      {
        id: "18273",
        naziv: "Nezaboravno leto",
        kolicina: "100",
        hotelID: "193",
        pansionID: "222",
        trajanjeID: "15",
      },
      {
        id: "18274",
        naziv: "Opustajuci",
        kolicina: "55",
        hotelID: "475",
        pansionID: "111",
        trajanjeID: "5",
      },
      {
        id: "18275",
        naziv: "Severna zima",
        kolicina: "250",
        hotelID: "120",
        pansionID: "333",
        trajanjeID: "10",
      },
      {
        id: "18276",
        naziv: "Bliski istok",
        kolicina: "84",
        hotelID: "17",
        pansionID: "777",
        trajanjeID: "10",
      },
      {
        id: "18277",
        naziv: "Evropa na dlanu",
        kolicina: "60",
        hotelID: "99",
        pansionID: "888",
        trajanjeID: "3",
      },
      {
        id: "18278",
        naziv: "Balkanska tura",
        kolicina: "70",
        hotelID: "34",
        pansionID: "222",
        trajanjeID: "7",
      },
      {
        id: "18279",
        naziv: "Studentko leto",
        kolicina: "80",
        hotelID: "376",
        pansionID: "888",
        trajanjeID: "7",
      },
      {
        id: "18280",
        naziv: "Zabava i opustanje",
        kolicina: "15",
        hotelID: "120",
        pansionID: "777",
        trajanjeID: "15",
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
