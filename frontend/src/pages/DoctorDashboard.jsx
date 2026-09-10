import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { getDoctorProfile } from "../services/doctorServices";
import { getDoctorAppointments } from "../services/appointmentServices";

function DoctorDashboard() {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        console.log("DoctorDashboard loaded");
        console.log("Fetching doctor profile...");

        const doctorData = await getDoctorProfile();

        console.log("Doctor profile:", doctorData);

        setDoctor(doctorData.doctor);

        const appointmentsData = await getDoctorAppointments(
          doctorData.doctor._id
        );

        console.log("Doctor appointments:", appointmentsData);

        setAppointments(appointmentsData);
      } catch (error) {
        console.error("Failed to load doctor dashboard:", error);

        setAuthError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  // Authentication failed
  if (authError) {
    return <Navigate to="/doctor/login" replace />;
  }

  // Loading
  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Loading dashboard...
        </p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Doctor Header */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 mb-10">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Doctor Dashboard
          </h1>

          {doctor && (
            <>
              <p className="mt-3 text-xl text-blue-600">
                {doctor.name}
              </p>

              <p className="mt-1 text-gray-600 dark:text-gray-300">
                {doctor.email}
              </p>

              <p className="mt-1 text-gray-600 dark:text-gray-300 capitalize">
                Role: {doctor.role}
              </p>
            </>
          )}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {/* Total */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <p className="text-gray-500 dark:text-gray-400">
              Total Appointments
            </p>

            <p className="text-4xl font-bold text-blue-600 mt-2">
              {appointments.length}
            </p>
          </div>

          {/* Pending */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <p className="text-gray-500 dark:text-gray-400">
              Pending
            </p>

            <p className="text-4xl font-bold text-yellow-500 mt-2">
              {
                appointments.filter(
                  (appointment) =>
                    appointment.status === "pending"
                ).length
              }
            </p>
          </div>

          {/* Approved */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <p className="text-gray-500 dark:text-gray-400">
              Approved
            </p>

            <p className="text-4xl font-bold text-green-600 mt-2">
              {
                appointments.filter(
                  (appointment) =>
                    appointment.status === "approved"
                ).length
              }
            </p>
          </div>
        </div>

        {/* Appointments */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Patient Appointments
        </h2>

        {appointments.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 text-center">
            <p className="text-gray-500 dark:text-gray-300">
              No appointments found.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">

            {appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6"
              >

                {/* Patient + Status */}
                <div className="flex justify-between items-start gap-4">

                  <h3 className="text-2xl font-bold text-blue-600">
                    {appointment.patientName}
                  </h3>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                      appointment.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : appointment.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : appointment.status === "cancelled"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {appointment.status}
                  </span>

                </div>

                {/* Patient Details */}
                <div className="mt-5 space-y-3 text-gray-600 dark:text-gray-300">

                  <p>
                    <strong>Email:</strong>{" "}
                    {appointment.patientEmail}
                  </p>

                  <p>
                    <strong>Date:</strong>{" "}
                    {appointment.date}
                  </p>

                  <p>
                    <strong>Time:</strong>{" "}
                    {appointment.time}
                  </p>

                  <p>
                    <strong>Symptoms:</strong>{" "}
                    {appointment.symptoms}
                  </p>

                </div>

                {/* Approve / Reject */}
                {appointment.status === "pending" && (
                  <div className="flex gap-4 mt-6">

                    <button
                      className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
                    >
                      Approve
                    </button>

                    <button
                      className="flex-1 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition"
                    >
                      Reject
                    </button>

                  </div>
                )}

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default DoctorDashboard;
