//Đồng bộ
// alert("Xin chào anh em");
// console.log("Ok chưa?");

//Bất đồng bộ
// - step 1 --> 1s
// - step 2 --> 2s
// - step 3 --> 1s

// setTimeout(() => {
//   console.log("Xin chào");
// }, 1000);
// console.log("Đã xong");

// setTimeout(() => {
//   console.log(1);
// }, 0);
// console.log(2);

// setTimeout(() => {
//   console.log(1);
// }, 0);
// Promise.resolve(2).then((data) => {
//   console.log(data);
// });
// console.log(3);

//Xử lý bất đồng bộ => Biến thành các tác vụ đồng bộ
//Ví dụ:
// - Bấm button
// - Gọi dữ liệu từ server
// - Chờ server trả về
// - hiển thị kết quả lên trình duyệt

// const getUsers = (callback) => {
//   setTimeout(() => {
//     const users = ["User 1", "User 2", "User 3"];
//     //Giả sử: Lấy users mất thời gian
//     callback(users);
//   }, 2000);
// };
// const getProducts = (callback) => {
//   setTimeout(() => {
//     const products = ["Product 1", "Product 2", "Product 3"];
//     callback(products);
//   }, 1000);
// };

// getUsers((users) => {
//   console.log(users);
//   getProducts((products) => {
//     console.log(products);
//   });
// });

//Promise
// - Object của JS
// - Chứa dữ liệu có kết quả trong tương lai (Thường áp dụng cho các tác vụ bất đồng bộ)

//State:
// - pending
// - fulfilled: Đã thực thi thành công
// - rejected: Đã thực thi nhưng thất bại

//1. Khởi tạo Promise
const myPromise = new Promise((resolve, reject) => {
  //resolve: Hàm dùng để chứa dữ liệu nếu thành công
  //reject: Hàm dùng để chứa dữ liệu nếu thất bại
  setTimeout(() => {
    let check = true;
    if (check) {
      resolve("Hello anh em");
    } else {
      reject("Lỗi rồi");
    }
  }, 2000);
});

//2. Truy cập kết quả Promise

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Xong");
//   });

//chain: a().b().c()
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error F8");
    // resolve("F8");
  }, 1000);
});
const myPromise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("F9");
  }, 1000);
});
myPromise
  .then((data) => {
    console.log(data);
    return myPromise2;
  })
  .then((data) => {
    console.log(data);
    return myPromise3;
  })
  .catch((err) => {
    console.log(err);
    return myPromise3;
  })
  .then((data) => {
    console.log(data);
  });
