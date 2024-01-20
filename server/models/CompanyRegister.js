const mongoose = require("mongoose");

const CompanyRegister = new mongoose.Schema(
  {
    EmailAddress: String,
    password: String,
    selected: String,
    uniqueId: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const CompanyReg = mongoose.model("CompanyRegister", CompanyRegister);

module.exports = CompanyReg;
