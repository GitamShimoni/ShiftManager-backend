const User = require("../Models/user");
const Shift = require("../Models/shift");

const fetchAllShifts = async (req, res) => {
  try {
    const allShifts = await Shift.find({});
    return res.status(200).json(allShifts);
  } catch {
    res.status(500).message("Couldn't fetch Shifts.");
  }
};

module.exports = {
  fetchAllShifts,
};
