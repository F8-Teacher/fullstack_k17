const { successResponse } = require("../utils/response");

module.exports = {
  upload: (req, res) => {
    const host = `${req.protocol}://${req.get("host")}`;
    return successResponse(res, {
      url: `${host}/uploads/${req.file.filename}`,
    });
  },
};
