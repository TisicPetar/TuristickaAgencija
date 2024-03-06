"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Korisniks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        validate: {
          min: 10,
          max: 10,
        },
      },
      ime: {
        type: Sequelize.STRING,
        validate: {
          min: 3,
          max: 20,
        },
        allowNull: false,
      },
      prezime: {
        type: Sequelize.STRING,
        validate: {
          min: 3,
          max: 20,
        },
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
        allowNull: false,
      },
      sifra: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      moderator: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Korisniks");
  },
};
