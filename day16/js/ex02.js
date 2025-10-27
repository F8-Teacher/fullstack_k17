//while loop

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

//do while
// let i = 100;
// do {
//   console.log(i);
//   i++;
// } while (i < 100);

//Ví dụ:
//1000 / 2 = 500
//500 / 2 = 250
//250 / 2 = 125

// let n = 10000;
// let count = 0;
// while (n % 2 === 0) {
//   count++;
//   n /= 2;
// }
// console.log(count);

//Đảo ngược số nguyên n (Không xử lý chuỗi)
let n = 52891; //19825
let result = 0;
while (n > 0) {
  let tmp = n % 10;
  n = (n - tmp) / 10;
  //   console.log(tmp);
  result = result * 10 + tmp;
}
console.log(result);

//1
//9
//8
//2
//5

//0 + 1 = 1
//1 * 10 + 9 = 19
//19 * 10 + 8 = 198
//198 * 10 + 2 = 1982
//1982 * 10 + 5 = 19825
