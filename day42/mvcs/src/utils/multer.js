const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = process.cwd() + "/uploads";
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const allowType = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
    if (!allowType.includes(file.mimetype)) {
      return cb(new Error("Định dạng file không được phép"), "");
    }
    const random = Math.random() + Date.now() + "";
    const filename = crypto.createHash("md5").update(random).digest("hex");
    // const filename = crypto.randomUUID();
    const ext = path.extname(file.originalname);
    const newFile = `${filename}${ext}`;
    cb(null, newFile);
  },
});

module.exports = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024, //1mb
  },
});
