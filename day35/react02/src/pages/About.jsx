import React from "react";
import { useAuth } from "../stores/authStore";

export default function About() {
  const logout = useAuth((state) => state.logout);
  return (
    <div>
      <h1>About</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
