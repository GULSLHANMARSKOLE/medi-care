const User = require("../models/User");
const DoctorProfile = require("../models/DoctorProfile");
const bcrypt = require("bcryptjs");

// ================= CREATE DOCTOR =================
const createDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      experience,
      hospital,
      qualification,
      timings,
      image,
      about,
    } = req.body;

    // Check required fields
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !experience ||
      !hospital ||
      !qualification ||
      !timings
    ) {
      return res.status(400).json({
        message: "Please provide all required fields.",
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create doctor User
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "doctor",
    });

    // Create Doctor Profile
    const doctorProfile = await DoctorProfile.create({
      userId: user._id,
      speciality,
      experience,
      hospital,
      qualification,
      timings,
      image: image || "",
      about: about || "",
    });

    return res.status(201).json({
      message: "Doctor created successfully.",
      doctor: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileId: doctorProfile._id,
      },
    });

  } catch (error) {
    console.error("Create doctor error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createDoctor,
};