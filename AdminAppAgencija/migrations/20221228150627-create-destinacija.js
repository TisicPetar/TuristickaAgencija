"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Destinacijas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      grad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      drzava: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
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
    await queryInterface.dropTable("Destinacijas");
  },
};
