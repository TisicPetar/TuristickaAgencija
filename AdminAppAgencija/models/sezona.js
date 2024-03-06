"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sezona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Godina, Cenovnik }) {
      // define association here
      this.belongsTo(
        Godina,
        {
          foreignKey: "godinaID",
          as: "godina",
        },
        {
          onDelete: "cascade",
          hooks: true,
        }
      );
      this.hasMany(
        Cenovnik,
        {
          foreignKey: "sezonaID",
          as: "cenovnik",
        },
        {
          onDelete: "cascade",
          hooks: true,
        }
      );
    }
  }
  Sezona.init(
    {
      sezona: {
        type: DataTypes.STRING,
        validate: {
          min: 3,
          max: 15,
        },
        allowNull: false,
      },
      godinaID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sezona",
    }
  );
  return Sezona;
};
