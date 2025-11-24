const items = document.querySelectorAll("ul li");
const ul = document.querySelector("ul");
items.forEach((item) => {
  const downBtn = item.querySelector(".down");
  const upBtn = item.querySelector(".up");
  upBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const prevEl = item.previousElementSibling;
    if (!prevEl) {
      return;
    }
    ul.insertBefore(item, prevEl);
  });
  downBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const nextEl = item.nextElementSibling;
    if (!nextEl) {
      return;
    }
    ul.insertBefore(nextEl, item);
  });

  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const selectedEl = ul.querySelector(".selected");
    item.classList.add("selected");
    if (selectedEl) {
      selectedEl.classList.remove("selected");
    }
  });
});

document.addEventListener("click", () => {
  const selectedEl = ul.querySelector(".selected");
  if (selectedEl) {
    selectedEl.classList.remove("selected");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.altKey) {
    if (e.key === "ArrowDown") {
      const selectedEl = ul.querySelector(".selected");
      if (!selectedEl) {
        return;
      }
      const itemClone = selectedEl.cloneNode(true);
      itemClone.classList.remove("selected");
      ul.insertBefore(itemClone, selectedEl.nextElementSibling);
    }
    if (e.key === "ArrowUp") {
      const selectedEl = ul.querySelector(".selected");
      if (!selectedEl) {
        return;
      }
      const itemClone = selectedEl.cloneNode(true);
      itemClone.classList.remove("selected");
      ul.insertBefore(itemClone, selectedEl);
    }
  }
});
