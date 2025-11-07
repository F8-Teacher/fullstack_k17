//Object = Đối tượng
// - Thuộc tính: Thể hiện đặc điểm (biến)
// - Phương thức: Thể hiện hành vi (hàm)

//Mảng = Thể hiện 1 danh sách
//Đối tượng = Thể hiện 1 thông tin cụ thể
// + Tên
// + Giá
// + Tồn kho

//Thiết kế dưới dạng cặp key - value

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 33,
//   getName: function () {
//     console.log("An");
//   },
//   histories: ["Item 1", "Item 2", "Item 3"],
//   details: {
//     address: "Hà Nội",
//   },
// };

// user.position = "Teacher";
// user.name = "Hoàng An F8";

// delete user.email;

// console.log(user);

// //Duyệt
// for (const key in user) {
//   console.log(key, user[key]);
// }

//Truy cập
// console.log(user.email);
// console.log(user["age"]);
// let key = "name";
// console.log(user[key]);
// console.log(user.key);

//Ví dụ:
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   address: null,
//   age: undefined,
//   position: false,
// };

//Yêu cầu: Xóa các key không có giá trị ra khỏi object user
// for (const key in user) {
//   if (!user[key] && ![0, false].includes(user[key])) {
//     delete user[key];
//   }
// }
// console.log(user);

//Ví dụ: Hiển thị tên user có tuổi lớn nhất
// const users = [
//   {
//     name: "User 1",
//     age: 25,
//   },
//   {
//     name: "User 2",
//     age: 27,
//   },
//   {
//     name: "User 3",
//     age: 23,
//   },
//   {
//     name: "User 4",
//     age: 26,
//   },
// ];
// const maxUser = users.reduce((acc, cur) => (acc.age < cur.age ? cur : acc));
// const result = maxUser.name;
// console.log(result);

//Method
// console.dir(Object);

//1. Object.keys(): Trả về 1 mảng chứa danh sách keys
// const myObj = {
//   name: "An",
//   email: "an@gmail.com",
// };
// console.log(Object.keys(myObj));

//2. Object.values(): Trả về 1 mảng chứa danh sách values
// const myObj = {
//   name: "An",
//   email: "an@gmail.com",
// };
// console.log(Object.values(myObj));

//3. Object.entries(): Trả về 1 mảng bao gồm key và value
// const myObj = {
//   name: "An",
//   email: "an@gmail.com",
// };
// console.log(Object.entries(myObj));

//4. Object.fromEntries(): Chuyển từ entries về object
// const entries = [
//   ["name", "An"],
//   ["email", "an@gmail.com"],
// ];
// console.log(Object.fromEntries(entries));

//5. Object.assign(target, source1, source2...): Gộp object source1, source2,... vào object target và trả về object mới
// const obj1 = {
//   x: 1,
//   y: 2,
// };
// const obj2 = {
//   z: 3,
//   t: 4,
// };
// const obj3 = {
//   name: "An",
//   email: "an@gmail.com",
// };
// const newObj = Object.assign({}, obj1, obj2, obj3);
// console.log(newObj);
// console.log(obj1);

//Bài tập
// const query = {
//   keyword: "Lập trình Fullstack",
//   status: "active",
//   category: 1,
// };
//Yêu cầu: Chuyển object trên về dạng query string
//keyword=Lập+trình+Fullstack&status=active&category=1

// let queryString = "";
// for (let key in query) {
//   queryString += `${key}=${query[key]}&`;
// }
// queryString = queryString.replaceAll(" ", "+").slice(0, -1);
// console.log(queryString);

// const queryString = Object.entries(query)
//   .map((item) => item.join("="))
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

const queryString =
  "keyword=Hoc+Fullstack&status=active&category=1&category=2&category=3";
/*
{
    keyword: "Hoc Fullstack",
    status: "active",
    category: ["1","2"]
}
*/
// const queryArr = queryString.split("&");
// const query = {};
// queryArr.forEach((item) => {
//   const itemArr = item.split("=");
//   const key = itemArr[0];
//   const value = itemArr[1].toString().replaceAll("+", " ");
//   if (!query[key]) {
//     query[key] = value;
//   } else {
//     if (!Array.isArray(query[key])) {
//       query[key] = [query[key]];
//     }
//     query[key].push(value);
//   }
// });
// console.log(query);

//Prototype
//1. objectA
//2. objectA

//Cấu trúc
Object.prototype.message = "F8 - lập trình";
Object.prototype.getMessage = () => `Học lập trình không khó`;
// const obj1 = {
//   name: "An",
//   email: "an@gmail.com",
// };
// console.log(obj1);
// console.log(obj1.message);
// console.log(obj1.getMessage());

//Array
// Array.prototype.something = () => {
//   return "Xin chào anh em";
// };
// const users = [];
// console.log(users);
// console.log(users.something());

//1. Object
//2. Constructor: Array, String, Boolean, Number,...
//3. instance

// const users = []; //Array --> Object
// console.log(users.message);
// const fullname = "Hoàng An"; //String --> Object
// console.log(fullname.message);
// const age = 33; //Number --> Object
// console.log(age.message);
// const isCheck = false; //Boolean --> Object
// console.log(isCheck.message);

// function doSomething() {} //Function --> Object
// console.log(doSomething.message);

//Từ khóa this

// const myObj = {
//   name: "An",
//   email: "hoangan@gmail.com",
//   getEmail: function () {
//     console.log(this.email);
//   },
//   demo: function (value, status) {
//     console.log(this);
//     console.log(value);
//     console.log(status);
//   },
//   getInfo: function () {
//     return {
//       age: 33,
//       getAge: function () {
//         console.log(this.age);
//       },
//       getName: () => {
//         console.log(this.name);
//       },
//     };
//   },
// };

// const a = {
//   x: 1,
// };
// myObj.demo.call(a, "F8");

// const demoFunc = myObj.demo.bind(a);
// demoFunc("F8");

// const args = ["F8", true];
// myObj.demo.apply(a, args);
// myObj.demo.call(a, ...args);

//Literal Object
//Function Constructor

//Quy tắc PascalCase
function User(name, email) {
  this.name = name;
  this.email = email;
  this.getName = function () {
    console.log(this.name);
  };
}
User.prototype.message = "Học js không khó";
//Khởi tạo instance
const user = new User("Hoàng An", "hoangan.web@gmail.com");
console.log(user);
console.log(user.message);
