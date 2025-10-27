//Hàm
// - Cú pháp trong lập trình
// - Cho phép nhóm các đoạn chương trình con và đặt tên --> Tiện trong việc gọi lại

//Hàm thường thể hiện là 1 hành động
//Tên hàm: getMessage, showUser, setCustomer,...

//Cú pháp:
/*
Định nghĩa hàm:

function tenham() {
    Thân hàm
}

function tenham(thamso1, thamso2,...) {
    Thân hàm
}

Gọi hàm:
tenham()
tenham(doiso1, doiso2,....)
*/
// function getMessage(msg, status = "success") {
//   //   console.log("Xin chào anh em F8");
//   console.log(msg);
//   console.log(status);
// }
// getMessage("F8", "error");
// getMessage("F9");

//scope
//1. global
//2. function
//3. block
//4. module

//Từ khóa return: Hàm trả về giá trị
//Lưu ý: Khi từ khóa return được gọi --> hàm sẽ thoát
// function getTotal(a, b) {
//   let total = a + b;
//   //total = biến cục bộ
//   return total;
//   //   console.log("Xin chào");
// }
// console.log(getTotal(10, 20));

// function getDivi(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }
//   return false;
// }
// console.log(getDivi(10, 0));

//Hàm kiểm tra số nguyên tố
// function isPrime(n) {
//   if (n % 1 !== 0 || n <= 1) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(47));

//Biến toàn cục
// let data = "Xin chào F8";
// function getMessage() {
//   return data;
// }
// function setMessage(value) {
//   data = value;
// }
// setMessage("Ok chưa?");
// console.log(getMessage());

let a = 10;

function display(value1) {
  let b = 20;
  //Hàm closure
  //Hàm ẩn danh (anonymous funcion)
  return function (value2) {
    let c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(value1);
    console.log(value2);
  };
  //   return showMessage;
}

const showMsg = display("F8");
showMsg("F9");
