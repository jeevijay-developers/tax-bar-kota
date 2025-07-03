import axios from "axios";

const apiCLient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000",
  withCredentials,
});

export default apiCLient;
