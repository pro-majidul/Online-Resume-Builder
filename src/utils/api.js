import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth", // Your Express.js backend URL
  withCredentials: true, // Send cookies for authentication
});

// Register User
export const registerUser = async (userData) => {
  const res = await API.post("/signup", userData);
  return res.data;
};


// Login User
export const loginUser = async (userData) => {
  const res = await API.post("/signin", userData);
  return res.data;
};


// Check Lockout Status
export const checkLockoutStatus = async (email) => {
  const res = await API.post("/check-lockout", { email });
  return res.data;
};

// Logout User
export const signout = async () => {
  const res = await API.post("/signout");
  return res.data;
};

// Get All Users
export const getUsers = async () => {
  const res = await API.get("/users");
  return res.data;
};

// Get Specific User
export const getUserById = async (id) => {
  const res = await API.get(`/users/${id}`);
  return res.data;
};

// Update User
export const updateUser = async (id, userData) => {
  const res = await API.patch(`/users/${id}`, userData);
  return res.data;
};

// Delete User
export const deleteUser = async (id) => {
  const res = await API.delete(`/users/${id}`);
  return res.data;
};

export default API;
