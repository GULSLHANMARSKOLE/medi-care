import { useEffect, useState } from "react";
import { getAppointments,cancelAppointment } from "../services/appointmentServices";
import { Navigate } from "react-router-dom";
function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  if (!user) {
    return <Navigate to="/login" />;
  }
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments(user.email);
        setAppointments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, [user.email]);
  const handleCancel = async (id) => {
    try {
      await cancelAppointment(id);

      setAppointments((prev) =>
        prev.filter((appointment) => appointment._id !== id),
      );
      alert("Appointment cancelled successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to cancel appointment")
    }
  };
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Appointments
        </h1>
        {loading ? (
          <p className="text-center dark:text-white">Loading appointments...</p>
        ) : appointments.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            No appointments found.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold text-blue-600">
                  {appointment.doctorName}
                </h2>
                <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>Date:</strong> {appointment.date}
                  </p>
                  <p>
                    <strong>Symptoms:</strong> {appointment.symptoms}
                  </p>
                  <p>
                    <strong>Time:</strong> {appointment.time}
                  </p>
                  <button
                    onClick={() => handleCancel(appointment._id)}
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600"
                  >
                    Cancel Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
