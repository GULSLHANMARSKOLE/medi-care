import { useParams } from "react-router-dom";
import { doctors } from "../data/doctorsData";
import { Link, useNavigate } from "react-router-dom";

function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBookAppointment = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("Please login first to book an appointment.");
      navigate("/login");
      return;
    }
    navigate(`/appointment/${doctor.id}`);
  };
  const doctor = doctors.find((doc) => doc.id === Number(id));
  if (!doctor) {
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl dark:text-white">
        <h1 className="text-3xl font-bold text-red-500">Doctor Not Found</h1>
      </div>
    );
  }
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-[500px] object-cover rounded-3xl"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              {doctor.name}
            </h1>
            <p className="text-blue-600 text-xl mt-3">{doctor.speciality}</p>
            <div className="mt-8 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-semibold">Experience:</span>{" "}
                {doctor.experience}
              </p>
              <p>
                <span className="font-semibold">Qualification:</span>{" "}
                {doctor.qualification}
              </p>
              <p>
                <span className="font-semibold">Hospital:</span>{" "}
                {doctor.hospital}
              </p>
              <p>
                <span className="font-semibold">Available Timings:</span>{" "}
                {doctor.timings}
              </p>
              <p>
                <span className="font-semibold">Consultation Fee:</span>{" "}
                {doctor.fee}
              </p>
              <p>
                <span className="font-semibold">⭐ Rating:</span>{" "}
                {doctor.rating}
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold dark:text-white mb-4">
                About Doctor
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-8">
                {doctor.about}
              </p>
            </div>
            <button
              onClick={handleBookAppointment}
              className="w-full mt-10 bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DoctorDetails;
