import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">
        <div>
          <h1 className="text-3xl font-bold text-blue-400">Medicare</h1>
          <p className="mt-4 text-gray-400">
            Your trusted healthcare companion.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:text-white">
                Doctors
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email:gmarskole038.btech2023@cse.nitrr.ac.in</li>
            <li>Phone: +91 9302818832</li>
          </ul>
        </div>
        <div className="pl-10">
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>
          <div className="flex gap-5 text-2xl ">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10">
        © 2026 MediCare. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
