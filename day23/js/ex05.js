const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  const btn = item.querySelector("button");
  btn.addEventListener("click", () => {
    //Chọn phần tử đang có active
    const itemActive = document.querySelector(".active");
    if (itemActive && itemActive !== item) {
      itemActive.classList.remove("active");
      const btnActive = itemActive.querySelector("button");
      btnActive.innerText = "show";
    }
    item.classList.toggle("active");
    btn.innerText = item.classList.contains("active") ? "hide" : "show";
  });
});
