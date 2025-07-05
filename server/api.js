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

export async function uploadGalleryImages(formData) {
  try {
    const res = await axios.post(`${API_BASE}/api/images/gallery`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}

export async function uploadEventGalleryImages(formData) {
  try {
    const res = await axios.post(`${API_BASE}/api/images/event-gallery`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}

export async function getGallery() {
  try {
    const res = await axios.get(`${API_BASE}/api/v1/get-gallery`);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}

export async function getEventGallery() {
  try {
    const res = await axios.get(`${API_BASE}/api/images/get-event-gallery`);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}

export async function getUserDetails(username) {
  try {
    const res = await axios.get(`${API_BASE}/api/user/getuser/${username}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}