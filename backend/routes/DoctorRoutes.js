const express = require("express");

const router = express.Router();

const protectDoctor = require("../middleware/doctorAuthMiddleware");

const {
  registerDoctor,
  loginDoctor,
  getDoctors,
  getDoctorById,
} = require("../controllers/DoctorController");


router.post("/register", registerDoctor);

router.post("/login", loginDoctor);

router.get("/", getDoctors);

// Keep /profile BEFORE /:id
router.get(
  "/profile",
  protectDoctor,
  (req, res) => {
    res.status(200).json({
      message: "Doctor profile accessed successfully",
      doctor: req.doctor,
    });
  }
);

// Get doctor by MongoDB ID
router.get("/:id", getDoctorById);


module.exports = router;