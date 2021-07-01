const {
  tabel_departement: Departements,
  tabel_jabatan: Jabatan,
} = require("../../models");

exports.getAllDepartement = async (req, res) => {
  try {
    const response = await Departements.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({ status: "Success", data: response });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message,
    });
  }
};

exports.createDepartement = async (req, res) => {
  try {
    const { nama_departement } = req.body;
    const response = await Departements.create({ nama_departement });
    res.status(201).send({ status: "Success", data: response });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message,
    });
  }
};

exports.deleteDepartement = async (req, res) => {
  try {
    const { id } = req.params;

    await Departements.destroy({ where: { id } });

    res.status(200).send({ status: "Success" });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message,
    });
  }
};

exports.updateDepartement = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Departements.update(
      { ...req.body },
      { where: { id } }
    );

    if (!update[0]) {
      res.send({
        status: "Failed to update",
      });
    }

    res.status(200).send({ status: "Success", data: update });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message,
    });
  }
};
