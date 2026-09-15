import React from "react";
import { Navigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const loggedIn = useAuthContext();
  if (!loggedIn) {
    return <Navigate to="/login" />
  }
  return children;
};

export default ProtectedRoute;