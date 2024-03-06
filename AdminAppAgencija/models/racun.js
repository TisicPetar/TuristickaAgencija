"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Racun extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Korisnik, Cenovnik, Placanje }) {
      // define association here
      this.belongsTo(Korisnik, {
        foreignKey: "korisnikID",
        as: "korisnik",
      });

      this.belongsTo(Cenovnik, {
        foreignKey: "cenovnikID",
        as: "cenovnik",
      });

      this.belongsTo(Placanje, {
        foreignKey: "placanjeID",
        as: "placanje",
      });
    }
  }
  Racun.init(
    {
      popust: DataTypes.INTEGER,
      korisnikID: DataTypes.INTEGER,
      cenovnikID: DataTypes.INTEGER,
      placanjeID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Racun",
    }
  );
  return Racun;
};
