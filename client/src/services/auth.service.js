import api from "./api";

export const register = (userData) => {
  return api.post("/auth/register", userData);
};

export const login = (credentials) => {
  return api.post("/auth/login", credentials);
};

export const getProfile = (token) => {
  return api.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};