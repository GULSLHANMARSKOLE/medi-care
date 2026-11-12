const express = require("express");

const router = express.Router();

const protectAdmin = require("../middleware/adminAuthmiddleware");

const {
  createDoctor,
  getPatientCount,
  updateDoctorImage,
} = require("../controllers/AdminController");

// Create doctor
router.post(
  "/doctors",
  protectAdmin,
  createDoctor
);
router.get(
  "/patients/count",
  protectAdmin,
  getPatientCount
);
router.patch(
  "/doctors/:id/image",
  protectAdmin,
  updateDoctorImage
);

module.exports = router;