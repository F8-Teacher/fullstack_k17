const express = require("express");
const homeController = require("../controllers/home.controller");
const userController = require("../controllers/user.controller");
const productController = require("../controllers/product.controller");
const logggerMiddleware = require("../middlewares/logger.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const uploadController = require("../controllers/upload.controller");
const upload = require("../utils/multer");
const router = express.Router();
router.use(logggerMiddleware, authMiddleware);
router.get("/", homeController.index);
router.get("/users", userController.index);
router.get("/users/:id", userController.find);

router.post("/users", userController.create);
router.get("/products", productController.index);

router.post("/upload", upload.single("image"), uploadController.upload);
module.exports = router;
