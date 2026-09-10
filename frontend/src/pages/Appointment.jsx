import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createAppointment } from "../services/appointmentServices";
import { getDoctorById } from "../services/doctorServices";

function Appointment() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [symptoms, setSymptoms] = useState("");

  // Check login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Fetch doctor from MongoDB
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const data = await getDoctorById(id);
        setDoctor(data);
      } catch (error) {
        console.error("Failed to fetch doctor:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center dark:bg-gray-950">
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Loading doctor...
        </p>
      </div>
    );
  }

  // Doctor not found
  if (!doctor) {
    return (
      <div className="min-h-screen flex justify-center items-center dark:bg-gray-950">
        <p className="text-3xl font-bold text-gray-700 dark:text-white">
          Doctor Not Found
        </p>
      </div>
    );
  }

  const handleAppointment = async () => {
    if (!date || !time || !symptoms) {
      alert("Please fill all fields");
      return;
    }

    try {
      const appointmentData = {
        patientName: user.name,
        patientEmail: user.email,

        // Real MongoDB doctor ID
        doctorId: doctor._id,

        doctorName: doctor.name,
        date,
        time,
        symptoms,
      };

      const response = await createAppointment(appointmentData);

      alert(response.message);

      setDate("");
      setTime("");
      setSymptoms("");
    } catch (error) {
      console.error(error);
      alert("Failed to book appointment");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Book Appointment
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Doctor Information */}
          <div>
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-80 object-cover rounded-3xl"
            />

            <h2 className="text-2xl font-bold mt-6 dark:text-white">
              {doctor.name}
            </h2>

            <p className="text-blue-600 mt-2">
              {doctor.speciality}
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Experience: {doctor.experience}
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Hospital: {doctor.hospital}
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Qualification: {doctor.qualification}
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Available: {doctor.timings}
            </p>
          </div>

          {/* Appointment Form */}
          <div>
            <div className="space-y-5">

              {/* Patient Information */}
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                <p className="dark:text-white">
                  <strong>Patient:</strong> {user.name}
                </p>

                <p className="dark:text-white">
                  <strong>Email:</strong> {user.email}
                </p>
              </div>

              {/* Date */}
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-4 border rounded-xl dark:bg-gray-700 dark:text-white"
              />

              {/* Time */}
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-4 border rounded-xl dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
              </select>

              {/* Symptoms */}
              <textarea
                rows="5"
                placeholder="Describe your symptoms"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full p-4 border rounded-xl dark:bg-gray-700 dark:text-white"
              />

              {/* Confirm */}
              <button
                onClick={handleAppointment}
                className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
              >
                Confirm Appointment
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Appointment;