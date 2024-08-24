import axios from "axios";

const api = axios.create({
  baseURL: `https://blinksmedia-production.up.railway.app/api/v1/application`,
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
