// const a = 10;
// const b = 20;
// module.exports = {
//   a,
//   b,
// };
const path = require("path");
// const fs = require("fs");
// const dataPath = path.join(__dirname, "..", "data", "a", "data.txt");
// console.log(dataPath);

// const content = fs.readFileSync(dataPath, "utf-8");
// console.log(content);

// console.log(process.cwd());

const myPath = "uploads/images/anh1.jpg";
// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
console.log(path.resolve(myPath));
