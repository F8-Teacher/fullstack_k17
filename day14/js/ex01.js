//Viết comment 1 dòng
//Viết comment 1 dòng
/*
Viết comment nhiều dòng
Viết comment nhiều dòng
Viết comment nhiều dòng
Viết comment nhiều dòng
Viết comment nhiều dòng
*/

//Biến: Dùng để lưu trữ giá trị tạm thời (Lưu ở RAM)
//Cú pháp: let tenbien hoặc let tenbien = giatri
//Quy ước đặt tên biến:
// - Chấp nhận: số, chữ thường, chữ hoa, gạch dưới và $
// - Không được bắt đầu = số
//Chuẩn đặt tên: camelCase
//Ví dụ: userId, customerName, userShippingAddress,...
//userEmail, username
//Lưu ý: Trong cùng 1 phạm vi, không được khai báo lại biến

// let a = 10;
// let b;
// let c = "An";
// console.log(a);
// console.log(b);
// console.log(c);

// let userId = 10;
// let customer;
// let customerName;

// userId = 30;

//Hằng số
//Quy tắc đặt tên giống như biến (camelCase)
//Cú pháp: const tenhang = giatri;
//Nếu hằng số đã xác định trước --> Đặt tên hằng là chữ hoa và nối bằng gạch dưới
// const fullname = "Hoàng An";

// const TIMEOUT = 1000;
// const BASE_URL = "https://api.fullstack.edu.vn";

// for (let i = 1; i <= 5; i++) {
//   const sqrValue = i * i;
//   console.log(sqrValue);
// }

//Nối biến vào 1 chuỗi ký tự
// const company = "F8";
// const output = "Học lập trình tại " + company + " không khó";
// const output = `Học lập trình tại ${company} không khó`;
// console.log(output);

//Danh sách các kiểu dữ liệu
//1. number
//2. string
//3. boolean
//4. null
//5. undefined
//6. symbol
//7. bigint
//8. object
// const user = {
//   name: "Hoàng AN",
//   email: "hoangan.web@gmail.com",
// };
// console.log(user);
// const users = ["User 1", "User 2"];
// console.log(users);

//Cách kiểm tra kiểu dữ liệu
//Dùng từ khóa typeof dulieu
// let age = 33;
// let fullname = "Hoàng An";
// let customer = null;
// console.log(typeof age);
// console.log(typeof fullname);
// console.log(customer === null);

//Toán tử và biểu thức
//Biểu thức = toán tử + toán hạng

//1. Toán tử số học
// +, -, *, /
// **, %, ++, --

// let a = "10";
// let b = 5;
// a = Number(a); //Ép biến a thành number
// a = +a;
// let total = a + b;
// console.log(total);
// let result = a ** b;
// console.log(result);

// let count = 1;
// count++;
// ++count;
// count--;
// --count;
// console.log(count);

// let total = count++ + ++count; //1 + 3 = 4
// console.log(`count`, count);
// console.log(`total`, total);

let salePrice = 560000;
let saleRate = 15;
//Tính giá gốc
let price = (salePrice / (100 - saleRate)) * 100;
console.log(price);
