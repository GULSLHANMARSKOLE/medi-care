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
// ================= GET PATIENT COUNT =================
const getPatientCount = async (req, res) => {
  try {
    const count = await User.countDocuments({
      role: "patient",
    });

    return res.status(200).json({
      count,
    });
  } catch (error) {
    console.error("Get patient count error:", error);

    return res.status(500).json({
      message: "Failed to get patient count",
    });
  }
};
// ================= UPDATE DOCTOR IMAGE =================
const updateDoctorImage = async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({
        message: "Image path is required.",
      });
    }

    const doctorProfile = await DoctorProfile.findOne({
      userId: req.params.id,
    });

    if (!doctorProfile) {
      return res.status(404).json({
        message: "Doctor profile not found.",
      });
    }

    doctorProfile.image = image;

    await doctorProfile.save();

    return res.status(200).json({
      message: "Doctor image updated successfully.",
      image: doctorProfile.image,
    });
  } catch (error) {
    console.error("Update doctor image error:", error);

    return res.status(500).json({
      message: "Failed to update doctor image.",
    });
  }
};
module.exports = {
  createDoctor,
  getPatientCount,
  updateDoctorImage,
};