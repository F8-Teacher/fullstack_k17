const BASE_URL = "https://api.escuelajs.co/api/v1";
const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.querySelector(".email").value;
  const password = form.querySelector(".password").value;
  const token = await requestLogin(email, password);
  if (token) {
    localStorage.setItem("access_token", token.access_token);
    localStorage.setItem("refresh_token", token.refresh_token);
    window.location.href = "profile.html"; //Redirect
  }
});

const requestLogin = async (email, password) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};
