import { useEffect, useState } from "react";
import { getDoctors } from "../services/doctorServices";
import { Link } from "react-router-dom";

function Doctors() {
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("All");

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();

        console.log("Doctors received:", data);
        console.log("Number of doctors:", data.length);

        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = doctors
    .filter((doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()),
    )
    .filter(
      (doctor) => speciality === "All" || doctor.speciality === speciality,
    );

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-white">
          Our Doctors
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-4 mb-12">
          Meet our experienced specialists
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search doctor by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-3 border rounded-xl dark:bg-gray-800 dark:text-white"
          />

          <select
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            className="p-3 border rounded-xl dark:bg-gray-800 dark:text-white"
          >
            <option>All</option>
            <option>Cardiologist</option>
            <option>Neurologist</option>
            <option>Dermatologist</option>
            <option>Endocrinologists</option>
            <option>Hematologists</option>
            <option>Anesthesiologists</option>
          </select>
        </div>

        {/* Loading */}
        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            Loading doctors...
          </p>
        ) : filteredDoctors.length > 0 ? (
          /* Doctors Grid */
          <div className="grid md:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <Link
                to={`/doctors/${doctor._id}`}
                key={doctor._id}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition block"
              >
                {/* Doctor Image */}
                {doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-72 object-cover"
                  />
                ) : (
                  <div className="w-full h-72 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-300">No Image</p>
                  </div>
                )}

                {/* Doctor Information */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {doctor.name}
                  </h2>

                  <p className="text-blue-600 mt-2">{doctor.speciality}</p>

                  <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                    <p>
                      <strong>Experience:</strong> {doctor.experience}
                    </p>

                    <p>
                      <strong>Consultation Fee:</strong> {doctor.fee}
                    </p>

                    <p>
                      <strong>⭐ Rating:</strong> {doctor.rating}
                    </p>
                  </div>

                  <div className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl text-center hover:bg-blue-700 transition">
                    View Doctor
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Doctor Not Found */
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Doctor Not Found
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-300">
              No doctor matches your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Doctors;
