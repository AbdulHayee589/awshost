const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
  {
    preview: [],
    user: [],
    selectedAnswer: [],
    id: String,
  },
  { timestamps: true }
);

const Test = mongoose.model("TestsTaken", TestSchema);

module.exports = Test;
