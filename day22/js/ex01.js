// class User {
//   //Phương thức khởi tạo
//   constructor(name, email) {
//     console.log("Initial");
//     // console.log(name, email);
//     this.name = name;
//     this.email = email;
//   }
//   getName() {
//     console.log(this.name);
//   }
//   getEmail() {
//     console.log(this.email);
//   }
// }

// //Kế thừa:
// class Auth extends User {
//   constructor(name, email, age) {
//     console.log("Auth constructor");
//     super(name, email); //Gọi constructor của class cha
//     this.age = age;
//   }
//   //Phương thức
//   getProfile() {
//     return [this.name, this.email, this.age];
//   }
//   getEmail() {
//     super.getEmail(); //Gọi phương thức của class cha
//   }
// }
// const auth = new Auth("User 1", "user1@gmail.com", 33);
// console.log(auth.getProfile());
// auth.getEmail();

//Static method, static property
// class User {
//   static name = "Hoàng An";
//   email = "hoangan.web@gmail.com";
//   static getName() {
//     console.log(this.name);
//   }
//   getName2() {
//     //this: instance của class User
//     console.log("non-static");
//     console.log(this.constructor.name);
//   }
//   static getEmail() {
//     console.log("static");
//     console.log(new this().email);
//   }
// }
// User.getEmail();

//Setter/Getter
// class User {
//   #data = ["Item 1", "Item 2", "Item 3"];
//   get latest() {
//     return this.#data[this.#data.length - 1];
//   }
//   set latest(value) {
//     if (value === "Admin") {
//       console.log("Blacklist");
//       return;
//     }
//     this.#data.push(value);
//   }
// }
// const user = new User();
// user.latest = "Item 4"; //Push new item vào cuối mảng
// user.latest = "Admin";
// console.log(user);
// console.log(user.#data);

//Bài tập
// class Calc {
//   #data;
//   constructor(value) {
//     this.#data = value;
//   }
//   add(value) {
//     this.#data += value;
//     return this;
//   }
//   minus(value) {
//     this.#data -= value;
//     return this;
//   }
//   multi(value) {
//     this.#data *= value;
//     return this;
//   }
//   divi(value) {
//     this.#data /= value;
//     return this;
//   }
//   get() {
//     return this.#data;
//   }
// }

//new Calc(5).add(3).minus(2).multi(6).divi(3).get()
// 5 + 3 - 2  * 6 / 3

//Lưu ý: Các method: add, minus, multi, divi có thể thay đổi tự cho nhau và không bắt buộc
//get phải ở cuối cùng

// const result = new Calc(5).add(3).minus(2).multi(6).divi(3).get();
// console.log(result);

//Ví dụ: Cần xây dựng hệ thống crud products
// - create
// - read
// - update
// - delete

// class Service {
//   #data = [];
//   add(item) {
//     this.#data.push(item);
//   }
//   list() {
//     return this.#data;
//   }
// }
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const productService = new Service();
// productService.add(new Product("Product 1", 1000));
// productService.add(new Product("Product 2", 2000));
// console.log(productService.list());

// const userService = new Service();
// userService.add(new User("User 1", "user1@gmail.com"));
// userService.add(new User("User 2", "user2@gmail.com"));
// console.log(userService.list());

//Dependency Injection (DI)
//SOLID

//Option Chaining (?.)
// const user = {
//   getName: () => {
//     console.log("Ok chưa?");
//   },
// };
// if (user && user.email) {
//   console.log(user.email.domain);
// }

// console.log(user?.email?.domain);
// user?.getName?.();

const users = [
  {
    id: 1,
    name: "Item 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Item 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Item 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Item 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Item 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Item 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Item 2.2.1",
    parent: 5,
  },
  {
    id: 8,
    name: "Item 2.2.2",
    parent: 5,
  },
];

console.log(users);

// [
//   {
//     id: 1,
//     name: "Item 1",
//     parent: 0,
//   },
//   {
//     id: 2,
//     name: "Item 2",
//     parent: 0,
//     children: [
//       {
//         id: 4,
//         name: "Item 2.1",
//         parent: 2,
//       },
//       {
//         id: 5,
//         name: "Item 2.2",
//         parent: 2,
//         children: [
//           {
//             id: 7,
//             name: "Item 2.2.1",
//             parent: 5,
//           },
//           {
//             id: 8,
//             name: "Item 2.2.2",
//             parent: 5,
//           },
//         ],
//       },
//       {
//         id: 6,
//         name: "Item 2.3",
//         parent: 2,
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Item 3",
//     parent: 0,
//   },
// ];

// const newArr = []; //Kết quả
// users.forEach((user) => {
//   if (user.parent === 0) {
//     newArr.push(user);
//     //Lần 2
//     users.forEach((user2) => {
//       if (user2.parent === user.id) {
//         if (!user.children) {
//           user.children = [];
//         }
//         user.children.push(user2);
//         //Lần 3
//         users.forEach((user3) => {
//           if (user3.parent === user2.id) {
//             if (!user2.children) {
//               user2.children = [];
//             }
//             user2.children.push(user3);
//           }
//         });
//       }
//     });
//   }
// });
// console.log(newArr);

const nestedArray = (users, parentId = 0) => {
  const newArr = [];
  users.forEach((user) => {
    if (user.parent === parentId) {
      newArr.push(user);
      const result = nestedArray(users, user.id);
      if (result.length) {
        user.children = result;
      }
    }
  });
  return newArr;
};
console.log(nestedArray(users));

const menus = [
  {
    text: "Home",
    href: "/home",
    icon: "fa-solid fa-house",
    tooltip: "Go to home page",
    children: [],
  },
  {
    text: "About Us",
    href: "/about",
    icon: "fa-solid fa-address-card",
    tooltip: "Learn more about our company",
    children: [],
  },
  {
    text: "Services",
    href: "/services",
    icon: "fa-solid fa-gear",
    tooltip: "Discover the services we offer",
    children: [
      {
        text: "Service 1",
        href: "/services/1",
        icon: "cog",
        tooltip: "Details for Service 1",
        children: [],
      },
      {
        text: "Service 2",
        href: "/services/2",
        icon: "cog",
        tooltip: "Details for Service 2",
        children: [],
      },
    ],
  },
  {
    text: "Khóa học",
    href: "/khoa-hoc",
    icon: "",
    tooltip: "",
    something: "Something",
    children: [
      {
        text: "Nextjs",
        href: "",
        icon: "",
        tooltip: "",
        something: "Something",
        children: [],
      },
      {
        text: "Reactjs",
        href: "",
        icon: "",
        tooltip: "",
        something: "Something",
        children: [],
      },
    ],
  },
  {
    text: "Products",
    href: "/products",
    icon: "fa-solid fa-cart-shopping",
    tooltip: "View our available products",
    children: [
      {
        text: "Product 1",
        href: "/products/1",
        icon: "shopping-cart",
        tooltip: "Details for Product 1",
        children: [],
      },
      {
        text: "Product 2",
        href: "/products/2",
        icon: "shopping-cart",
        tooltip: "Details for Product 2",
        children: [],
      },
    ],
  },
];

//DOM
