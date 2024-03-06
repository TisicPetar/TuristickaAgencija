"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Korisnik extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Racun }) {
      // define association here
      this.hasMany(
        Racun,
        {
          foreignKey: "korisnikID",
          as: "racun",
        },
        {
          onDelete: "cascade",
          hooks: true,
        }
      );
    }
  }
  Korisnik.init(
    {
      ime: {
        type: DataTypes.STRING,
        validate: {
          min: 3,
          max: 20,
        },
        allowNull: false,
      },
      prezime: {
        type: DataTypes.STRING,
        validate: {
          min: 3,
          max: 20,
        },
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        allowNull: false,
      },
      sifra: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      moderator: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Korisnik",
    }
  );
  return Korisnik;
};
