import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  timeout: 10000, // Set timeout to 10 seconds
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`, // Optional auth token
  },
});

export default axiosInstance;
