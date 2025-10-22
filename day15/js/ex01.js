//Toán tử (Tiếp)

//2. Toán tử so sánh

// >, <, >=, <=, ==, ===, !=, !==
// Luôn trả về true, false

//Lưu ý: ===, !==: So sánh cả giá trị và kiểu dữ liệu

// let a = 20;
// let b = "20";
// let c = a !== b;
// console.log(c);

//So sánh chuỗi
// let a = "an";
// let b = "Anh";

// console.log(a > b);

//3. Toán tử gán
// let a = 1;
// // a = a + 10;
// a += 10;
// a -= 2;
// a *= 3;
// a /= 2;
// a **= 2;
// a %= 3;
// console.log(a);

//4. Truthy, Falsy
// - Falsy: Trong ngữ cảnh so sánh --> Giá trị nào tự động chuyển về false hoặc được coi như false --> Gọi là falsy
// - Truthy: Ngược lại

//Các giá trị falsy: 0, null, undefined, false, "", NaN
//Các truthy: Các trường hợp còn lại

//Ví dụ: -0, 0n --> falsy

//5. Toán tử luận lý (&&, ||, !)

//Cách hoạt động của toán tử &&
//- Tìm falsy, nếu tìm thấy falsy sẽ trả về giá trị falsy tìm được và dừng lại
//- Nếu không tìm thấy falsy --> Trả về giá trị của biểu thức cuối cùng

// let a = 10;
// let b = 1;
// let c = "An";
// let result = a && b > 10 && c;
// console.log(result);

//Cách hoạt động của toán tử ||
//- Tìm truthy, nếu tìm thấy truthy sẽ trả về giá trị truthy tìm được và dừng lại
//- Nếu không tìm thấy truthy --> Trả về giá trị của biểu thức cuối cùng
// let a = 0;
// let b = 1;
// let c = "An";
// let result = a || b || c;
// console.log(result);

// let page = null;
// let result = page || 1;
// console.log(result);

//Cách hoạt động toán tử !
// - Chuyển giá trị về boolean
// - Trả về giá trị phủ định
// let a = 10;
// let b = !!a;
// console.log(b);

//6. Toán tử nullish (??)
// Kiểm tra null, undefined --> Nếu đúng --> Tìm đến biểu thức tiếp theo
// let a = 0;
// let b = a ?? "F8";
// console.log(b);

//7. Toán tử điều kiện 3 ngôi (? : )
//Cú pháp: dieukien ? giatridung : giatrisai
// let a = 10;
// let b = a >= 10 ? 100 : 0;
// console.log(b);

// let a = 10;
// let total = 1 + 2 + 3 + (a >= 10 ? 20 : 5) + 6;
// console.log(total);
