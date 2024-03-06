"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("Aranzmans", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          validate: {
            len: [1, 20],
          },
        },
        naziv: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        kolicina: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        hotelID: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        pansionID: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        trajanjeID: {
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
      //   queryInterface.addConstraint("Aranzmans", {
      //     fields: ["hotelID"],
      //     type: "foreign key",
      //     name: "hotelID",
      //     references: {
      //       //Required field
      //       table: "Hotels",
      //       field: "id",
      //     },
      //     onDelete: "cascade",
      //   })
      // )
      // .then(() =>
      //   queryInterface.addConstraint("Aranzmans", {
      //     fields: ["pansionID"],
      //     type: "foreign key",
      //     name: "pansionID",
      //     references: {
      //       //Required field
      //       table: "Pansions",
      //       field: "id",
      //     },
      //     onDelete: "cascade",
      //   })
      // );
    // .then(()=> queryInterface.addConstraint('Aranzmans',{
    //   fields:['trajanjeID'],
    //   type:'foreign key',
    //   name:'trajanjeID',
    //   references: { //Required field
    //     table: 'Trajanjes',
    //     field: 'id'
    //   },
    //   onDelete: 'cascade'
    // }
    // ))
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Aranzmans");
  },
};
