import { useAuth } from "../stores/authStore";

export default function Home() {
  console.log("home");
  const updateUser = useAuth((state) => state.updateUser);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={updateUser}>Login</button>
    </div>
  );
}
