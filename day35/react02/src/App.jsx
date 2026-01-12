import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Users/Dashboard";
import MainLayout from "./layouts/MainLayout";
import UserLayout from "./layouts/UserLayout";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import Sales from "./pages/Users/Sales";
import RoleMiddleware from "./middlewares/RoleMiddleware";
import CreateOrder from "./pages/Users/CreateOrder";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route element={<AuthMiddleware />}>
          <Route element={<UserLayout />} path="/users">
            <Route index element={<Dashboard />} />
            <Route path="order/:productId" element={<CreateOrder />} />
            <Route element={<RoleMiddleware />}>
              <Route path="sales" element={<Sales />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

//Code-Based Route
//File-Based Route

//Buổi sau:
// - Multi Layout
// - Protected Route
