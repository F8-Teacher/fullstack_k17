//Vòng lặp
// - Cú pháp trong lập trình
// - Cho phép đoạn chương trình chạy lặp đi lặp lại theo số lần nhất định

//1. Vòng lặp với số lần lặp xác định trước: for
//2. Vòng lặp với số lần lặp không xác định trước: while, do while

/*
for (giatrikhoitao; dieukienchay; buocnhay) {
    Khoi lenh
}
*/
// for (let i = 1; i <= 10; i++) {
//   console.log("Xin chào F8: ", i);
// }
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`i = ${i}`, `j = ${j}`);
//   }
// }

//Ví dụ: S = 1 + 2 + 3 + ... + n

// let n = 10;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   total += i;
// }
// console.log(total);

//total = 0;
//- i = 1 --> total = total + i = 1
//- i = 2 --> total = total + i = 3
//- i = 3 --> total = total + i = 6
//- i = 4 --> total = total + i = 10

//Bài tập: Tính n! = 1 * 2 * 3 ... n
// let n = 5;
// let factorial = 1;
// for (let i = 2; i <= n; i++) {
//   factorial *= i;
// }
// console.log(factorial);

//Bài tập:
//S = 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n
let n = 5; //1 + 1*2 + 1*2*3 + 1*2*3*4 + 1*2*3*4*5

let factorial = 1;
let total = 0;
for (let i = 1; i <= n; i++) {
  factorial *= i;
  total += factorial;
}
console.log(total);

//Buổi sau:
// - bài tập for
// - while, do while
// - function
