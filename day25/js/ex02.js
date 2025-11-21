//DOM Navigation: Chọn các phần tử khác từ 1 phần tử đã có
// - element.parentElement --> Chọn phần tử cha
// - element.children --> Chọn phần tử con gần nhất (Danh sách)
// - element.nextElementSibling --> Chọn phần tử kế tiếp
// - element.previousElementSibling --> Chọn phần tử phía trước

// const btnList = document.querySelectorAll("button");
// btnList.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // console.log(btn.parentElement.parentElement);
//     const boxEl = btn.parentElement.parentElement;
//     console.log(boxEl.previousElementSibling);
//   });
// });

const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  item.children[0].addEventListener("click", () => {
    if (item.children[1]) {
      item.children[1].classList.add("show");
    }
  });
});
