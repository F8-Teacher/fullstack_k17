const userService = require("../services/user.service");
const { successResponse, errorResponse } = require("../utils/response");
module.exports = {
  index: (req, res) => {
    //Tiếp nhận request
    // console.log(req.user);

    //Gọi Service
    const users = userService.getUsers();

    // return errorResponse(
    //   res,
    //   "Validate failed",
    //   {
    //     name: "Name is required",
    //   },
    //   400,
    // );
    // return successResponse(res, users, "Get list users success"); //response
    //status code
    //template response
    const title = "<i>Hello</i>";
    const content = `<h2>Content</h2>`;
    const status = false;
    return res.render("users/index", {
      title,
      content,
      status,
      users,
    });
  },
  find: (req, res) => {
    res.render("users/detail");
  },
  create: (req, res) => {
    console.log(req.body);
    res.send("Create user");
  },
};
