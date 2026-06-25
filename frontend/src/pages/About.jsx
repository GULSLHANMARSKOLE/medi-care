import { FaUserDoctor, FaHospital, FaHeartPulse } from "react-icons/fa6";

function About() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-8 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
          About Medi Care
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Medi Care is dedicated to connecting patients with trusted healthcare
          professionals through a simple, secure, and modern appointment
          booking platform.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-8">
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-8">
            To make healthcare accessible for everyone by simplifying doctor
            discovery, appointment scheduling, and patient management.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Our Vision
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-8">
            To become the most trusted digital healthcare platform, improving
            patient experiences and healthcare accessibility worldwide.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-4xl font-bold text-blue-600">100+</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Expert Doctors
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Happy Patients
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Support
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-4xl font-bold text-blue-600">98%</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Satisfaction
            </p>
          </div>

        </div>
      </div>
      <div className="max-w-6xl mx-auto px-8 pb-20">
        
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Why Patients Trust Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
            <FaUserDoctor className="text-5xl text-blue-600 mb-6" />
            <h3 className="text-2xl font-semibold dark:text-white">
              Qualified Doctors
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Connect with highly experienced and trusted healthcare
              professionals.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
            <FaHospital className="text-5xl text-green-600 mb-6" />
            <h3 className="text-2xl font-semibold dark:text-white">
              Modern Healthcare
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Access quality healthcare services with a modern digital
              experience.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
            <FaHeartPulse className="text-5xl text-red-500 mb-6" />
            <h3 className="text-2xl font-semibold dark:text-white">
              Patient First
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              We prioritize patient satisfaction, safety, and convenience.
            </p>
          </div>

        </div>
      </div>
      <div className="bg-blue-600 py-16 text-center">
        <h2 className="text-4xl font-bold text-white">
          Your Health Deserves The Best Care
        </h2>

        <p className="mt-4 text-blue-100">
          Find trusted doctors and book appointments in minutes.
        </p>

        <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100">
          Get Started
        </button>
      </div>

    </section>
  );
}

export default About;