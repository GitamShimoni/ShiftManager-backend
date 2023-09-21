const shiftService = require("../Controllers/shift.controller");
const express = require("express");

const router = express.Router();

router.route("/fetchAllShifts").get(shiftService.fetchAllShifts);

// router.route("/getUser").post(userService.getUser);

module.exports = router;
