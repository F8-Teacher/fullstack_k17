//try...catch
// try {
//   //   abc(); //--> catch
//   //   sayHi();
//   let a = 1;
//   if (a <= 10) {
//     const err = new Error("Không thỏa mãn điều kiện");
//     err.status = 500;
//     throw err;
//   }
//   console.log("a");
// } catch (error) {
//   console.log(error.message);
//   console.log(error.status);
// } finally {
//   console.log("Kết thúc");
// }
// // abc();
// console.log("ok");

//async/await
// - async function: Hàm này sẽ bọc 1 promise (promise wrapper)
// - await: Đợi promise resolve
//Cú pháp: await promise
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error");
//     // resolve("Result");
//   }, 2000);
// });
// const myPromise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Result 2");
//   }, 1000);
// });
// const doSomething = async () => {
//   try {
//     const data1 = await myPromise;
//     console.log(data1);
//   } catch (error) {
//     console.log(error);
//   }
// };
// doSomething();

// const getUser = (userId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const users = [
//         {
//           id: 1,
//           name: "User 1",
//           salary: 1000,
//         },
//         {
//           id: 2,
//           name: "User 2",
//           salary: 2000,
//         },
//         {
//           id: 3,
//           name: "User 3",
//           salary: 3000,
//         },
//       ];
//       const user = users.find((user) => user.id === userId);
//       resolve(user);
//     }, Math.random() * 2000);
//   });
// };
// const ids = [1, 2, 3];

// const getSalary = async () => {
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const id = ids[i];
//     const user = await getUser(id);
//     total += user.salary;
//   }
//   console.log(total);
// };

// (async () => {
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const id = ids[i];
//     const user = await getUser(id);
//     total += user.salary;
//   }
//   console.log(total);
// })();

// const myPromise = new Promise((resolve) => {
//   resolve({
//     content: new Promise((resolve) => {
//       resolve("Hello anh em");
//     }),
//   });
// });
// const myPromise2 = new Promise((resolve) => {
//   resolve(new Promise((resolve) => resolve("F8")));
// });
// const myPromise3 = Promise.reject("Error");
// const doSomething = async () => {
//   //log ==> Hello anh em
//   //   const data = await myPromise;
//   //   const result = await data.content;
//   //   console.log(result);
//   //   const data = await myPromise2;
//   //   console.log(data);
//   try {
//     return await myPromise3;
//   } catch (error) {
//     // console.log(error);
//     return Promise.reject(error);
//     // throw error;
//   }
// };
// doSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//A (Promise) --> B (Promise) --> A --> [B]

const getUser = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "User 1",
          salary: 1000,
        },
        {
          id: 2,
          name: "User 2",
          salary: 2000,
        },
        {
          id: 3,
          name: "User 3",
          salary: 3000,
        },
      ];
      const user = users.find((user) => user.id === userId);
      resolve(user);
    }, Math.random() * 2000);
  });
};

const ids = [1, 2, 3];

const getSalary = async () => {
  //   let total = 0;
  //   ids.forEach(async (id) => {
  //     const user = await getUser(id);
  //     total += user.salary;
  //   });
  //   console.log(total);
  const users = await Promise.all(ids.map((id) => getUser(id)));
  const total = users.reduce((prev, cur) => prev + cur.salary, 0);
  console.log(total);
};
getSalary();

//Yêu cầu: Tính tổng (Không được dùng for, for of, for in)
