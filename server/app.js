const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const User = require("./models/user");
const University = require("./models/university");
const Requests = require("./models/requests");
const CompanyReg = require("./models/CompanyRegister");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const Company = require("./models/Company");
const path = require("path");
const Organiser = require("./models/Organizer");
const Challenge = require("./models/Challenges");
const Test = require("./models/TestTaken");
//CONFIGURATION
const app = express();
dotenv.config();
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true }));

// ... (other imports)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(cors());
//   {
//   origin: "https://varyance-4nx4.vercel.app",
//   credentials: true,
// }

//STRIPE code here

// API routes for inserting and getting user list
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/download/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "/uploads", filename);
  res.download(filePath, filename);
});

// Insert a new user
app.post("/api/users", async (req, res) => {
  try {
    const { email } = req.body;
    const userEmailDomain = email.split("@")[1];
    const matchingUniversity = await University.findOne({
      domain: userEmailDomain,
    });
    if (!matchingUniversity) {
      const publicEmailDomainPattern =
        /@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|protonmail\.com|mail\.com)$/;
      if (publicEmailDomainPattern.test(email)) {
        return res
          .status(400)
          .json({ error: "User email domain does not match any university." });
      }
    }
    const user = User.find({ email });
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(200).json({
      user: savedUser,
      message: "Successfuly created",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      users: users,
      message: "Successfuly list fetched ",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//
app.post("/getchallenges", async (req, res) => {
  try {
    const { selectedItem } = req.body;
    console.log(selectedItem.length);

    const findChallengesByInterests = async (selectedItem) => {
      const companies = await Challenge.find({
        "selectedItem.id": { $in: selectedItem.map((item) => item.id) },
      }).exec();
      return companies;
    };

    // Finding challenges for the selected items
    const challengesForSelectedItems = await findChallengesByInterests(
      selectedItem
    );

    // Map challenges and replace filename with file URL
    const challengesWithFileURLs = challengesForSelectedItems.map(
      (challenge) => {
        return {
          ...challenge._doc, // Assuming challenges are Mongoose documents
          selectedFile: challenge.selectedFile
            ? `/uploads/${challenge.selectedFile}`
            : null,
          selectedVideo: challenge.selectedVideo
            ? `/uploads/${challenge.selectedVideo}`
            : null,
          // Add similar lines for other file fields as needed
        };
      }
    );

    if (challengesWithFileURLs.length === 0) {
      res.json({ message: "No records found" });
    } else {
      res.json({ challenges: challengesWithFileURLs });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Verify user API
app.post("/api/verify-user", async (req, res) => {
  try {
    const { email, code } = req.body;
    console.log({ email, code });
    // Check if the provided code matches the code in the user's record
    const user = await User.findOne({ email: email, code: code });

    if (user) {
      console.log(user.code, code);
      // Code is valid, clear the code from the user's record
      await User.findOneAndUpdate({ email }, { $unset: { code: 1 } });

      res.status(200).json({ message: "User verified successfully." });
    } else {
      res.status(400).json({ error: "Invalid code or email." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//
app.post("/create/company", async (req, res) => {
  try {
    const {
      email,
      name, // Assuming 'name' is the title of the company
      companyLink,
      website,
      industry,
      size,
      type,
      selectedFile,
      tagline,
      selectedItem,
      country,
    } = req.body;

    const matchingCompany = await Company.findOne({
      title: name,
    });

    if (matchingCompany) {
      // A company with the same title already exists
      res.status(202).json({ message: "Already" });
    } else {
      const uniqueId = uuid.v4();
      const newCompany = new Company({
        title: name,
        img: selectedFile,
        createdBy: email,
        link: companyLink,
        website: website,
        industry: industry,
        size: size,
        Type: type,
        tagline: tagline,
        interest: selectedItem,
        country: country,
        uniqueId: uniqueId,
      });

      const savedUser = await newCompany.save();
      res.status(200).json({ message: "Created", savedUser });
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
    console.log(err);
  }
});

app.post("/create/profile/user", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      jobTitle,
      phone,
      country,
      selectedFile,
      tagline,
      Role,
      email,
      company,
    } = req.body;
    const uniqueId = uuid.v4();
    const newUser = new Organiser({
      firstName,
      lastName,
      jobTitle,
      phone,
      country,
      profilephoto: selectedFile,
      tagline,
      uniqueId,
      Role,
      email,
      company,
    });

    const savedUser = await newUser.save();
    res.status(200).json({ message: "Created", savedUser });
  } catch (err) {
    res.status(500).json({ err: err.message });
    console.log(err);
  }
});
//GETUSERINFO
app.post("/getUserInfo", async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    const user = await Organiser.findOne({ email: email });
    if (user) {
      res.json({ user: user, message: "Found" });
    } else {
      res.status(404).json({ message: "Logout" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
});

//GET COMPANY INFO
app.post("/getCompanyInfo", async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const user = await Company.findOne({ uniqueId: id });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "Logout" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
});

//Compani APIS
app.post("/organisation/register", async (req, res) => {
  try {
    const { email, password, selected } = req.body;
    const find = await CompanyReg.findOne({ EmailAddress: email });

    if (find) {
      if (find.selected === selected) {
        res.status(200).json({ uniqueId: find.uniqueId });
      } else {
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        await CompanyReg.findOneAndUpdate(
          { EmailAddress: email },
          {
            $set: {
              EmailAddress: email,
              password: passwordHash,
              uniqueId: find.uniqueId,
              selected,
            },
          }
        );
        res.status(200).json({ uniqueId: find.uniqueId });
      }
    } else {
      const uniqueId = uuid.v4();
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new CompanyReg({
        EmailAddress: email,
        password: passwordHash,
        uniqueId,
        selected,
      });

      const savedUser = await newUser.save();
      res.status(200).json({ uniqueId: uniqueId });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post("/organisation/register/verify", async (req, res) => {
  try {
    const { email } = req.body;

    const find = await CompanyReg.findOne({ EmailAddress: email });
    res.status(200).json({ uniqueId: find.uniqueId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/register/organization/find", async (req, res) => {
  try {
    const { uniqueId } = req.body;

    const find = await CompanyReg.findOne({ uniqueId: uniqueId });
    if (find) {
      res.status(200).json({ email: find.EmailAddress });
    } else {
      res.json("null");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Insert a new university
app.post("/api/universities", async (req, res) => {
  try {
    const newUniversity = new University(req.body);
    const savedUniversity = await newUniversity.save();
    res.status(200).json({
      data: savedUniversity,
      message: "Successfuly created",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post(
  "/createChallenge",
  upload.fields([
    { name: "selectedFile", maxCount: 1 },
    { name: "selectedVideo", maxCount: 1 },
    ...Array.from({ length: 10 }, (_, i) => ({
      name: `introVideo_${i}`,
      maxCount: 1,
    })),
    ...Array.from({ length: 10 }, (_, i) => ({
      name: `documents_${i}[]`, // Append "[]" to indicate an array
      maxCount: 10,
    })),
  ]),
  async (req, res) => {
    try {
      const {
        title,
        description,
        skills,
        learns,
        selectedItem,
        selectedLanguage,
        defaults,
        type,
        duration,
        difficulty,
        tools,
        company,
        email,
      } = req.body;

      const { alltask } = req.body;
      const parsedAllTask = JSON.parse(alltask);

      // Create a new Challenge instance
      const newChallenge = new Challenge({
        title,
        description,
        skills: JSON.parse(skills),
        learns: JSON.parse(learns),
        selectedItem: JSON.parse(selectedItem),
        selectedLanguage: JSON.parse(selectedLanguage),
        defaults,
        type,
        duration,
        difficulty,
        tools: JSON.parse(tools),
        company: company,
        selectedFile: req.files["selectedFile"][0].filename,
        selectedVideo: req.files["selectedVideo"][0].filename,
        email,
      });

      // Iterate through tasks and populate introVideo and documents
      parsedAllTask.forEach((task, index) => {
        const documents = [];

        if (
          req.files[`documents_${index}[]`] &&
          req.files[`documents_${index}[]`].length > 0
        ) {
          for (
            let docIndex = 0;
            docIndex < req.files[`documents_${index}[]`].length;
            docIndex++
          ) {
            const docFilename = req.files[`documents_${index}[]`][docIndex];
            const docEntry = {
              filename: docFilename.filename,
              originalname: docFilename.originalname,
            };
            console.log(docEntry);
            documents.push(docEntry);
          }
        }
        // Check if the field exists and if there are files uploaded

        newChallenge.alltask.push({
          taskTitle: task.taskTitle,
          taskBackground: task.taskBackground,
          terms: task.terms,
          task: task.task,
          external: task.external,
          introVideo:
            req.files &&
            req.files[`introVideo_${index}`] &&
            req.files[`introVideo_${index}`][0].filename,
          documents: documents, // Push all document filenames into the array
          questions: task.questions,
        });
      });

      // Save the newChallenge instance to the database
      await newChallenge.save();

      res.json({ message: "Data received and stored successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }
);

// Get all universities
app.get("/api/universities", async (req, res) => {
  try {
    const universities = await University.find();
    res.status(200).json({
      data: universities,
      message: "Successfuly list fetched",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/getRelatedCompany", async (req, res) => {
  try {
    const { selectedItem } = req.body;

    const findCompaniesByInterests = async (selectedItem) => {
      const companies = await Company.find({
        "interest.id": { $in: selectedItem.map((item) => item.id) },
      }).exec();
      return companies;
    };

    // Finding companies for the selected items
    const companiesForSelectedItem = await findCompaniesByInterests(
      selectedItem
    );
    if (companiesForSelectedItem.length === 0) {
      res.json({ message: "no record" });
    } else {
      res.json({ companies: companiesForSelectedItem });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/UserData", async (req, res) => {
  try {
    const {
      email,
      levelofstudy,
      study,
      intake,
      graduation,
      languages,
      gender,
    } = req.body;

    // Find the user by email
    const user = await User.findOne({ EmailAddress: email });

    if (!user) {
      // If user not found, handle accordingly (e.g., create a new user)
      return res.status(404).json({ message: "User not found" });
    }

    // Update user fields with the received data
    user.levelofstudy = levelofstudy;
    user.study = study;
    user.intake = intake;
    user.graduation = graduation;
    user.languages = languages;
    user.gender = gender;

    // Save the updated user
    await user.save();

    console.log(user); // Updated user

    res.status(200).json({ message: "Data received successfully", user });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/newUser", async (req, res) => {
  const userData = req.body;

  try {
    const find = await University.findOne({ name: userData.uni });

    if (find) {
      console.log("University found");
      const domain = userData.EmailAddress.split("@")[1];
      console.log(find.domain, domain);
      if (find.domain === domain) {
        const newUser = new User(userData);
        newUser
          .save()
          .then(() => {
            console.log("Request saved:");
            // Handle success
          })
          .catch((error) => {
            console.error("Error saving request:", error);
            // Handle error
          });
        res.json({ msg: "matched", newUser });
      } else {
        res.json("unmatched");
      }
    } else {
      console.log("University not found");
      const find = await Requests.findOne({
        EmailAddress: userData.EmailAddress,
      });
      console.log("Find:", find);
      if (!find) {
        const newRequest = new Requests(userData);
        newRequest
          .save()
          .then((savedRequest) => {
            console.log("Request saved:");
          })
          .catch((error) => {
            console.error("Error saving request:", error);
            // Handle error
          });
      }
      // Handle logic when the university is not found
      res.json("Pending");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
//ADD COMPANY

app.post("/add/company", async (req, res) => {
  try {
    const { name, location, image } = req.body;
    const uniqueId = uuid.v4();
    const newRequest = new Company({
      title: name,
      img: image,
      location: location,
      uniqueId: uniqueId,
    });
    newRequest
      .save()
      .then(() => {
        console.log("Company saved:");
        // Handle success
      })
      .catch((error) => {
        console.error("Error saving request:", error);
        // Handle error
      });
    res.json("recieved");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/get/companies", async (req, res) => {
  try {
    const { text } = req.body;

    const companies = await Company.find({
      title: { $regex: new RegExp(text, "i") },
    });

    res.status(200).json(companies);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/requests", async (req, res) => {
  try {
    const requests = await Requests.find();

    res.json(requests);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/requests/accept", async (req, res) => {
  try {
    const rec = req.body;
    console.log(rec._id);
    // await Requests.find();
    const find = await Requests.findOne({ _id: rec._id });
    if (find) {
      const newRequest = new University({
        name: rec.uni,
        domain: rec.EmailAddress.split("@")[1],
      });
      newRequest
        .save()
        .then(() => {
          console.log("University saved:");
          // Handle success
        })
        .catch((error) => {
          console.error("Error saving request:", error);
          // Handle error
        });
      const newUser = new User(rec);
      newUser
        .save()
        .then(() => {
          console.log("Request saved:");
          // Handle success
        })
        .catch((error) => {
          console.error("Error saving request:", error);
          // Handle error
        });
      await Requests.deleteOne({ _id: rec._id });
      // Handle logic when the university is found
      // res.status(200).json({ message: "University found", university: find });
    } else {
      console.log("Record not found");

      res.status(404).json({ message: "Record not found" });
    }
    // res.json(requests);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/requests/reject", async (req, res) => {
  try {
    const rec = req.body;
    console.log(rec._id);

    const find = await Requests.findOne({ _id: rec._id });
    if (find) {
      await Requests.deleteOne({ _id: rec._id });
    } else {
      console.log("Record not found");

      res.status(404).json({ message: "Record not found" });
    }
    // res.json(requests);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/Test/Results", async (req, res) => {
  try {
    const { preview, user, selectedAnswers } = req.body;

    const newRequest = new Test({
      preview: preview,
      user: user,
      selectedAnswers: selectedAnswers,
      id: preview._id,
    });
    newRequest.save().then(() => {
      // Find the challenge and increment the count by 1
      Challenge.findOneAndUpdate(
        { _id: preview._id },
        { $inc: { count: 1 } },
        { new: true } // Return the modified document
      )
        .then((updatedChallenge) => {
          // Handle the updated challenge here
          console.log("Updated Challenge:");
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error updating challenge count:");
        });
    });
    res.json("DONE");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.json("hello");
});
//Mongoose AND Server SETUP
const PORT = process.env.PORT || 5000;
// const host = "0.0.0.0";
mongoose
  .connect(
    process.env.MONGO_URL ||
      "mongodb+srv://ahayee589:sNgHuKgzkVKVknry@cluster0.mcb2go7.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");

    // Define a simple route to respond with "hello" at the root path

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error(`Failed to connect to MongoDB: ${err}`));
module.exports = app;
