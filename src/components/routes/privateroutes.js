import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoutes = () => {
  const role = Cookies.get("role");

  return role === "superAdmin" ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
