"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tabel_jabatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.tabel_departement, {
        as: "departement",
        foreignKey: {
          name: "id_departement",
        },
      });
      this.hasMany(models.tabel_karyawan, {
        as: "karyawan",
        foreignKey: {
          name: "id",
        },
      });
    }
  }
  tabel_jabatan.init(
    {
      id_departement: DataTypes.INTEGER,
      nama_jabatan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tabel_jabatan",
    }
  );
  return tabel_jabatan;
};
