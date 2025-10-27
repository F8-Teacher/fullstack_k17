//Chuỗi

// let fullname = "Tạ Hoàng An";
//tenbienchuoi[chiso] --> Trả về ký tự
// console.log(fullname[0]);
// console.log(fullname[1]);
// console.log(fullname[2]);

//Lấy độ dài: tenbienchuoi.length
// console.log(fullname.length);

console.log(String.prototype);

//Các phương thức xử lý chuỗi
//1. charAt(index) --> Trả về ký tự theo index
// let str = "Học lập trình không khó";
// console.log(str.charAt(0));

//2. charCodeAt(index) --> Trả về mã ASCII của ký tự theo index
// let str = "Học lập trình không khó";
// console.log(str.charCodeAt(0));

//3. indexOf(sub_string) --> tìm chuỗi sub_string trong chuỗi cha và trả về index đầu tiên tìm được, ngược lại sẽ trả về -1
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.indexOf("F8"));

//4. lastIndexOf(sub_string) --> Giống indexOf nhưng trả về trí cuối cùng tìm được
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.lastIndexOf("F8"));

//5. includes(sub_string) --> Tìm chuỗi con trong chuỗi cha --> Trả về true / false
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.includes("F8"));

//6. slice(start, end) --> Cắt chuỗi từ start đến end-1
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.slice(1, 5));
// console.log(str.slice(1));
// console.log(str.slice(-5, -3));
// let str = "Xin chào anh em,";
// console.log(str.slice(0, -1));

//7. replace(tu-khoa, tu-khoa-thay-the) --> Thay thế từ đầu tiên tìm được
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.replace("F8", "F9"));

//8. replaceAll()
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.replaceAll("F8", "F9"));

//9. repeat(n) --> Lặp chuỗi
// let str = "F8 ";
// console.log(str.repeat(10));

//10. toUpperCase() --> Chuyển chuỗi thành chữ hoa
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.toUpperCase());

//11. toLowerCase() --> Chuyển chuỗi thành chữ thường
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.toLowerCase());

//12. trim() --> Loại bỏ khoảng trắng đầu và cuối chuỗi

// let str = "   Học lập trình F8 không F8 khó ";
// console.log(str);
// console.log(str.trim());

//13. trimStart() --> Loại bỏ khoảng trắng đầu chuỗi

//14. trimEnd() --> Loại bỏ khoảng trắng cuối

//15. startsWith(sub_str) --> Kiểm tra chuỗi sub_string có nằm ở đầu chuỗi cha không?
// let pathname = "/admin/posts";
// console.log(pathname.startsWith("/admin"));

//16. endsWith(sub_string)
// let pathname = "/admin/posts.html";
// console.log(pathname.endsWith(".html"));

//Biểu thức chính quy (Regex)
// let content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 0388875179 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make +84394822896 a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s`;
// let pattern = /(0|\+84)\d{9}/g;
// let results = content.match(pattern);
// console.log(results);

// let email = "hoangan1111@fullstack.edu.vn";
// let pos = email.indexOf("@");
// let username = email.slice(0, pos);
// console.log(username);

// let fullname = "tạ hoàng an"; //Tạ Hoàng An
// fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
// console.log(fullname);
