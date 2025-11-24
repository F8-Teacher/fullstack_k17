//mousedown
//mouseup
//mousemove
// - Khi user mousedown --> Thêm mousemove
// - Khi user mouseup --> Bỏ mousemove

let isDrag = false;
const btn = document.querySelector("button");
const box = document.querySelector(".box");
const boxStartX = box.offsetLeft;
const boxEndX = box.offsetLeft + box.clientWidth;
const boxStartY = box.offsetTop;
const boxEndY = box.offsetTop + box.clientHeight;
const offsetLeftBtn = btn.offsetLeft;
const offsetTopBtn = btn.offsetTop;
const boxBorderWidth = window
  .getComputedStyle(box)
  .borderWidth.replace("px", "");

const inital = {
  x: 0,
  y: 0,
};

const handleMouseup = (e) => {
  if (isDrag) {
    document.removeEventListener("mousemove", handleDrag);
    box.classList.remove("drag");

    if (e.clientX >= boxStartX && e.clientY >= boxStartY) {
      Object.assign(btn.style, {
        left: `${boxEndX - btn.offsetWidth + +boxBorderWidth}px`,
        top: `${boxEndY - btn.offsetHeight + +boxBorderWidth}px`,
      });
    } else {
      Object.assign(btn.style, {
        top: offsetTopBtn + "px",
        left: offsetLeftBtn + "px",
      });
    }
    isDrag = false;
  }
};

const handleMousedown = (e) => {
  if (e.button !== 0) {
    return;
  }
  inital.x = e.offsetX;
  inital.y = e.offsetY;
  document.addEventListener("mousemove", handleDrag);
};

const handleDrag = (e) => {
  isDrag = true;
  const css = {
    left: e.clientX - inital.x + "px",
    top: e.clientY - inital.y + "px",
  };
  Object.assign(btn.style, css);
  box.classList.add("drag");
  if (e.clientX >= boxStartX && e.clientY >= boxStartY) {
    box.classList.replace("drag", "drop");
  } else {
    box.classList.replace("drop", "drag");
  }
};

btn.addEventListener("mousedown", handleMousedown);

document.addEventListener("mouseup", handleMouseup);
