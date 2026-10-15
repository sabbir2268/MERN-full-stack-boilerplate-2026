import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";
import { PATHS } from "../utils/paths";

function PrivateRoute() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Remember where they were going so login can send them back
    return <Navigate to={PATHS.LOGIN} replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default PrivateRoute;
