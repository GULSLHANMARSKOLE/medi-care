import { FaUserDoctor, FaClock, FaShieldHeart } from "react-icons/fa6";

function WhyChooseUs() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-500 dark:text-white mt-4 mb-12">
          Providing exceptional healthcare with trust and compassion.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <FaUserDoctor className="text-5xl text-blue-600 mb-6" />

            <h3 className="text-2xl font-semibold mb-4">
              Experienced Doctors
            </h3>

            <p className="text-gray-600 dark:text-white">
              Highly qualified specialists with years of experience.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <FaClock className="text-5xl text-green-600 mb-6" />

            <h3 className="text-2xl font-semibold mb-4">
              24/7 Availability
            </h3>

            <p className="text-gray-600 dark:text-white">
              Healthcare support available anytime you need it.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <FaShieldHeart className="text-5xl text-red-500 mb-6" />

            <h3 className="text-2xl font-semibold mb-4">
              Trusted Care
            </h3>

            <p className="text-gray-600 dark:text-white">
              Safe, secure, and patient-focused medical services.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;