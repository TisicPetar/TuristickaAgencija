"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Aranzman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Hotel, Pansion, Cenovnik }) {
      this.belongsTo(Hotel, {
        foreignKey: "hotelID",
        as: "hotel",
      });
      this.belongsTo(Pansion, {
        foreignKey: "pansionID",
        as: "pansion",
      });
      this.hasMany(
        Cenovnik,
        {
          foreignKey: "aranzmanID",
          as: "cenovnik",
        },
        {
          onDelete: "cascade",
          hooks: true,
        }
      );
    }
  }
  Aranzman.init(
    {
      naziv: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kolicina: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      hotelID: DataTypes.INTEGER,
      pansionID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Aranzman",
    }
  );
  return Aranzman;
};
