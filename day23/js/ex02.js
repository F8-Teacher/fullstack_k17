//Event
//fire --> listener (function)

//Cú pháp lắng nghe sự kiện
//element.on<ten-su-kien> = function() { Logic }
const btn = document.querySelector(".btn");
let count = 0;
// btn.onclick = function (e) {
//   //   console.log("Ok chưa?");
//   //   console.log(this);
//   //   console.log(e);
//   count++;
//   console.log(count);

//   btn.innerText = `Click me: ${count}`;
//   if (count === 5) {
//     btn.onclick = null;
//   }
// };

// btn.onmouseover = function () {
//   console.log("Over mouse");
// };

// btn.onmouseout = function () {
//   console.log("Over mouse");
// };

// btn.onclick = () => {
//   console.log("click one");
// };
// btn.onclick = () => {
//   console.log("click two");
// };

//addEventListener(event-name, listener)
const handleClick = () => {
  count++;
  btn.innerText = `Click me: ${count}`;
  if (count === 5) {
    btn.removeEventListener("click", handleClick);
  }
};
btn.addEventListener("click", handleClick);

//Danh sách các event hay dùng
// - click
// - dblclick
// - mouseover
// - mouseout
// - mousemove
// - mousedown
// - mouseup
// - keydown
// - keyup
// - submit
// - change
// - input
// - focus
// - blur
// const contentEl = document.querySelector(".content");
// contentEl.addEventListener("copy", () => {
//   console.log(`Bạn vừa copy`);
// });

// const items = document.querySelectorAll("ul li");
// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(item);
//   });
// });
