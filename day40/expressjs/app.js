const express = require("express");
const app = express();
app.use(express.json()); //parse body bằng json
app.use(express.urlencoded()); //parse body bằng urlendcoded
app.get("/", (req, res) => {
  res.send("<h1>Hello anh em</h1>");
});
app.get("/users", (req, res) => {
  //request
  //   console.log(req.url);
  //   console.log(req.method);
  //   console.log(req.headers["x-api-key"]);
  //   console.log(req.get("x-api-key"));
  const keyword = req.query.keyword;
  res.send(`
    <h1>Keyword: ${keyword}</h1>
    <form method="post">
        <input type="text" name="name" /> <br/>
        <input type="email" name="email" /> <br/>
        <button>Submit</button>
    </form>
    `);
});

app.get("/users/:id", (req, res) => {
  res.send(`<h1>Chi tiết: ${req.params.id}</h1>`);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("Create user");
});

app.get("/products", (req, res) => {
  console.log(req.headers["cookie"]);

  //   res.status(404);
  //   res.set("x-api-key", "ahihi");
  //   res.redirect("/");
  //   res.json({
  //     name: "SP 1",
  //     price: 12000,
  //   });
  //   res.status(301);
  //   res.set("Location", "/");
  res.set("Set-Cookie", "email=a@mail.com;path=/;httpOnly;max-age=3600");
  res.send("");
});

app.listen(3000, () => {
  console.log("Đang chạy với port 3000");
});

//method
// - get
// - post
// - put
// - patch
// - delete
