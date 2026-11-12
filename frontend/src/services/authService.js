import api from "../api";

const API_URL = "/api/auth";

// Login
export const loginUser = async (email, password) => {
  const response = await api.post(
    `${API_URL}/login`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );

  return response.data;
};

// Register
export const registerUser = async (userData) => {
  const response = await api.post(
    `${API_URL}/register`,
    userData
  );

  return response.data;
};