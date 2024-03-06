"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Godina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sezona }) {
      // define association here
      this.hasMany(
        Sezona,
        {
          foreignKey: "godinaID",
          as: "sezona",
        },
        {
          onDelete: "cascade",
          hooks: true,
        }
      );
    }
  }
  Godina.init(
    {
      godina: {
        type: DataTypes.INTEGER,
        validate: {
          min: 2015,
          max: 2025,
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Godina",
    }
  );
  return Godina;
};
