"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cenovnik extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sezona, Aranzman, Racun }) {
      //define association here
      this.belongsTo(Sezona, {
        foreignKey: "sezonaID",
        as: "sezona",
      });
      this.belongsTo(Aranzman, {
        foreignKey: "aranzmanID",
        as: "aranzman",
      });
      this.hasMany(Racun, {
        foreignKey: "cenovnikID",
        as: "racun",
      });
    }
  }
  Cenovnik.init(
    {
      cena: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sezonaID: DataTypes.INTEGER,
      aranzmanID: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Cenovnik",
    }
  );
  return Cenovnik;
};
