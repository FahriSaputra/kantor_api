const {
  tabel_karyawan: Karyawan,
  tabel_jabatan: Jabatan,
  tabel_departement: Departement,
} = require("../../models");

exports.getAllKaryawan = async (req, res) => {
  try {
    const response = await Karyawan.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Jabatan,
        as: "jabatan",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: Departement,
          as: "departement",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      },
    });

    console.log(response);
    res.status(200).send({ status: "Success", data: response });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message,
    });
  }
};

exports.getKaryawanById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Karyawan.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Jabatan,
        as: "jabatan",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: Departement,
          as: "departement",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      },
    });

    console.log(response);
    res.status(200).send({ status: "Success", data: response });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message,
    });
  }
};

exports.createKaryawan = async (req, res) => {
  try {
    const response = await Karyawan.create({ ...req.body });
    if (!response) {
      res.send({
        status: "Failed to create",
      });
    }
    res.status(201).send({ status: "Success", data: response });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message,
    });
  }
};
exports.deleteKaryawan = async (req, res) => {
  try {
    const { id } = req.params;
    await Karyawan.destroy({ where: { id } });

    res.status(200).send({ status: "Success" });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message,
    });
  }
};

exports.updateKaryawan = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Karyawan.update({ ...req.body }, { where: { id } });

    if (!update[0]) {
      res.send({
        status: "Failed to update",
      });
    }

    res.status(200).send({ status: "Success" });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message,
    });
  }
};
