const BASE_URL = "https://api.escuelajs.co/api/v1";
const profileName = document.querySelector("h1 span");
const profileEl = document.querySelector(".profile");
let refreshPromise = null;
const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  window.location.href = "index.html";
};
const getNewToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refresh_token");
    const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken,
      }),
    });
    if (!response.ok) {
      throw new Error("Unauthorize");
    }
    return response.json();
  } catch {
    return false;
  }
};
const getProfile = async () => {
  try {
    const accessToken = localStorage.getItem("access_token");
    const response = await fetch(`${BASE_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Unauthorize");
    }
    const data = await response.json();
    profileName.innerText = data.name;
    profileEl.innerHTML = `
  <p>Name: ${data.name}</p>
  <p>Email: ${data.email}</p>
  `;
  } catch (error) {
    if (error.message === "Unauthorize") {
      if (!refreshPromise) {
        refreshPromise = getNewToken();
      }
      const newToken = await refreshPromise;
      if (newToken) {
        localStorage.setItem("access_token", newToken.access_token);
        localStorage.setItem("refresh_token", newToken.refresh_token);
        getProfile();
      } else {
        logout();
      }
    }
  }
};
getProfile();
getProfile();
getProfile();
