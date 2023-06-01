import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Visiter from "../../pages/visiter";

const PrivateRoutes = () => {
  const token = Cookies.get("token");

  return token ? <Visiter /> : <Navigate to="/signin" replace />;
};

export default PrivateRoutes;
