import moment from "moment";
import "./assets/style.css";
import { Header } from "./components/header";
import config from "./config.json";
//File chính
const app = document.querySelector("#app");

app.innerHTML = `
${Header()}
<main class="container">
  <h1 class="text-3xl text-center text-red-600">Học lập trình không khó</h1>
  <h2>${moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
  <h2>Limit: ${config.LIMIT}</h2>
  <h2>Title: ${config.PAGE_TITLE}</h2>
  <h2>Server api: ${import.meta.env.VITE_SERVER_API}</h2>
  <img src="/images/scope-2.png"/>
</main>
`;
