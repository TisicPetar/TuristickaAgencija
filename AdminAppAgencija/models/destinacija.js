"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Destinacija extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Hotel }) {
      // define association here
      this.hasMany(
        Hotel,
        {
          foreignKey: "destinacijaID",
          as: "hotel",
        },
        {
          onDelete: "cascade",
          hooks: true,
        }
      );
    }
  }
  Destinacija.init(
    {
      grad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      drzava: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Destinacija",
    }
  );
  return Destinacija;
};
