// UserId// CreatedAt: DateTime// Admin attendanceId

const { Schema, model } = require(mongoose);

const studentAttendanceSchema = new Schema({
  createdAt: Date,
  adminAttendanceId: {
    type: Schema.types.objectId,
    ref: "adminAttendance",
  },
  userId: {
    type: Schema.types.objectId,
    ref: "user",
  },
});

const studentAttendance = model("studentAttendance", studentAttendanceSchema);
module.exports = studentAttendance;
