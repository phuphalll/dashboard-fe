import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL ?? "";

const axiosServices = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosServices;
