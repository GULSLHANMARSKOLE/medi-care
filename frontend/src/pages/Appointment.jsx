import { useParams } from "react-router-dom";
import { doctors } from "../data/doctorsData";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { createAppointment } from "../services/appointmentServices";
function Appointment() {
 const user = JSON.parse(localStorage.getItem("user"));

  const { id } = useParams();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [symptoms, setSymptoms] = useState("");
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  const doctor = doctors.find((doc) => doc.id === Number(id));

  const handleAppointment = async () => {
     if (!date || !time || !symptoms) {
    alert("Please fill all fields");
    return;
  }

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const appointmentData = {
        patientName: user.name,
        patientEmail: user.email,
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
      alert("Failed to book appointment");
      console.error(error);
    }
  };
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Book Appointment
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-80 object-cover rounded-3xl"
            />
            <h2 className="text-2xl font-bold mt-6 dark:text-white">
              {doctor.name}
            </h2>
            <p className="text-blue-600 mt-2">{doctor.speciality}</p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Experience: {doctor.experience}
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Consultation Fee: {doctor.fee}
            </p>
          </div>
          <div>
            <div className="space-y-5">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                <p className="dark:text-white">
                  <strong>Patient:</strong> {user.name}
                </p>

                <p className="dark:text-white">
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-4 border rounded-xl dark:bg-gray-700 dark:text-white"
              />
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-4 border rounded-xl dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Time</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>2:00 PM</option>
                <option>4:00 PM</option>
              </select>
              <textarea
                rows="5"
                placeholder="Describe your symptoms"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full p-4 border rounded-xl dark:bg-gray-700 dark:text-white"
              />
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
