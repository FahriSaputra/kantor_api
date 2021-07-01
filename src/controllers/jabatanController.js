const {
  tabel_jabatan: Jabatan,
  tabel_departement: Departement,
} = require("../../models");

exports.getAllJabatan = async (req, res) => {
  try {
    const response = await Jabatan.findAll({
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

exports.createJabatan = async (req, res) => {
  try {
    const response = await Jabatan.create({ ...req.body });
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

exports.deleteJabatan = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Jabatan.destroy({ where: { id } });

    res.status(200).send({ status: "Success" });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message,
    });
  }
};

exports.updateJabatan = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Jabatan.update({ ...req.body }, { where: { id } });

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
