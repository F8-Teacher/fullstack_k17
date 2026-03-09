const express = require("express");
const apiUserController = require("../controllers/apiUser.controller");

const router = express.Router();

router.options(`/users`, apiUserController.preflight);
router.get("/users", apiUserController.index);
router.put("/users", apiUserController.update);

module.exports = router;
