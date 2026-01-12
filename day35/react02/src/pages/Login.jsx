import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Login() {
  //Yêu cầu:
  // - Submit form
  // - Lấy email, password
  // - So sánh email = 'admin@gmail.com', password = '123456'
  // - Nếu đúng -> Chuyển hướng về trang trước khi bị chuyển hướng
  const [searchParams] = useSearchParams();
  const continueUrl = searchParams.get("continue") ?? "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("is_login", true);
      navigate(continueUrl);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
