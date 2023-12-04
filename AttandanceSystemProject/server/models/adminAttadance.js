const { model, Schema } = require("mongoose");

const adminAttendanceSchema = new Schema({
  timeLimit: String,
  status: String,
  createdAt: Date,
});

const adminAttendance = model("adminAttendance", adminAttendanceSchema);
module.exports = adminAttendance;
