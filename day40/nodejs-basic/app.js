// const fs = require("fs/promises");

// const content = fs.readFileSync("./data/data.txt", "utf-8");
// console.log(content);

// fs.readFile("./data/data.txt1", (err, data) => {
//   console.log(err);

//   console.log(data.toString());
// });

// const readContent = async () => {
//   const content = await fs.readFile("./data/data.txt", "utf-8");
//   console.log(content);
// };
// readContent();

// const writeFile = async () => {
//   await fs.writeFile("./data/data.txt", "Anh em K17\n", {
//     flag: "a+",
//   });
// };
// writeFile();

// const deleteFile = async () => {
//   await fs.unlink("./data/data.txt");
// };
// deleteFile();

// const readFolder = async () => {
//   const data = await fs.readdir("./data");
//   console.log(data);
// };
// readFolder();

//url
// const url = require("url");
// const fullUrl = `https://f8.edu.vn:8080/khoa-hoc/nodejs?s=abc&type=paid`;
// const urlParsed = url.parse(fullUrl, true);
// console.log(urlParsed);
// console.log(urlParsed.query.type);
// const url = new URL(fullUrl);
// console.log(url);

//path
// console.log(__dirname);
// console.log(__filename);
// require("./modules/user");

const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  //Request
  //   const method = req.method;
  //   console.log(`method: ${method}`);
  const apiKey = req.headers["x-api-key"];
  const urlParsed = url.parse(req.url, true);
  res.setHeader("Content-Type", "application/json");
  if (apiKey !== "123") {
    res.statusCode = 401;
    res.write(
      JSON.stringify({
        message: "Unauthorize",
      }),
    );
    res.end();
    return;
  }
  if (urlParsed.pathname === "/") {
    res.write(JSON.stringify({}));
  } else if (urlParsed.pathname === "/users") {
    const user = {
      id: 1,
      name: "User 1",
    };
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(
      JSON.stringify({
        message: "Not found",
      }),
    );
  }

  res.end(); //Kết thúc quy trình request, response
});
server.listen(3000, () => {
  console.log(`Đang chạy với port 3000`);
});

//request:
// - method
// - body
// - headers
// - url

//response:
// - status
// - body
// - header
