import { Navigate } from "react-router";
import { useAdminAuth, useAuthContext } from "../../context/AuthContext";

 const AdminRoute = ({ children }) => {
  const loggedIn = useAuthContext();
  const { isAdmin } = useAdminAuth();

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute