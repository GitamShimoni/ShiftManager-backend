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

const CreateShiftRequest = async (req, res) => {
  console.log("hii")
  const {
    day,
    endDate,
    endShiftHour,
    endShiftMinutes,
    hour,
    id,
    startDate,
    startShiftHour,
    startShiftMinutes,
    title
  } = req.body;
  try {
    const newShift = await Shift.create({
      day,
      endDate,
      endShiftHour,
      endShiftMinutes,
      hour,
      id,
      startDate,
      startShiftHour,
      startShiftMinutes,
      status:"accept",
      title
    });
    console.log(newShift)
    return res.status(200).json(newShift);
  } catch (err) {
    res.status(500).json(err + "Shift Could Not Be Created!");
  }
};

module.exports = {
  fetchAllShifts,
  CreateShiftRequest
};
