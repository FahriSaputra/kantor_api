const express = require("express");
const router = express.Router();

const {
  getAllDepartement,
  createDepartement,
  deleteDepartement,
  updateDepartement,
} = require("../src/controllers/departementController");

const {
  getAllJabatan,
  createJabatan,
  deleteJabatan,
  updateJabatan,
} = require("../src/controllers/jabatanController");
const {
  getAllKaryawan,
  createKaryawan,
  deleteKaryawan,
  updateKaryawan,
  getKaryawanById,
} = require("../src/controllers/karyawanController");

/* GET home page. */
router.get("/departements", getAllDepartement);
router.post("/departement", createDepartement);
router.delete("/departements/:id", deleteDepartement);
router.patch("/departements/:id", updateDepartement);

router.get("/jabatan", getAllJabatan);
router.post("/jabatan", createJabatan);
router.delete("/jabatan/:id", deleteJabatan);
router.patch("/jabatan/:id", updateJabatan);

router.get("/karyawan", getAllKaryawan);
router.get("/karyawan/:id", getKaryawanById);
router.post("/karyawan", createKaryawan);
router.delete("/karyawan/:id", deleteKaryawan);
router.patch("/karyawan/:id", updateKaryawan);

module.exports = router;
