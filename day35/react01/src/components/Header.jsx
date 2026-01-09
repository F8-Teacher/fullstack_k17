import React, { use } from "react";
import { AppContext } from "../App";

export default function Header() {
  const { setMessage } = use(AppContext);
  const { theme, setTheme } = use(AppContext);

  return (
    <div>
      <h1>Header</h1>
      <div>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
      <hr />
      <button onClick={() => setMessage("Học React quá khó")}>
        Change Title
      </button>
    </div>
  );
}
