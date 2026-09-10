
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginDoctor } from "../services/doctorServices";

function DoctorLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await loginDoctor({
        email,
        password,
      });

      // Make sure the logged-in account is actually a doctor
      if (response.user?.role !== "doctor") {
        setError("This account is not registered as a doctor.");
        return;
      }

      // Store user information for Navbar
      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      // JWT is stored in HttpOnly cookie by backend
      navigate("/doctor/dashboard");

    } catch (error) {
      console.error("Doctor login error:", error);

      setError(
        error.response?.data?.message ||
        "Doctor login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-md">

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">

          {/* Header */}
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Doctor Login
            </h1>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Sign in to manage your appointments
            </p>

          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-red-100 text-red-600 text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter doctor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 border rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Login button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition font-semibold disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Doctor Login"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default DoctorLogin;
