import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthenticationContext";

export const PrivateRoutes = () => {
  const { signed } = useAuth();
  return signed ? <Outlet /> : <Navigate to="/" />;
};

export const LoginRoutes = () => {
  const { signed } = useAuth();
  return signed ? <Navigate to="listStudent" /> : <Outlet />;
};
