const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  spn_id: { type: String, required: true },
  package: { type: String, required: true },
  uni_code: { type: String, required: true },
  serial_no: { type: String, required: true },
  title: { type: String, required: true },
  name: { type: String, required: true },
  DOB: { type: String, required: true },
  Mob: { type: String, required: true },
  pan_no: { type: String, required: true },
  address: { type: String, required: true },
  pin: { type: String, required: true },
  acc_no: { type: String, required: true },
  bank: { type: String, required: true },
  branch: { type: String, required: true },
  mode: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
