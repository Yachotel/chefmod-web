import { Navigate } from "react-router-dom";

// TODO: collect auth roles and check if the loggedin user have access to the route
const ProtectedRoute = ({ element: Component }) => {
  // TODO: check roles, isAuthenticated and other properties related to the user authentication
  const checkIsAuthenticated = true;
  return checkIsAuthenticated ? <Component /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
