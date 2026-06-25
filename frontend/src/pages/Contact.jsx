import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-white">
          Contact Us
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-4 mb-16">
          We'd love to hear from you. Get in touch with us anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">

            <h2 className="text-3xl font-bold text-blue-600 mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <FaLocationDot className="text-3xl text-red-500" />
                <div>
                  <h3 className="font-semibold dark:text-white">
                    Address
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    New Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-3xl text-blue-600" />
                <div>
                  <h3 className="font-semibold dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    support@medicare.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-3xl text-green-600" />
                <div>
                  <h3 className="font-semibold dark:text-white">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 9876543210
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">

            <h2 className="text-3xl font-bold text-blue-600 mb-8">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border rounded-xl dark:bg-gray-700 dark:text-white"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border rounded-xl dark:bg-gray-700 dark:text-white"
                required
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border rounded-xl dark:bg-gray-700 dark:text-white"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;