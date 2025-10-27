//Hàm

//1. expression function
// const showMessage = function () {
//   console.log("a");
// };
// if (typeof showMessage === "function") {
//   showMessage();
// }

//2. callback function
// const doSomething = function (value) {
//   console.log("doSomething", value);
// };
// const doSomething2 = function () {
//   console.log("doSomething 2");
// };
// const handler = function () {
//   doSomething("An");
// };
// const display = function (callback) {
//   console.log("display");
//   //func --> hàm đại diện
//   if (typeof callback === "function") {
//     callback();
//   }
// };
// display(handler);

//3. rest parameter
// const sum = function (a, b, ...args) {
//   console.log(a, b);
//   console.log(args);
// };
// sum(1, 2, 3, 4, 5, 6);

//4. IIFE
// (function (value) {
//   console.log("Học js không khó", value);
// })("F8");

//5. arrow function
// const showMessage = (msg) => {
//   console.log("Xin chào", msg);
// };
// showMessage("F8");

// const sum = (a, b) => {
//   return a + b;
// };
// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// const users = [
//   {
//     id: 1,
//     name: "User 1",
//   },
//   {
//     id: 2,
//     name: "User 2",
//   },
// ];
// const getUser = (userId) => users.find(({ id }) => id === userId);
// console.log(getUser(1));

//Đệ quy
// - Kỹ thuật gọi lại chính hàm đang định nghĩa để tạo vòng lặp
// - Có 2 phần
// + Phần cơ sở
// + Lời gọi đệ quy

// const showNumber = (n) => {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);

//Tính tổng các số từ 1 đến n (Dùng đệ quy)
// const getTotal = (n) => {
//   if (n === 0) {
//     return 0;
//   }
//   if (n % 2 === 0) {
//     return n + getTotal(n - 2);
//   } else {
//     return n - 1 + getTotal(n - 3);
//   }
// };
// const getTotal = (n) => {
//   if (n < 2) {
//     return 0;
//   }
//   if (n % 2 !== 0) {
//     n--;
//   }
//   return n + getTotal(n - 2);
// };
// // console.log(getTotal(10));
// console.log(getTotal(2));

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " x " + j + " = " + i * j);
//   }
//   if (i !== 10) console.log("------------------------");
// }
