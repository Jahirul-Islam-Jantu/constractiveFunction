const { model, Schema } = require("mongoose");

const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNo: String,
  profilePicture: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const profile = model("profile", profileSchema);

module.exports = profile;
