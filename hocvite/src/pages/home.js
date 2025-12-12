import { router } from "../main";
export const home = () => {
  const app = document.querySelector("#app");
  app.innerHTML = `<h1>Home
  <a href="/kham-pha" data-navigo>Khám phá</a>
  <button class="js-btn">Click me</button>
  </h1>`;
  //Event
  const btn = document.querySelector(".js-btn");
  btn.addEventListener("click", () => {
    console.log("Ok chưa?");
    router.navigate("/kham-pha");
  });
};
