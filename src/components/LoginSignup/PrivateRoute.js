// src/components/LoginSignup/PrivateRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated, hasProfile } from "../../utils/auth";

export default function PrivateRoute() {
  if (!isAuthenticated()) return <Navigate to="/login" replace />;
  if (!hasProfile()) return <Navigate to="/profilesetup" replace />;
  return <Outlet />;
}
