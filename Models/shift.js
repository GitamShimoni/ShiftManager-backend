const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema({
  day: { type: String, required: true },
  endDate: { type: Date, required: true },
  endShiftHour: { type: Number, required: true },
  endShiftMinutes: { type: Number, required: true },
  hour: { type: String, required: true },
  id: { type: String, required: true },
  startDate: { type: Date, required: true },
  startShiftHour: { type: Number, required: true },
  startShiftMinutes: { type: Number, required: true },
  status: { type: String, required: true },
  title: { type: String, required: true },
});

// day: "friday";
// endDate: "2023-09-08T10:00:00.000Z";
// endShiftHour: 13;
// endShiftMinutes: 0;
// hour: "morning";
// id: "08.09.2023morningGitamOfek";
// startDate: "2023-09-08T06:00:00.000Z";
// startShiftHour: 9;
// startShiftMinutes: 0;
// status: "accept";
// title: "GitamOfek";

module.exports = mongoose.model("Shift", shiftSchema);
