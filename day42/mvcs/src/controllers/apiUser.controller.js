const { successResponse, errorResponse } = require("../utils/response");
module.exports = {
  index: (req, res) => {
    res.set(`Access-Control-Allow-Origin`, `http://localhost:1234`);
    return successResponse(
      res,
      [
        {
          id: 1,
          name: "User 1",
        },
      ],
      "Get User Success",
    );
  },
  update: (req, res) => {
    console.log(req.headers["origin"]);

    res.set(`Access-Control-Allow-Origin`, `http://localhost:1234`);
    res.set(`Access-Control-Allow-Credentials`, "true");
    res.json({});
  },
  preflight: (req, res) => {
    res.set(`Access-Control-Allow-Origin`, `http://localhost:1234`);
    res.set(`Access-Control-Allow-Headers`, "Content-Type");
    res.set(`Access-Control-Allow-Methods`, "PUT");
    res.set(`Access-Control-Allow-Credentials`, "true");
    res.json({});
  },
};
