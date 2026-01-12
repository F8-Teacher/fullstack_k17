import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { useAuth } from "../stores/authStore";

export default function MainLayout() {
  const fetchTodos = useAuth((state) => state.fetchTodos);
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <Nav />
      <hr />
      <Outlet />
    </div>
  );
}
