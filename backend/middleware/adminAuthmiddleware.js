const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protectAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
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

    // Find user
    const admin = await User.findById(
      decoded.id
    ).select("-password");

    // Check if user exists
    if (!admin) {
      return res.status(401).json({
        message: "User not found.",
      });
    }

    // Check admin role
    if (admin.role !== "admin") {
      return res.status(403).json({
        message: "Not authorized as admin.",
      });
    }

    // Store admin in request
    req.admin = admin;

    next();

  } catch (error) {
    console.log("Admin auth error:", error.message);

    return res.status(401).json({
      message: "Invalid or expired token.",
    });
  }
};

module.exports = protectAdmin;