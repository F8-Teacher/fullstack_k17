//find
//findIndex
//findLast
//findLastIndex
// const numbers = [5, 2, 1, 3, 9];
// const result = numbers.filter((number) => number % 2 !== 0);
// console.log(result);

// const result2 = numbers.find((number) => number % 2 !== 0);
// console.log(result2);

// const result3 = numbers.findIndex((number) => number % 2 !== 0);
// console.log(result3);

//Ví dụ:
// const users = [
//   [1, "user1@gmail.com", "User 1"],
//   [2, "user2@gmail.com", "User 2"],
//   [3, "user3@gmail.com", "User 3"],
// ];

//1. Xóa user có id = 2
/*
[
  [1, "user1@gmail.com", "User 1"],
  [3, "user3@gmail.com", "User 3"],
] 
*/

//Cách 1:
// const newUsers = users.filter((user) => user[0] !== 2);
// console.log(newUsers);

//Cách 2:
// const index = users.findIndex((user) => user[0] === 2);
// users.splice(index, 1);
// console.log(users);

//2. Xóa email của user có id = 2
/*
[
  [1, "user1@gmail.com", "User 1"],
  [2, "User 2"],
  [3, "user3@gmail.com", "User 3"],
]
*/
// const newUsers = users.map((user) => {
//   //Clone user ra 1 biến mới
//   const userClone = user.slice(0);
//   if (userClone[0] === 2) {
//     userClone.splice(1, 1);
//   }
//   return userClone;
// });
// console.log(newUsers);
// console.log(users);

//some: Chỉ cần có ít nhất 1 lần trả về truthy
// const numbers = [1, 3, 2, 7, 9];
// const result = numbers.some((number) => number % 2 === 0);
// console.log(result);

//every; Bắt buộc phải tất cả phần tử trả về truthy
// const numbers = [2, 8, 10, 6];
// const result = numbers.every((number) => number % 2 === 0);
// console.log(result);

//Bài toán so sánh mảng
const arr1 = [1, 2, 3, ["An"]];
const arr2 = [1, 2, 3, ["An"]];

// const shallowCompare = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   return arr1.every((item, index) => item === arr2[index]);
// };
// console.log(shallowCompare(arr1, arr2));

//Array.isArray(bienmang)

// const deepCompare = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   return arr1.every((item, index) => {
//     if (Array.isArray(item) && Array.isArray(arr2[index])) {
//       return deepCompare(item, arr2[index]);
//     }
//     return item === arr2[index];
//   });
// };
// console.log(deepCompare(arr1, arr2));

//flat(): Làm phẳng mảng
// const numbers = [1, 2, [3, [4], [5], 6]];
// console.log(numbers);
// const result = numbers.flat(Infinity);
// console.log(result);

//Làm phẳng mảng trên không dùng hàm flat
// const flatArray = (arr) => {
//   let newArr = [];
//   for (let value of arr) {
//     if (!Array.isArray(value)) {
//       newArr.push(value);
//     } else {
//       const result = flatArray(value);
//       newArr = newArr.concat(result);
//     }
//   }
//   return newArr;
// };
// console.log(flatArray(numbers));

//reduce(callback, initialValue)
//callback:
// - accumulator
// - value
// - index

// const numbers = [5, 10, 15, 20, 25, 30];
// const result = numbers.reduce((acc, value, index) => {
//   console.log(`acc: ${acc}, value: ${value}, index: ${index}`);
//   return value;
// });
// console.log(result);

// const total = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(total);

//Ví dụ: Tìm max
// const numbers = [1, 8, 2, 9, -1];
// const max = numbers.reduce((acc, cur) => (cur < acc ? acc : cur));
// console.log(max);

//Bài tập: Lọc trùng mảng (Dùng reduce)
// const users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
// const newUsers = users.reduce((acc, cur) => {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(newUsers);

//Bài tập: Chunk array
// - Không dùng slice
// - Dùng reduce
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;
//[[1,2], [3,4], [5,6], [7,8], [9]]

//[[1,2], [3,4], [5]]
// const newArr = numbers.reduce(
//   (acc, cur) => {
//     if (acc[acc.length - 1].length < size) {
//       acc[acc.length - 1].push(cur);
//     } else {
//       acc.push([cur]);
//     }
//     return acc;
//   },
//   [[]]
// );
// console.log(newArr);

//Array-Like Object: Object giống mảng
// function doSomething() {
//   //Array.from() --> Chuyển array like về array
//   Array.from(arguments).forEach((item) => {
//     console.log(item);
//   });
//   //spread
//   console.log(arguments);
//   console.log(Array.from(arguments));

//   [...arguments].forEach((item) => {
//     console.log(item);
//   });
// }
// doSomething(1, 2, 3, 4, 5, 6);

//Copy array
// const a = ["An", "hoangan.web@gmail.com", () => {}, ["Ahihi"]];
// const b = a;
//Shallow copy
//dùng method trả về mảng mới
// const b = a.slice(0);
// const b = [...a];

//Deep copy
// - Chuyển mảng về chuỗi json
// - Chuyển json ngược về mảng
//json sẽ không chuyển được hàm
// const json = JSON.stringify(a);
// console.log(json);

// const b = JSON.parse(json);
// b[0] = "An F8";
// b[b.length - 1][0] = "Bhihi";
// console.log(a);
// console.log(b);

// const sum = (a, b) => a + bå;
// const values = [10, 20];
// console.log(sum(...values));
// console.log(sum.apply(null, values));
