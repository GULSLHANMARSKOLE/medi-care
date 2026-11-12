import api from "../api";

const API_URL = "/api/doctors";
const AUTH_URL = "/api/auth";

// Get all doctors
export const getDoctors = async () => {
  const response = await api.get(API_URL);

  return response.data;
};

// Get doctor by ID
export const getDoctorById = async (id) => {
  const response = await api.get(
    `${API_URL}/${id}`
  );

  return response.data;
};

// Doctor login
export const loginDoctor = async (credentials) => {
  const response = await api.post(
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
  const response = await api.get(
    `${API_URL}/profile`,
    {
      withCredentials: true,
    }
  );

  return response.data;
};
