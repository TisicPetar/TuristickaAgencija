"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Destinacija, Aranzman }) {
      // define association here
      this.belongsTo(Destinacija, {
        foreignKey: "destinacijaID",
        as: "destinacija",
      });
      this.hasMany(
        Aranzman,
        {
          foreignKey: "hotelID",
          as: "aranzman",
        },
        {
          onDelete: "cascade",
          hooks: true,
        }
      );
    }
  }
  Hotel.init(
    {
      ime: DataTypes.STRING,
      zvezdice: DataTypes.INTEGER,
      destinacijaID:DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Hotel",
    }
  );
  return Hotel;
};
