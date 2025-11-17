//DOM = Document Object Model
//Element Node
//Attribute Node
//Text Node
// console.dir(document);

// console.log(document.body.children[0].children[0].attributes);

//Truy cập vào element node
//1. document.getElementById(id)
// const h1 = document.getElementById("title");
// console.log(h1);

//2. document.getElementsByClassName(ten-class)
// const boxList = document.getElementsByClassName("box");
// console.log(boxList);
// boxList[0].innerText = "Ok";

//3. document.getElementsByTagName(ten-class)
// const boxList = document.getElementsByTagName("div");
// console.log(boxList);
// boxList[1].innerText = "Ahihi";

//4. document.querySelector(css-selector)
// const h1 = document.querySelector("#title");
// console.log(h1);

// const box = document.querySelector(".box:nth-of-type(2)");
// console.log(box);

//5. document.querySelectorAll(css-selector)
// const boxList = document.querySelectorAll(".box");
// console.log(boxList);

// const items = document.querySelectorAll(".box2 .content ul li");
// console.log(items);

// const box2 = document.querySelector(".box2");
// const content = box2.querySelector(".content");
// const items = content.querySelectorAll("ul li");
// console.log(items);

//Tạo element node: document.createElement('tag-name')

// const box2 = document.querySelector(".box2");
// const h1 = document.createElement("h1");
// h1.innerText = "Xin chào";
// document.body.insertBefore(h1, box2.nextElementSibling);
