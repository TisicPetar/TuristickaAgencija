"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("Sezonas", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING,
          validate: {
            len: [2, 4],
          },
        },
        sezona: {
          type: Sequelize.STRING,
          validate: {
            min: 3,
            max: 15,
          },
          allowNull: false,
        },
        godinaID: {
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
      //   queryInterface.addConstraint("Sezonas", {
      //     fields: ["godinaID"],
      //     type: "foreign key",
      //     name: "godinaID",
      //     references: {
      //       //Required field
      //       table: "Godinas",
      //       field: "id",
      //     },
      //     onDelete: "cascade",
      //     onUpdate: "cascade",
      //   })
      // );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Sezonas");
  },
};
