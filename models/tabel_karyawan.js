"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tabel_karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.tabel_jabatan, {
        as: "jabatan",
        foreignKey: "id_jabatan",
      });
    }
  }
  tabel_karyawan.init(
    {
      name: DataTypes.STRING,
      id_jabatan: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      gender: DataTypes.ENUM(["L", "P"]),
      tanggal_lahir: DataTypes.DATE,
      alamat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tabel_karyawan",
    }
  );
  return tabel_karyawan;
};
