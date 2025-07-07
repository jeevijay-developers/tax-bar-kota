import apiCLient from "./config";

export async function registerUser(data) {
  try {
    const res = await apiCLient.post(`/api/auth/register-user`, data);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}

export async function loginUser(data) {
  try {
    const res = await apiCLient.post(`/api/auth/login-user`, data);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}

export async function uploadGalleryImages(formData) {
  try {
    const res = await apiCLient.post(`/api/images/gallery`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}

export async function uploadEventGalleryImages(formData) {
  try {
    const res = await apiCLient.post(`/api/images/event-gallery`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}

export async function getGallery() {
  try {
    const res = await apiCLient.get(`/api/v1/get-gallery`);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}

export async function getEventGallery() {
  try {
    const res = await apiCLient.get(`/api/images/get-event-gallery`);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}

export async function updateUser(id, data) {
  try {
    const res = await axios.put(`${API_BASE}/api/users/${id}`, data);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}

export async function getUserDetails(id) {
  try {
    const res = await axios.get(`${API_BASE}/api/user/getuser/${id}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
}