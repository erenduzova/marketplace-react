// src/utils/auth.js
// Utility function to check if a user is logged in and get role

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};

// Function to extract role from JWT token (assuming it's inside the payload)
export const getUserRole = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  // Decode the token (you can use a library like jwt-decode for this)
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload.role; // Assuming the token contains the role in its payload
};
