const userService = require("../Controllers/user.controller");
const express = require("express");

const router = express.Router();

router.route("/fetchUser").get(userService.fetchUser);
router.route("/createUser").post(userService.createUser);
router.route("/deleteUser").delete(userService.deleteUser);
router.route("/updateUser").patch(userService.updateUser);
router.route("/loginFunc").post(userService.loginFunc);
// router.route("/getUser").post(userService.getUser);

module.exports = router;
