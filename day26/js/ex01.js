// const root = document.querySelector("#root");
// root.innerHTML = `
// <h1>Xin chào</h1>
// <button class="btn-1">Click me 1</button>
// <button class="btn-2">Click me 2</button>
// `;

// const btn1 = root.querySelector(".btn-1");
// const btn2 = root.querySelector(".btn-2");
// const h1 = root.querySelector("h1");
// btn1.addEventListener("click", () => {
//   h1.innerText = "Xin chào F8";
// });
// btn2.addEventListener("click", () => {
//   root.innerHTML = `<h1>Xin chào 2</h1>
//     <button class="btn-1">Click me 1</button>
//     <button class="btn-2">Click me 2</button>
//   `;
// });

const root = document.querySelector("#root");
//createElement
const h1 = document.createElement("h1");
h1.innerText = "Xin chào";

const button = document.createElement("button");
button.innerText = "Click me";

const h2 = document.createElement("h2");
h2.innerText = "Học lập trình không khó";

const ul = document.createElement("ul");

root.append(h1);
root.append(button);
root.prepend(h2);
root.append(ul);

button.addEventListener("click", () => {
  h1.innerText = "Xin chào anh em";
  const li = document.createElement("li");
  li.innerText = `New Item: ${ul.children.length + 1}`;
  ul.append(li);
});

//insertBefore
const p = document.createElement("p");
p.innerText = "Okla";
root.insertBefore(p, h1);

//insertAfter
const h3 = document.createElement("h3");
h3.innerText = "DOM";
root.insertBefore(h3, h1.nextElementSibling);

//replaceChild
const div = document.createElement("div");
div.innerText = "Xin chào anh em";
root.replaceChild(div, p);

root.append(p);

//removeChild
root.removeChild(div);

//textNode
const h2Count = document.createElement("h2");
h2Count.innerText = `Count: `;
const textNode = document.createTextNode(0);
h2Count.append(textNode);
// const span = document.createElement("span");
// span.innerText = 0;
// h2Count.append(span);
root.append(h2Count);
const upBtn = document.createElement("button");
upBtn.innerText = `Increment`;
root.append(upBtn);
upBtn.addEventListener("click", () => {
  textNode.data++;
  //   span.innerText++;
});
