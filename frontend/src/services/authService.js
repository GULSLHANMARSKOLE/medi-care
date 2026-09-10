import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Login
export const loginUser = async (email, password) => {
  const response = await axios.post(
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
  const response = await axios.post(
    `${API_URL}/register`,
    userData
  );

  return response.data;
};