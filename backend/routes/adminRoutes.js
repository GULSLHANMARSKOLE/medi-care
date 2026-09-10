const express = require("express");

const router = express.Router();

const protectAdmin = require("../middleware/adminAuthmiddleware");

const {
  createDoctor,
} = require("../controllers/adminController");

// Create doctor
router.post(
  "/doctors",
  protectAdmin,
  createDoctor
);

module.exports = router;