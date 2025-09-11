// src/utils/auth.js
const KEY = "ct_auth";
const PROFILE_KEY = "ct_profile_complete";

export const login = () => {
  localStorage.setItem(KEY, "true");
};

export const logout = () => {
  localStorage.removeItem(KEY);
  // profile flag ko logout par mat hatao (flow ke hisaab se)
};

export const isAuthenticated = () => {
  return localStorage.getItem(KEY) === "true";
};

// profile helpers (NEW)
export const hasProfile = () => localStorage.getItem(PROFILE_KEY) === "true";
export const setProfileComplete = (done) =>
  localStorage.setItem(PROFILE_KEY, done ? "true" : "false");
