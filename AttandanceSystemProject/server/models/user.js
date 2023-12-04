const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  roles: [String],
  accountStatus: String,
});

const user = model("user", userSchema);

module.exports = user;
