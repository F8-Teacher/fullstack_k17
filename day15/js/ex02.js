//Câu lệnh rẽ nhánh
/*
if (dieukien) {
    Khoi lenh
}

if (dieukien) {
    Khoi lenh dung
} else {
    Khoi lenh sai    
}

if (dieukien1) {
    Khoi lenh 1
} else if (dieukien2) {
    Khoi lenh 2
} else if (dieukien3) {
    Khoi lenh 3
} else {
    Khoi lenh 4    
}
*/

// let age = 1;
// if (age < 0) {
//   console.log("Không hợp lệ");
// } else if (age < 3) {
//   console.log("Trẻ sơ sinh");
// } else if (age < 5) {
//   console.log("Trẻ em");
// } else if (age < 15) {
//   console.log("Trẻ dưới vị thành niên");
// } else if (age < 25) {
//   console.log("Trẻ vị thành niên");
// } else if (age < 35) {
//   console.log("Thanh niên");
// } else {
//   console.log("Trung niên và người giả");
// }

//Bài tập 1: Tính lương thực nhận của nhân viên sau khi trừ thuế
/*
- Lương <= 5tr --> 0%
- Lương >5tr và <= 10tr --> 3%
- Lương > 10tr và <= 20tr --> 5%
- Lương > 20tr --> 7%

Yêu cầu: 
- Công thức hóa
*/
// let salary = 6000000;
// let income;
// let tax;

// //Viết chương trình ở đây
// if (salary > 0) {
//   if (salary <= 5000000) {
//     tax = 0;
//   } else if (tax <= 10000000) {
//     tax = 3;
//   } else if (tax <= 20000000) {
//     tax = 5;
//   } else {
//     tax = 7;
//   }
//   income = salary - (salary * tax) / 100;
//   console.log(income);
// } else {
//   console.log("Không hợp lệ");
// }

//Bài tập: Tính tiền taxi khi biết số km
// - Số km <= 1: Giá 15.000
// - 1 < số km <= 5: Giá 13.500
// - Số km > 5: Giá 11.000
// - Số km > 120: Giảm 10% trên tổng tiền

//Ví dụ: Đi 6km
//Số tiền phải trả = 1*15000 + 4*13500 + 1*11000

//150km
//1 * 15000 + 4 * 13500 + 145 * 11000

// const PRICE_1 = 15000;
// const PRICE_2 = 13500;
// const PRICE_3 = 11000;
// const DISCOUNT = 10;
// const DISTANCE_1 = 1;
// const DISTANCE_2 = 5;
// const DISTANCE_3 = 120;
// let km = 150;
// let total = 0;
// if (km <= DISTANCE_1) {
//   total = PRICE_1 * 1;
// } else if (km <= DISTANCE_2) {
//   total = PRICE_1 * 1 + (km - DISTANCE_1) * PRICE_2;
// } else {
//   total =
//     PRICE_1 * 1 +
//     (DISTANCE_2 - DISTANCE_1) * PRICE_2 +
//     (km - DISTANCE_2) * PRICE_3;
//   if (km > 120) {
//     total = total - (total * DISCOUNT) / 100;
//   }
// }
// console.log(total);

//Câu lệnh switch case
// - Chỉ chấp nhận so sánh ===
const action = "update";
switch (action) {
  case "create":
  case "insert":
  case "add":
    console.log("Thêm mới");
    break;
  case "update":
  case "edit":
    console.log("Cập nhật");
    break;
  case "delete":
  case "remove":
    console.log("Xóa");
    break;
  default:
    console.log("Không hợp lệ");
    break;
}

//Bài tập: Viết lại đoạn code trên bằng if else
if (action === "create" || action === "insert" || action === "add") {
  console.log("Thêm mới");
} else if (action === "update" || action === "edit") {
  console.log("Cập nhật");
} else if (action === "delete" || action === "remove") {
  console.log("Xóa");
} else {
  console.log("Không hợp lệ");
}
