import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from "./App.jsx";
// import ReactRef from "./ReactRef.jsx";
// import ExRef from "./ExRef.jsx";
import Comments from "./Comments/Comments.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Comments />
  </StrictMode>
);
