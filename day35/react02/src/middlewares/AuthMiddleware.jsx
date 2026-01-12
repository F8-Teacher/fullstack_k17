import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthMiddleware() {
  const isAuth = localStorage.getItem("is_login") ? true : false;
  const { pathname } = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={"/login?continue=" + pathname} replace />
  );
}
