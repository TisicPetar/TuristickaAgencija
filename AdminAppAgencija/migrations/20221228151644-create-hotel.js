"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("Hotels", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        ime: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        zvezdice: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        destinacijaID: {
          type: Sequelize.INTEGER,
          allowNull: false,
          /*references:{
          model: 'Destinacija',
          key: 'id'
        }*/
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
      //   queryInterface.addConstraint("Hotels", {
      //     fields: ["destinacijaID"],
      //     type: "foreign key",
      //     name: "destinacijaID",
      //     references: {
      //       //Required field
      //       table: "Destinacijas",
      //       field: "id",
      //     },
      //     onDelete: "cascade",
      //     onUpdate: "cascade",
      //   })
      // );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Hotels");
  },
};
