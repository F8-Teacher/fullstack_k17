const BASE_URL = `http://localhost:3000`;

// fetch(`${BASE_URL}/users`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
const render = (data) => {
  const userListEl = document.querySelector(".user-list");
  userListEl.innerHTML = data.map((item) => `<h2>${item.name}</h2>`).join("");
};
const getUsers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`);
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();
    render(data);
  } catch (err) {
    console.log(err.message);
  }
};
getUsers();
