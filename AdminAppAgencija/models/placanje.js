"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Placanje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Racun }) {
      this.hasMany(
        Racun,
        {
          foreignKey: "placanjeID",
          as: "racun",
        },
        {
          onDelete: "cascade",
          hooks: true,
        }
      );
    }
  }
  Placanje.init(
    {
      nacin: {
        type: DataTypes.STRING,
        validate: {
          min: 3,
          max: 15,
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Placanje",
    }
  );
  return Placanje;
};
