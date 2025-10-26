import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  // Check if user is logged in (using localStorage)
  const isAuthenticated = localStorage.getItem("authToken");

  // If not logged in, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render protected content
  return children;
}
