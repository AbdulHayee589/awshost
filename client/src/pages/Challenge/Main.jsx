import Create from "./Create";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Right from "./Rightbar";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./step4";
import PreviewPage from "./PreviewPage";
import axios from "axios";
import Step6 from "./Step6";
import Step7 from "./step7";
import Header from "./header";
import { toast } from "react-toastify";

import Tasks from "../previewTask/tasks";

const Main = () => {
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const [selectedFile, setSelectedFile] = useState(null);
  const [step, setStep] = useState(1);
  const [skills, setSkills] = useState([]);
  const [learns, setLearns] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [defaults, setDefaults] = useState(false);
  const [type, setType] = useState("Virtual Experience");
  const [duration, setDuration] = useState("45");
  const [difficulty, setDifficulty] = useState("Basic");
  const [tools, setTools] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [company, setCompany] = useState();
  const [user, setUser] = useState("");
  const email = useSelector((state) => state.email);
  const [tastTitle, setTaskTitle] = useState("");
  const [taskBackground, setTaskBackground] = useState("");
  const [terms, setTerms] = useState("");
  const [task, setTasks] = useState("");
  const [external, setExternal] = useState("");
  const [introVideo, setIntroVideo] = useState("");
  const [documents, setSelectedDocuments] = useState("");
  const [preview, setPreview] = useState(false);
  const [questions, setQuestions] = useState([
    {
      question: "",
      answer: "",
      description: "",

      options: [
        {
          value: "",
          isCorrect: false,
        },
      ],
      isMultiSelect: false,
    },
  ]);

  const [alltask, setAllTasks] = useState([]);

  const handleAddAnotherTask = () => {
    // Create a new task object based on the user's input in Step 6
    const newTask = {
      taskTitle: tastTitle,
      taskBackground: taskBackground,
      terms: terms,
      task: task,
      external: external,
      introVideo: introVideo,
      documents: documents,
      questions: questions, // You might need to adjust this based on your requirements
    };

    // Update the state to include the new task
    setAllTasks((prevTasks) => [...prevTasks, newTask]);

    // Reset input fields or any other necessary state
    setTaskTitle("");
    setTaskBackground("");
    setTerms("");
    setTasks("");
    setExternal("");
    setIntroVideo("");
    setSelectedDocuments("");
    setQuestions([
      {
        question: "",
        answer: "",
        description: "",

        options: [
          {
            value: "",
            isCorrect: false,
          },
        ],
        isMultiSelect: false,
      },
    ]);

    // Move to the next step
    setStep(6); // Assuming you want to move to Step 7, adjust accordingly if needed
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const updateAllTasks = async () => {
    const newTask = {
      taskTitle: tastTitle,
      taskBackground: taskBackground,
      terms: terms,
      task: task,
      external: external,
      introVideo: introVideo,
      documents: documents,
      questions: questions, // You might need to adjust this based on your requirements
    };

    return new Promise((resolve) => {
      setAllTasks((prevTasks) => {
        const updatedAlltask = [...prevTasks, newTask];
        resolve(updatedAlltask);
        return updatedAlltask;
      });
    });
  };

  const handleSave = async () => {
    try {
      if (
        !tastTitle ||
        !taskBackground ||
        !task ||
        !introVideo ||
        questions.length <= 1
      ) {
        toast.error("Please enter all the required task details correctly");
        return;
      } else {
        const updatedAlltask = await updateAllTasks();
        // Update the state to include the new task

        // Create a FormData object to append files and other data
        const formData = new FormData();

        // Append files to FormData
        formData.append("selectedFile", selectedFile);
        formData.append("selectedVideo", selectedVideo);

        // Map over alltask array to handle introVideo and documents
        await Promise.all(
          updatedAlltask.map(async (task, index) => {
            formData.append(`introVideo_${index}`, task.introVideo);

            for (let x = 0; x < task.documents.length; x++) {
              formData.append(`documents_${index}[]`, task.documents[x]);
            }
          })
        );

        // Append other data to FormData
        formData.append("title", title);
        formData.append("description", description);
        formData.append("skills", JSON.stringify(skills));
        formData.append("learns", JSON.stringify(learns));
        formData.append("selectedItem", JSON.stringify(selectedItem));
        formData.append("selectedLanguage", JSON.stringify(selectedLanguage));
        formData.append("defaults", defaults);
        formData.append("type", type);
        formData.append("duration", duration);
        formData.append("difficulty", difficulty);
        formData.append("tools", JSON.stringify(tools));
        formData.append("company", JSON.stringify(company));

        // Convert alltask to a JSON string before appending
        formData.append("alltask", JSON.stringify(updatedAlltask));
        formData.append("email", email);
        // Make a POST request to the backend endpoint
        const response = await axios.post(
          "http://localhost:5000/createChallenge",
          formData
        );

        // Handle the response as needed (e.g., show success message, redirect, etc.)
        console.log(response.data);

        // Optionally, you can update the step or perform other actions
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      // Handle the error (e.g., show error message)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let id;
        const userInfoResponse = await axios.post(
          "http://localhost:5000/getUserInfo",
          { email: email }
        );

        if (userInfoResponse.data.message === "Found") {
          setUser(userInfoResponse.data.user);
          id = userInfoResponse.data.user.company;
        } else {
          navigate("/register/organiser");
          return; // Exit early if user not found
        }

        const companyInfoResponse = await axios.post(
          "http://localhost:5000/getCompanyInfo",
          { id: id }
        );
        setCompany(companyInfoResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [email]);

  return (
    <>
      {preview ? (
        <Tasks />
      ) : (
        <>
          {step !== 5 && (
            <Header
              text={step >= 5 ? "/challenge design" : "Create new challenge"}
            />
          )}

          <div
            className="d-flex"
            style={
              step === 5
                ? {}
                : { backgroundColor: "#F0F5FE", minHeight: "100vh" }
            }
          >
            {" "}
            {step === 1 && (
              <Create
                step={step}
                setStep={setStep}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
              />
            )}
            {step === 2 && (
              <Step2
                setSkills={setSkills}
                skills={skills}
                learns={learns}
                setLearns={setLearns}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                defaults={defaults}
                setDefaults={setDefaults}
                setStep={setStep}
              />
            )}
            {step === 3 && (
              <Step3 type={type} setType={setType} setStep={setStep} />
            )}
            {step === 4 && (
              <Step4
                duration={duration}
                setDuration={setDuration}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                tools={tools}
                setTools={setTools}
                setStep={setStep}
                selectedFile={selectedVideo}
                setSelectedFile={setSelectedVideo}
              />
            )}
            {step === 5 && (
              <PreviewPage
                selectedFile={selectedFile}
                step={step}
                setStep={setStep}
                skills={skills}
                learns={learns}
                title={title}
                description={description}
                selectedItem={selectedItem}
                selectedLanguage={selectedLanguage}
                defaults={defaults}
                type={type}
                duration={duration}
                difficulty={difficulty}
                tools={tools}
                selectedVideo={selectedVideo}
                company={company}
              />
            )}
            {step === 6 && (
              <Step6
                step={step}
                setStep={setStep}
                tastTitle={tastTitle}
                setTaskTitle={setTaskTitle}
                taskBackground={taskBackground}
                setTaskBackground={setTaskBackground}
                terms={terms}
                setTerms={setTerms}
                task={task}
                setTasks={setTasks}
                external={external}
                setExternal={setExternal}
                introVideo={introVideo}
                setIntroVideo={setIntroVideo}
                documents={documents}
                setSelectedDocuments={setSelectedDocuments}
                handleSave={handleSave}
                questions={questions}
                setQuestions={setQuestions}
                handleAddAnotherTask={handleAddAnotherTask}
                setPreview={setPreview}
              />
            )}
            {step === 7 && (
              <Step7
                step={step}
                setStep={setStep}
                questions={questions}
                setQuestions={setQuestions}
                handleSave={handleSave}
                handleAddAnotherTask={handleAddAnotherTask}
              />
            )}
            {isNonMobile && step !== 5 && (
              <div
                className="col-md-2 pt-5 pb-0 p-2 thirdcol"
                style={{ minHeight: "100vh" }}
              >
                <Right step={step} />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default Main;
