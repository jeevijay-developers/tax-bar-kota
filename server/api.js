import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function registerUser(data) {
  try {
    const res = await axios.post(`${API_BASE}/api/auth/register-user`, data);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}

export async function loginUser(data) {
  try {
    const res = await axios.post(`${API_BASE}/api/auth/login-user`, data);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}
