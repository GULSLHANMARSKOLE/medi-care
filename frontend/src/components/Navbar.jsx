import { Link, useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
function Navbar() {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useTheme();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between p-9 bg-blue-600 text-white dark:bg-gray-900">
     
      <h1 className="text-3xl font-bold dark:text-yellow-300">Medi care</h1>

      <div className="flex gap-5 items-center">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl bg-white text-blue-600 px-3 py-2 rounded-full"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        {user ? (
          <>
            <span className="text-white font-medium">Hi, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 font-medium"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
