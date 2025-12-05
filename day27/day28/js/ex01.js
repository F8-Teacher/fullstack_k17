const BASE_URL = "http://localhost:3000";
// const addUser = async (data) => {
//   //Chuyển data -> json
//   const dataJson = JSON.stringify(data);
//   const response = await fetch(`${BASE_URL}/users`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: dataJson,
//   });
//   console.log(response);
// };

// addUser({
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// });

// const updateUser = async (id, data) => {
//   const dataJson = JSON.stringify(data);
//   const response = await fetch(`${BASE_URL}/users/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: dataJson,
//   });
//   console.log(response);
// };
// updateUser(6, {
//   name: "An Ok",
// });
