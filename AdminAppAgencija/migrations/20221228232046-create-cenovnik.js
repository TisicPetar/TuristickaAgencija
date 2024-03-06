"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("Cenovniks", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        cena: {
          type: Sequelize.INTEGER,
        },
        sezonaID: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        aranzmanID: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        createdAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      })
      // .then(() =>
      //   queryInterface.addConstraint("Cenovniks", {
      //     fields: ["sezonaID"],
      //     type: "foreign key",
      //     name: "sezonaID",
      //     references: {
      //       //Required field
      //       table: "Sezonas",
      //       field: "id",
      //     },
      //     onDelete: "cascade",
      //     onUpdate: "cascade",
      //   })
      // )
      // .then(() =>
      //   queryInterface.addConstraint("Cenovniks", {
      //     fields: ["aranzmanID"],
      //     type: "foreign key",
      //     name: "aranzmanID",
      //     references: {
      //       //Required field
      //       table: "Aranzmans",
      //       field: "id",
      //     },
      //     onDelete: "cascade",
      //     onUpdate: "cascade",
      //   })
      // );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cenovniks");
  },
};
