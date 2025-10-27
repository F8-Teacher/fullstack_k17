//Bài tập for
// - Kỹ thuật đặt cờ hiệu
// - Kiểm tra số nguyên tố
// + Số nguyên
// + > 1
// + Chỉ chia hết cho 1 và chính nó

// let isPrime = true; //Giả định là đúng
// let n = 6;
// if (n % 1 !== 0 || n <= 1) {
//   isPrime = false;
// } else {
//   //Tìm từ 2 đến n - 1 có chia hết cho số nào khác không?
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break; //Thoát vòng lặp
//     }
//   }
// }
// console.log(isPrime);

//Tìm số lớn nhất ==> Kỹ thuật đặt lính canh
// let a = 10;
// let b = -2;
// let c = 8;
// let max = a;
// if (max < b) {
//   max = b;
// }
// if (max < c) {
//   max = c;
// }
// console.log(max);

//Giao diện
// let n = 5; // số dòng
// let output = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     output += "* ";
//   }
//   output += "<br/>";
// }
// document.body.innerHTML = output;

//Bài tập:
/*
Ví dụ: n = 4

1
2 3
4 5 6
7 8 9 10

*/
// let n = 5;
// let output = "";
// let count = 0;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     count++;
//     output += count + " ";
//   }
//   output += "<br/>";
// }
// document.body.innerHTML = output;

//Bàn cờ vua
// let tableHtml = `<table border="1" width="100%" cellpadding="0" cellspacing="0">`;

// for (let row = 1; row <= 8; row++) {
//   tableHtml += `<tr>`;
//   for (let col = 1; col <= 8; col++) {
//     let total = row + col;
//     let className = total % 2 !== 0 ? "black" : "";
//     tableHtml += `<td class="${className}"></td>`;
//   }
//   tableHtml += `</tr>`;
// }

// tableHtml += `</table>`;
// document.body.innerHTML = tableHtml;
