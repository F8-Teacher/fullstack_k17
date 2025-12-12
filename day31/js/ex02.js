//Destructuring: Phá vỡ cấu trúc của object, array để truy cập vào các key và trả về các biến riêng biệt
//Spread

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 33,
//   address: "Hà Nội",
//   position: undefined,
//   "shipping-address": "Hồ Chí Minh",
// };
// const { name: fullname, email, position = "Unknown", ...rest } = user;
// console.log(fullname);
// console.log(email);
// console.log(position);
// console.log(rest);

// let key = "email";
// const { [key]: myEmail } = user;
// console.log(myEmail);
// const { "shipping-address": shipping } = user;
// console.log(shipping);

// const users = ["Hoàng An", "hoangan.web@gmail.com", 33, "Hà Nội", "Teacher"];
// const [fullname, email, , address, ...rest] = users;
// console.log(fullname, email, address);
// console.log(rest);

// const doSomething = ({ email, age }) => {
//   console.log(email, age);
// };

// const myObj = {
//   name: "An",
//   email: "an@gmail.com",
//   age: 33,
// };
// doSomething(myObj);

// const obj1 = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const obj2 = {
//   age: 33,
//   address: "Hà Nội",
//   ...obj1,
// };
// console.log(obj2);

//Ví dụ:
// const user = Object.freeze({
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// });

// const newUser = {
//   ...user,
//   email: "an@gmail.com",
// };
// console.log(newUser);

// const myData = Object.freeze({
//   count: 0,
//   message: "Xin chào",
//   products: ["Item 1", "Item 2"],
// });

// const newData = {
//   ...myData,
//   products: [...myData.products, "Item 3"],
// };
// console.log(newData);

// const sum = (a, b) => {
//   console.log(a, b);
// };

// const args = [10, 20];
// sum(...args);
