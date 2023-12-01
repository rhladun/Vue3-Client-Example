import axios from "axios";
axios.defaults.withCredentials = true;

const api = axios.create({
    withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default api;
