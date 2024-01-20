const mongoose = require("mongoose");

const organisation = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    jobTitle: String,
    email: String,
    phone: String,
    country: [],
    profilephoto: String,
    tagline: String,
    company: String,
    uniqueId: {
      type: String,
      unique: true,
    },
    Role: String,
  },
  { timestamps: true }
);

const Organiser = mongoose.model("Organiser", organisation);

module.exports = Organiser;
