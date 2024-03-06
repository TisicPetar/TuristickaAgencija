"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("Racuns", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        popust: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        korisnikID: {
          type: Sequelize.INTEGER,
        },
        cenovnikID: {
          type: Sequelize.INTEGER,
        },
        placanjeID: {
          type: Sequelize.STRING,
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
      //   queryInterface.addConstraint("Racuns", {
      //     fields: ["korisnikID"],
      //     type: "foreign key",
      //     name: "korisnikID",
      //     references: {
      //       //Required field
      //       table: "Korisniks",
      //       field: "id",
      //     },
      //     onDelete: "cascade",
      //     onUpdate: "cascade",
      //   })
      // )
      // .then(() =>
      //   queryInterface.addConstraint("Racuns", {
      //     fields: ["cenovnikID"],
      //     type: "foreign key",
      //     name: "cenovnikID",
      //     references: {
      //       //Required field
      //       table: "Cenovniks",
      //       field: "id",
      //     },
      //     onDelete: "cascade",
      //     onUpdate: "cascade",
      //   })
      // )
      // .then(() =>
      //   queryInterface.addConstraint("Racuns", {
      //     fields: ["placanjeID"],
      //     type: "foreign key",
      //     name: "placanjeID",
      //     references: {
      //       //Required field
      //       table: "Placanjes",
      //       field: "id",
      //     },
      //     onDelete: "cascade",
      //     onUpdate: "cascade",
      //   })
      // );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Racuns");
  },
};
