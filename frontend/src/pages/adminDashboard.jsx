import { useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    speciality: "",
    experience: "",
    hospital: "",
    qualification: "",
    timings: "",
    image: "",
    about: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/doctors",
        formData,
        {
          withCredentials: true,
        }
      );

      setMessage(response.data.message);

      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
        speciality: "",
        experience: "",
        hospital: "",
        qualification: "",
        timings: "",
        image: "",
        about: "",
      });

    } catch (error) {
      console.error("Create doctor error:", error);

      setError(
        error.response?.data?.message ||
        "Failed to create doctor."
      );
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-950 px-6 py-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          Admin Dashboard
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Add and manage doctors in Medicare.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Add New Doctor
          </h2>

          {message && (
            <div className="mb-5 p-3 rounded-lg bg-green-100 text-green-700">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-5 p-3 rounded-lg bg-red-100 text-red-700">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >

            {/* Name */}
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Doctor Name"
              className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Doctor Email"
              className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Doctor Password"
              className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />

            {/* Speciality */}
            <input
              name="speciality"
              value={formData.speciality}
              onChange={handleChange}
              placeholder="Speciality"
              className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />

            {/* Experience */}
            <input
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience"
              className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />

            {/* Hospital */}
            <input
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              placeholder="Hospital"
              className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />

            {/* Qualification */}
            <input
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="Qualification"
              className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />

            {/* Timings */}
            <input
              name="timings"
              value={formData.timings}
              onChange={handleChange}
              placeholder="Timings"
              className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />

            {/* Image */}
            <input
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white md:col-span-2"
            />

            {/* About */}
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="About Doctor"
              rows="4"
              className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white md:col-span-2"
            />

            {/* Submit */}
            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Add Doctor
            </button>

          </form>

        </div>
      </div>

    </section>
  );
}

export default AdminDashboard;