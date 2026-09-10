import axios from "axios";

const API_URL = "http://localhost:5000/api/doctors";
const AUTH_URL = "http://localhost:5000/api/auth";

// Get all doctors
export const getDoctors = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Get doctor by ID
export const getDoctorById = async (id) => {
  const response = await axios.get(
    `${API_URL}/${id}`
  );

  return response.data;
};

// Doctor login
export const loginDoctor = async (credentials) => {
  const response = await axios.post(
    `${AUTH_URL}/login`,
    credentials,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

// Get logged-in doctor profile
export const getDoctorProfile = async () => {
  const response = await axios.get(
    `${API_URL}/profile`,
    {
      withCredentials: true,
    }
  );

  return response.data;
};
