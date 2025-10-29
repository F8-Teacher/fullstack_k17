//Array: Dạng object dùng để lưu trữ 1 danh sách

//Khai báo array
const myArr = ["An", "Dũng", "Hoàng"];

//Truy cập phần tử
console.log(myArr[1]);

//Cập nhật giá trị phần tử
myArr[1] = "Dũng ok";

//Lấy số lượng phần tử
console.log(myArr.length);

//Thêm phần tử mới
myArr[myArr.length] = "Huy";
myArr[myArr.length] = "Khôi";
console.log(myArr);

//Duyệt mảng
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// for (let index in myArr) {
//   console.log(myArr[index]);
// }

// for (let value of myArr) {
//   console.log(value);
// }

//Ví dụ: Cho trước mảng số nguyên, tính tổng các số chẵn
// const numbers = [5, 2, 8, 7, -3, -6];
// let total = 0;
// for (let number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }
// console.log(total);

//Ví về xóa phần tử trong mảng
// let indexDelete = 2; //index cần xóa
// const newArr = []; //Tạo mảng mới chứa dữ liệu sau khi xóa
// for (let index in myArr) {
//   if (indexDelete === +index) {
//     continue; //Bỏ qua lần lặp
//   }
//   newArr[newArr.length] = myArr[index];
// }
// console.log(newArr);

//Bài tập
// const numbers = [5, 2, 8, 7, -3, -6];
// Tìm số lớn nhất trong mảng
// Đổi chỗ với phần tử cuối cùng
// [5, 2, -6, 7, -3, 8]
// let max = numbers[0];
// let indexMax = 0;
// for (let index in numbers) {
//   if (max < numbers[index]) {
//     max = numbers[index];
//     indexMax = index;
//   }
// }

// //Đổi chỗ
// numbers[indexMax] = numbers[numbers.length - 1];
// numbers[numbers.length - 1] = max;

// console.log(numbers);

// console.log(max, indexMax);

//Bài tập
const myUser = ["User 1", "User 2", "User 3", "User 2", "User 4"];
//["User 1", "User 2", "User 3", "User 4"]
const uniqueUser = [];
for (let index in myUser) {
  //Kiểm tra xem mảng uniqueUser đã có myUser[index]
  let isValid = true;
  for (let user of uniqueUser) {
    if (user === myUser[index]) {
      isValid = false;
      break;
    }
  }
  //Nếu không có --> Thêm
  if (isValid) {
    uniqueUser[uniqueUser.length] = myUser[index];
  }
}
console.log(uniqueUser);
