"use strict";
const { Model, OptimisticLockError } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pansion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Aranzman }) {
      // define association here
      this.hasMany(
        Aranzman,
        {
          foreignKey: "pansionID",
          as: "aranzman",
        },
        {
          onDelete: "cascade",
          hooks: true,
        }
      );
    }
  }
  Pansion.init(
    {
      naziv: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      opis: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Pansion",
    }
  );
  return Pansion;
};
