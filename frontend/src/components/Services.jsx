import {
  FaUserDoctor,
  FaCalendarCheck,
  FaNotesMedical,
} from "react-icons/fa6";
function Services() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-gray-800  dark:text-white">
          Our Services
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-4 mb-12">
          We provide complete healthcare solutions for you and your family.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-blue-50  dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <FaUserDoctor className="text-5xl text-blue-600 mb-6" />

            <h3 className="text-2xl  dark:text-white font-semibold mb-4">
              Expert Doctors
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              Consult highly qualified specialists with years of experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-50  dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <FaCalendarCheck className="text-5xl text-green-600 mb-6" />

            <h3 className="text-2xl  dark:text-white font-semibold mb-4">
              Appointment Booking
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              Schedule appointments quickly and conveniently.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-50  dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <FaNotesMedical className="text-5xl text-red-500 mb-6" />

            <h3 className="text-2xl dark:text-white font-semibold mb-4">
              Medical Records
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              Access and manage your health records securely.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;