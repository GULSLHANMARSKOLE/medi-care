import { useEffect, useState } from "react";
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

  const [doctors, setDoctors] = useState([]);
  const [loadingDoctors, setLoadingDoctors] = useState(true);
  const [patientCount, setPatientCount] = useState(0);
  const [loadingPatients, setLoadingPatients] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [addingDoctor, setAddingDoctor] = useState(false);

  // ================= GET DOCTORS =================
  const fetchDoctors = async () => {
    try {
      setLoadingDoctors(true);

      const response = await axios.get("http://localhost:5000/api/doctors");

      setDoctors(response.data);
    } catch (error) {
      console.error("Fetch doctors error:", error);
      setError("Failed to load doctors.");
    } finally {
      setLoadingDoctors(false);
    }
  };
  const fetchPatientCount = async () => {
    try {
      setLoadingPatients(true);

      const response = await axios.get(
        "http://localhost:5000/api/admin/patients/count",
        {
          withCredentials: true,
        },
      );

      setPatientCount(response.data.count);
    } catch (error) {
      console.error("Fetch patient count error:", error);
    } finally {
      setLoadingPatients(false);
    }
  };
  useEffect(() => {
    fetchDoctors();
    fetchPatientCount();
  }, []);

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= ADD DOCTOR =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setAddingDoctor(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/doctors",
        formData,
        {
          withCredentials: true,
        },
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

      // Refresh doctors list
      fetchDoctors();
    } catch (error) {
      console.error("Create doctor error:", error);

      setError(error.response?.data?.message || "Failed to create doctor.");
    } finally {
      setAddingDoctor(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-950 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Manage doctors and Medicare users from one place.
          </p>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Doctors */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <p className="text-gray-500 dark:text-gray-400">Total Doctors</p>

            <h2 className="text-4xl font-bold text-blue-600 mt-2">
              {doctors.length}
            </h2>
          </div>

          {/* Admin */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <p className="text-gray-500 dark:text-gray-400">Total Patients</p>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              {loadingPatients ? "..." : patientCount}
            </h2>
          </div>
        </div>

        {/* ================= MESSAGES ================= */}

        {message && (
          <div className="mb-6 p-4 rounded-xl bg-green-100 text-green-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-100 text-red-700">
            {error}
          </div>
        )}

        {/* ================= ADD DOCTOR ================= */}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 mb-10">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Add New Doctor
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Create a doctor account and profile.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Doctor Name
              </label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. Rahul Sharma"
                className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="doctor@example.com"
                className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create doctor password"
                className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            {/* Speciality */}
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Speciality
              </label>

              <input
                name="speciality"
                value={formData.speciality}
                onChange={handleChange}
                placeholder="Cardiologist"
                className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Experience
              </label>

              <input
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="10 years"
                className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            {/* Hospital */}
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Hospital
              </label>

              <input
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                placeholder="City Hospital"
                className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            {/* Qualification */}
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Qualification
              </label>

              <input
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="MBBS, MD"
                className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            {/* Timings */}
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Timings
              </label>

              <input
                name="timings"
                value={formData.timings}
                onChange={handleChange}
                placeholder="10 AM - 2 PM"
                className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            {/* Image */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Image URL
              </label>

              <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/doctor.jpg"
                className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* About */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                About Doctor
              </label>

              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="Write a short description about the doctor..."
                rows="4"
                className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={addingDoctor}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50"
              >
                {addingDoctor ? "Adding Doctor..." : "Add Doctor"}
              </button>
            </div>
          </form>
        </div>

        {/* ================= DOCTORS LIST ================= */}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Doctors
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Doctors registered in Medicare.
            </p>
          </div>

          {loadingDoctors ? (
            <p className="text-gray-500 dark:text-gray-400">
              Loading doctors...
            </p>
          ) : doctors.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No doctors have been added yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b dark:border-gray-700 text-left">
                    <th className="p-4 text-gray-600 dark:text-gray-300">
                      Doctor
                    </th>

                    <th className="p-4 text-gray-600 dark:text-gray-300">
                      Email
                    </th>

                    <th className="p-4 text-gray-600 dark:text-gray-300">
                      Speciality
                    </th>

                    <th className="p-4 text-gray-600 dark:text-gray-300">
                      Experience
                    </th>

                    <th className="p-4 text-gray-600 dark:text-gray-300">
                      Hospital
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {doctors.map((doctor) => (
                    <tr
                      key={doctor._id}
                      className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          {doctor.image ? (
                            <img
                              src={doctor.image}
                              alt={doctor.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                              {doctor.name?.charAt(0)}
                            </div>
                          )}

                          <span className="font-semibold text-gray-800 dark:text-white">
                            {doctor.name}
                          </span>
                        </div>
                      </td>

                      <td className="p-4 text-gray-600 dark:text-gray-300">
                        {doctor.email}
                      </td>

                      <td className="p-4 text-gray-600 dark:text-gray-300">
                        {doctor.speciality}
                      </td>

                      <td className="p-4 text-gray-600 dark:text-gray-300">
                        {doctor.experience}
                      </td>

                      <td className="p-4 text-gray-600 dark:text-gray-300">
                        {doctor.hospital}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
