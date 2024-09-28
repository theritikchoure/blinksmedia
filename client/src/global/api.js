// api.js

import axios from "axios";

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1", // Replace with your backend API base URL
  timeout: 20000, // Timeout after 20 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to dynamically set the Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    // Check sessionStorage first, then localStorage if not found
    const token =
      sessionStorage.getItem("authToken") || localStorage.getItem("authToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle error here
    return Promise.reject(error);
  }
);

export default axiosInstance;
