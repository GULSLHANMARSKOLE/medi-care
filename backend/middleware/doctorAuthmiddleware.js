const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protectDoctor = async (req, res, next) => {
  try {
    console.log("========== DOCTOR AUTH ==========");

    console.log("Cookies received:", req.cookies);

    const token = req.cookies.token || req.cookies.doctorToken;

    console.log("Token received:", token);

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        message: "Login required.",
      });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("Decoded token:", decoded);

    const doctorId = decoded.id || decoded.userId;
    const doctor = await User.findById(doctorId).select("-password");

    // Check if user exists
    if (!doctor) {
      return res.status(401).json({
        message: "User not found.",
      });
    }

    // Check doctor role
    if (doctor.role !== "doctor") {
      return res.status(403).json({
        message: "Not authorized as a doctor.",
      });
    }

    // Store doctor in request
    req.doctor = doctor;

    console.log(
      "Doctor authenticated:",
      doctor.email
    );

    next();

  } catch (error) {
    console.log(
      "Doctor auth error:",
      error.message
    );

    return res.status(401).json({
      message: "Invalid or expired token.",
    });
  }
};

module.exports = protectDoctor;
