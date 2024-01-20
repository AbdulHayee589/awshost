const mongoose = require("mongoose");

const ChallengesSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    skills: [],

    learns: [],
    selectedItem: [],
    selectedLanguage: [],
    defaults: String,
    type: String,
    duration: String,
    difficulty: String,
    tools: [],
    company: {
      type: String,
    },
    alltask: [
      {
        taskTitle: String,
        taskBackground: String,
        terms: String,
        task: String,
        external: [String],
        introVideo: String,
        documents: [],

        questions: [],
      },
    ],
    selectedFile: String,
    selectedVideo: String,
    email: String,
    count: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

const Challenge = mongoose.model("Challenges", ChallengesSchema);

module.exports = Challenge;
