const express = require("express");
const indexRoute = require("./src/routes");
const app = express();
app.use(express.json()); //parse body bằng json
app.use(express.urlencoded()); //parse body bằng urlendcoded
app.use(indexRoute);
app.listen(3000, () => {
  console.log("Đang chạy với port 3000");
});

//method
// - get
// - post
// - put
// - patch
// - delete
