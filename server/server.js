// import apiCLient from "./config";

// apiCLient.post("/api/auth/register-user", async (req, res) => {
//   try {
//     const response = await axios.post(`${BACKEND_URL}/register-user`, req.body);
//     res.status(response.status).json(response.data);
//   } catch (err) {
//     res
//       .status(err.response?.status || 500)
//       .json(err.response?.data || { error: err.message });
//   }
// });

// apiCLient.post("/api/auth/login-user", async (req, res) => {
//   try {
//     const response = await axios.post(`${BACKEND_URL}/login-user`, req.body);
//     res.status(response.status).json(response.data);
//   } catch (err) {
//     res
//       .status(err.response?.status || 500)
//       .json(err.response?.data || { error: err.message });
//   }
// });
