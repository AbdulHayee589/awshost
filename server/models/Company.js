const mongoose = require("mongoose");

const Companycreate = new mongoose.Schema(
  {
    title: String,
    img: String,
    createdBy: String,

    link: String,
    website: String,
    industry: String,
    size: String,
    Type: String,
    tagline: String,
    interest: [],
    country: [],
    uniqueId: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Companies", Companycreate);

module.exports = Company;
