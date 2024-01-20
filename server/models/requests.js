const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    firstName: String,
    LastName: String,
    EmailAddress: String,
    uni: String,
    selectedItem: [],
  },
  { timestamps: true }
);

const Requests = mongoose.model("Requests", requestSchema);

module.exports = Requests;
