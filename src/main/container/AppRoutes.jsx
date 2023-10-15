import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute element={HomePage} />} />
      <Route path="/error" element={<ProtectedRoute element={ErrorPage} />} />
    </Routes>
  );
};

export default AppRoutes;
