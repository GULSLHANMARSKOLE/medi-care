import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoctorById } from "../services/doctorServices";

function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const handleBookAppointment = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("Please login first to book an appointment.");
      navigate("/login");
      return;
    }

    navigate(`/appointment/${doctor._id}`);
  };

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Loading doctor...
        </p>
      </section>
    );
  }

  if (!doctor) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-white">
          Doctor Not Found
        </h1>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
          
          <div className="grid md:grid-cols-2">

            {/* Doctor Image */}
            <div>
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full min-h-[500px] object-cover"
              />
            </div>

            {/* Doctor Information */}
            <div className="p-10">

              <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                {doctor.name}
              </h1>

              <p className="text-blue-600 text-xl mt-3">
                {doctor.speciality}
              </p>

              <div className="mt-8 space-y-4 text-gray-600 dark:text-gray-300">

                <p>
                  <strong>Experience:</strong>{" "}
                  {doctor.experience}
                </p>

                <p>
                  <strong>Qualification:</strong>{" "}
                  {doctor.qualification}
                </p>

                <p>
                  <strong>Hospital:</strong>{" "}
                  {doctor.hospital}
                </p>

                <p>
                  <strong>Available Timings:</strong>{" "}
                  {doctor.timings}
                </p>

              </div>

              {/* About */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  About Doctor
                </h2>

                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {doctor.about || "No information available."}
                </p>
              </div>

              {/* Book Appointment */}
              <button
                onClick={handleBookAppointment}
                className="mt-10 w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition font-semibold"
              >
                Book Appointment
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorDetails;