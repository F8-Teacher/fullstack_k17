const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const indexRoute = require("./src/routes");
const { errorResponse } = require("./src/utils/response");
const app = express();
app.use(express.json()); //parse body bằng json
app.use(express.urlencoded()); //parse body bằng urlendcoded

app.set("views", `${path.join(__dirname, "src", "views")}`);
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static("public"));

app.use(indexRoute);

//Error handling 404
app.use((req, res, next) => {
  errorResponse(res, "Not found", {}, 404);
});

//Error exception
app.use((error, req, res, next) => {
  errorResponse(
    res,
    "Server Error",
    {
      exception: error.message,
    },
    error.status || 500,
  );
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
