const { login, create } = require("./users.controller.js");
const router = require("express").Router();
console.log("$$$");
router.post("/", create);
console.log("###");
router.post("/login", login);

module.exports = router;
