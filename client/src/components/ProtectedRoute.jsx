import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PATHS } from "../routes/paths";

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Remember where they were going so login can send them back
    return <Navigate to={PATHS.LOGIN} replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
