import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../stores/authStore";
export default function Nav() {
  //   const location = useLocation();
  //   console.log(location);
  const activeClass = ({ isActive }) => {
    return isActive ? "bg-red-600" : "";
  };
  const user = useAuth((state) => state.user);
  return (
    <div>
      <NavLink className={activeClass} to="/">
        Home
      </NavLink>
      <NavLink className={activeClass} to="/about">
        About
      </NavLink>
      <NavLink className={activeClass} to="/products">
        Products
      </NavLink>
      <NavLink className={activeClass} to="/contact">
        Contact
      </NavLink>
      <span>Hi, {user.name}</span>
    </div>
  );
}
