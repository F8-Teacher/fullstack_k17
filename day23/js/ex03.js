//DOM HTML: Các thao tác với 1 thẻ html
// const contentEl = document.querySelector(".content");
//1. Lấy nội dung bên trong
// console.log(contentEl.innerHTML);

// console.log(contentEl.innerText);

// console.log(contentEl.textContent);

//2. Lấy nội dung bên trong và chính nó
// console.log(contentEl.outerHTML);

//3. Cập nhật nội dung bên trong
// contentEl.innerHTML = `<h2>Xin chào ae</h2>`;
// contentEl.innerText = `<h2>Xin chào ae</h2>`;
// contentEl.textContent = `<h2>Xin chào ae</h2>`;
// contentEl.outerHTML = `<h2>Xin chào ae</h2>`;

//4. Xóa phần tử html
// contentEl.remove();

// const contentEl = document.querySelector(".content");
// const btn = document.querySelector("button");
// let contentInnerHTMl = contentEl.innerHTML;

// btn.addEventListener("click", (e) => {
//   if (contentEl.innerHTML) {
//     btn.innerText = "Hiện";
//     contentEl.innerHTML = "";
//   } else {
//     btn.innerText = "Ẩn";
//     contentEl.innerHTML = contentInnerHTMl;
//   }
// });

//Attribute
// const imgEl = document.querySelector("img");
// console.log(imgEl.src);
// console.log(imgEl.title);
// console.log(imgEl.alt);
// console.log(imgEl.id);
// console.log(imgEl.width);
// console.log(imgEl.height);
// console.log(imgEl.className);

// imgEl.src =
//   "https://fastly.picsum.photos/id/552/536/354.jpg?hmac=Nh5d2xbHHM6VW4ZvGKkunjVMSxeXf0zdRawmX6MxvRo";

const image = document.querySelector(".image");
const input = document.querySelector("input");
const btn = document.querySelector("button");
btn.disabled = true;
input.addEventListener("input", () => {
  if (input.value) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});
btn.addEventListener("click", () => {
  //   const html = `<img src="${input.value}" width="300"/>`;
  //   image.innerHTML = html;
  const img = document.createElement("img");
  img.src = input.value;
  img.width = 300;
  image.innerHTML = ""; //reset html inner
  console.dir(img);

  image.append(img);
  input.value = "";
});

//" onerror="window.location.href='https://fullstack.edu.vn'"

//Giải thích
// Nếu dùng string: biến thuộc tính onerror --> event --> hoạt động
// Nếu dùng node: Không biến thuộc tính onerror thành --> event --> src: Link ảnh không hợp lệ
