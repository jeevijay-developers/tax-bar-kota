const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000/api/auth";

app.post("/api/auth/register-user", async (req, res) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/register-user`, req.body);
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: err.message });
  }
});

app.post("/api/auth/login-user", async (req, res) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/login-user`, req.body);
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
