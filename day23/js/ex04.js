//classList
// const box = document.querySelector(".box");
// box.className += " ahihi";
// console.log(box.classList);

// console.log(box.classList[0]);

//1. add() --> Thêm class
// box.classList.add("box-1", "box-2", "box-3");

//2. remove() --> Xóa class
// box.classList.remove("box-1", "box-3");

//3. replace() --> Thay thế class
// box.classList.replace("box-2", "content-2");

//4. contains() --> Kiểm tra class có tồn tại không?
// console.log(box.classList.contains("box-3"));

//5. toggle()
// box.classList.toggle("active");
// box.classList.toggle("active");

const box = document.querySelector(".box");
const btn = document.querySelector("button");
const animationStatus = box.dataset.animation;
const animationDuration = box.dataset.animationDuration;
const durationValue = animationDuration || 300;

btn.addEventListener("click", () => {
  btn.innerText = box.classList.contains("show") ? "Hide" : "Show";
  if (animationStatus === "false" || animationStatus === undefined) {
    box.classList.toggle("hide");
    return;
  }
  box.style.transition = `opacity ${durationValue}ms ease`;
  if (!box.classList.contains("hide")) {
    box.classList.remove("show");
    setTimeout(() => {
      box.classList.add("hide");
    }, durationValue);
  } else {
    box.classList.remove("hide");
    setTimeout(() => {
      box.classList.add("show");
    }, durationValue);
  }
});

//dataset
// console.log(box.dataset);

// console.log(box.dataset.id); //data-id
// box.dataset.id = 20; //data-id
// box.dataset.animationDuration = "2s"; //data-animation-duration

//DOM CSS
// console.log(box.style);
// box.style.color = "red";
// box.style.backgroundColor = "yellow";
// box.style.fontStyle = "italic";
// console.log(box.style.color);

// box.style.fontStyle = null;

// const css = {
//   color: "red",
//   backgroundColor: "yellow",
//   fontStyle: "italic",
// };
// Object.assign(box.style, css);
