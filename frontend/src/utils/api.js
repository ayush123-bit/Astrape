import axios from "axios";

const api = axios.create({
  baseURL: "https://astrape-backend.onrender.com/api", // change when deployed
});

// Add JWT token to requests
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default api;
