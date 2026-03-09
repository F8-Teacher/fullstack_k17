const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const session = require("express-session");
const morgan = require("morgan");
const indexRoute = require("./src/routes");
const apiRoute = require("./src/routes/api");
const { errorResponse } = require("./src/utils/response");
const app = express();
app.use(morgan("tiny"));
app.use(express.json()); //parse body bằng json
app.use(express.urlencoded()); //parse body bằng urlendcoded
app.use(
  session({
    secret: "88751787b599b7f6cafed6cfef90bdfcab7ca261b02d1a7dab6104b27873c502",
    resave: false,
    saveUninitialized: true,
  }),
);
app.set("views", `${path.join(__dirname, "src", "views")}`);
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

app.use(indexRoute);
app.use("/api", apiRoute);

//Error handling 404
app.use((req, res, next) => {
  errorResponse(res, "Not found", {}, 404);
});

//Error exception
app.use((error, req, res, next) => {
  if (error.message === "File too large") {
    return errorResponse(
      res,
      "Upload filesize",
      {
        exception: "Dung lượng file quá lớn",
      },
      400,
    );
  }
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
