import axios from "axios";

const apiCLient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials,
});

export default apiCLient;
