//Kiểu dữ liệu cơ bản
// - number
// - string
// - boolean
// - null
// - undefined
// - bigint
// - symbol

//Khai báo kiểu dữ liệu cho biến
//Cú pháp: tenbien:tenkieu

// const sum = (a: number, b: number): number | undefined => {
//   if (b !== 0) {
//     return a + b;
//   }
// };
// const total = sum(10, 20);
// console.log(total);

//any --> Chấp nhận tất cả các kiểu -> Không nên dùng

//unknown --> Không xác định được kiểu chính xác, cần kiểm tra trước khi sử dụng
// let a: unknown;
// if (typeof a === "string") {
//   let b: string = a;
// }
// let c: any;
// let d: string = c;

//array
// const users: string[] = ["User 1", "User 2", "User 3"];

//tuple
// const myArr: [string, string, number] = ["An", "F8", 30];

// const myArr: [string | number, (value: string) => void] = [
//   "An",
//   (a) => {
//     console.log("Hello anh em");
//   },
// ];
// const [value, setValue] = myArr;
// setValue("An");

//Lưu ý: kiểu void thường áp dụng với hàm trả về undefined hoặc không có return

//object
// const user: {
//   name: string;
//   email: string;
//   age: number;
//   status?: boolean; //optional
//   getName(): string;
//   getEmail: () => string;
// } = {
//   name: "Hoàng An",
//   email: "an@mail.com",
//   age: 34,
//   status: false,
//   getName() {
//     return "an";
//   },
//   getEmail() {
//     return "an@mail.com";
//   },
// };

//optional áp dụng cả trong tham số hàm

// const doSomething = (a: number, b?: string) => {
//   console.log(a);
//   console.log(b);
// };
// doSomething(10);

// const users: {
//   id: number;
//   name: string;
//   status?: boolean;
//   history?: string[];
// }[] = [
//   {
//     id: 1,
//     name: "User 1",
//     status: false,
//   },
//   {
//     id: 2,
//     name: "User 2",
//     status: true,
//   },
//   {
//     id: 3,
//     name: "User 3",
//     status: true,
//     history: ["Item 1", "Item 2", "Item 3"],
//   },
// ];

// const getUsers = async() => {
//     const response: Response = await fetch(`example`)
// }
//Kiểu do người dùng tự định nghĩa
//type
// type UserAddress = {
//   address: string;
//   province: string;
// };
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   details?: UserAddress;
// };
// const user: User = {
//   id: 1,
//   name: "An",
//   email: "an@gmail.com",
// };

// const myAddress: UserAddress = {
//   address: "Tây Mỗ",
//   province: "Hà Nội",
// };

// const user: User & UserAddress = {
//   id: 1,
//   name: "An",
//   email: "an@gmail.com",
//   address: "Tây Mỗ",
//   province: "Hà Nội",
// };

//interface
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
// const user: User = {
//   id: 1,
//   name: "An",
//   email: "an@mail.com",
// };
// type UserWithAddress = User & {
//   address: string;
// };
// interface UserWithAddress extends User {
//   address: string;
// }
// const customer: UserWithAddress = {
//   id: 2,
//   name: "Dung",
//   email: "dung@mail.com",
//   address: "Tây Mỗ",
// };
// interface ErrorWithStatus extends Error {
//   status?: number;
// }
// try {
//   let a = -1;
//   if (a < 0) {
//     const error: ErrorWithStatus = new Error("a không được âm");
//     error.status = 400;
//     throw error;
//   }
// } catch (error) {
//   if (error instanceof Error) {
//     const err: ErrorWithStatus = error;
//     console.log(err.status);
//     console.log(err.message);
//   }
// }

// const getOptions = (value: "a" | "b" | "c" | "d") => {
//   //if else
// };

// getOptions("c");
// //a, b, c, d

// let option: "default" | "force" | "dynamic";
// option = "dynamic";

//generic
// const getValue = <T>(value: T): [T, () => void] => {
//   const doSomething = () => {};
//   return [value, doSomething];
// };

// type User = {
//   id: number;
//   name: string;
// };
// const [user, setUser] = getValue<User>({
//   id: 1,
//   name: "Hoàng An",
// });

// type Product = {
//   name: string;
//   price: number;
// };
// const [product, setProduct] = getValue<Product>({
//   name: "SP 1",
//   price: 1000,
// });
// product.price;

//Áp dụng: type, interface

// const response = fetch();

// let a: unknown = "An";
// let b: string = a as string;

// type User = {
//   id: number;
//   name: string;
// };

// const user: User = {} as User;

// let a: number = 10;
// let b: string = a.toString() as string;
