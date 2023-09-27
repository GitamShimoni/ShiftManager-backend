const User = require("../Models/user");
const Shift = require("../Models/shift");
const jwt = require("jsonwebtoken");

const fetchAllShifts = async (req, res) => {
  try {
    const allShifts = await Shift.find({});
    return res.status(200).json(allShifts);
  } catch {
    res.status(500).message("Couldn't fetch Shifts.");
  }
};

const CreateNewShift = async (req, res) => {
  const { token, shifts } = req.body;
  console.log(shifts);
  try {
    const username = jwt.verify(token, process.env.SECRET);
    console.log(username, shifts);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  fetchAllShifts,
  CreateNewShift,
};
