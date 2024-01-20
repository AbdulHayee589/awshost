const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    LastName: String,
    EmailAddress: String,
    uni: String,
    selectedItem: [],
    levelofstudy: String,
    gender: String,
    intake: {},
    graduation: {},
    languages: [],
    field: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
