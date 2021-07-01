"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tabel_departement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.tabel_jabatan, {
        as: "jabatans",
        foreignKey: {
          name: "id_departement",
        },
      });
    }
  }
  tabel_departement.init(
    {
      nama_departement: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tabel_departement",
    }
  );
  return tabel_departement;
};
