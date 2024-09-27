// api.js

import axios from "axios";

let headers = {
  "Content-Type": "application/json",
};

if (sessionStorage.getItem("token")) {
  headers["Authorization"] = `Bearer ${sessionStorage.getItem("token")}`;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1", // Replace with your backend API base URL
  timeout: 20000, // Timeout after 20 seconds
  headers,
});

export default axiosInstance;
