const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema(
  {
    name: String,
    domain: String,
    area: String,
  },
  { timestamps: true }
);

const University = mongoose.model("University", universitySchema);

module.exports = University;
