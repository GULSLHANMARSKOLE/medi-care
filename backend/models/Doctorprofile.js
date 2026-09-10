const mongoose = require("mongoose");

const doctorProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    speciality: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    hospital: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    timings: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    about: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DoctorProfile", doctorProfileSchema);