const User = require("../models/User");
const DoctorProfile = require("../models/DoctorProfile");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerDoctor = async (req, res) => {
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

    // Create doctor as a User
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "doctor",
    });

    // Create doctor profile
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
      message: "Doctor registered successfully.",
      doctor: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileId: doctorProfile._id,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide email and password.",
      });
    }

    const user = await User.findOne({ email });

    if (!user || user.role !== "doctor") {
      return res.status(400).json({
        message: "Invalid doctor credentials.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid doctor credentials.",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("doctorToken", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Doctor login successful",
      doctor: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
const getDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: "doctor" }).select("-password");

    const doctorsData = await Promise.all(
      doctors.map(async (doctor) => {
        const profile = await DoctorProfile.findOne({
          userId: doctor._id,
        });

        return {
          _id: doctor._id,
          name: doctor.name,
          email: doctor.email,
          role: doctor.role,
          speciality: profile?.speciality || "",
          experience: profile?.experience || "",
          hospital: profile?.hospital || "",
          qualification: profile?.qualification || "",
          timings: profile?.timings || "",
          image: profile?.image || "",
          about: profile?.about || "",
        };
      })
    );

    return res.status(200).json(doctorsData);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch doctors",
    });
  }
};
const getDoctorById = async (req, res) => {
  try {
    const doctor = await User.findOne({
      _id: req.params.id,
      role: "doctor",
    }).select("-password");

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    const profile = await DoctorProfile.findOne({
      userId: doctor._id,
    });

    return res.status(200).json({
      _id: doctor._id,
      name: doctor.name,
      email: doctor.email,
      role: doctor.role,
      speciality: profile?.speciality || "",
      experience: profile?.experience || "",
      hospital: profile?.hospital || "",
      qualification: profile?.qualification || "",
      timings: profile?.timings || "",
      image: profile?.image || "",
      about: profile?.about || "",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch doctor",
    });
  }
};
module.exports = {
  registerDoctor,loginDoctor,getDoctors,getDoctorById,
};