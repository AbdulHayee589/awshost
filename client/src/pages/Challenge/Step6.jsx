import { setStep as set } from "../../state";
import { useDispatch } from "react-redux";
import on from "../../assets/images/icons/on.png";
import off from "../../assets/images/icons/off.png";
import React, { useState } from "react";
import upload from "../../assets/images/icons/upload.png";
import ReactQuill from "react-quill";
import { useMediaQuery } from "@mui/material";
import { toast } from "react-toastify";
import "./step7.css";
const Step6 = ({
  step,
  setStep,
  tastTitle,
  setTaskTitle,
  taskBackground,
  setTaskBackground,
  terms,
  setTerms,
  task,
  setTasks,
  external,
  setExternal,
  introVideo,
  setIntroVideo,
  documents,
  setSelectedDocuments,
  handleSave,
  questions,
  setQuestions,
  handleAddAnotherTask,
  setPreview,
}) => {
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const dispatch = useDispatch();
  const test = dispatch(set(6));
  const [links, setLinks] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const selectedFiles = event.target.files;

      if (selectedFiles && selectedFiles.length > 0) {
        setSelectedDocuments(selectedFiles);
      }
    } else {
      toast.error("Please select a valid image file.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const fileInputRef = React.createRef();
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
    "align",
  ];

  const handleDrop = (e) => {
    e.preventDefault();
    setIntroVideo(e.dataTransfer.files[0]);
  };

  const handleFileUpload = (e) => {
    setIntroVideo(e.target.files[0]);

    // Do something with the selected file, for example, set it to state
    // You can use this file for further processing like uploading to a server
  };

  const addQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        question: "",
        answer: "",
        options: [
          {
            value: "",
            isCorrect: false,
          },
        ],
        isMultiSelect: false,
      },
    ]);
  };

  const handleDescriptionChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].description = value;
      return updatedQuestions;
    });
  };

  const handleQuestionChange = (index, event) => {
    const { name, value } = event.target;
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index][name] = value;
      return updatedQuestions;
    });
  };

  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const { value } = event.target;
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options[optionIndex].value = value;

      return updatedQuestions;
    });
  };

  const addOption = (questionIndex) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options.push({
        value: "",
        isCorrect: false,
      });
      return updatedQuestions;
    });
  };

  const handleMultiSelect = (questionIndex, event) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];

      updatedQuestions[questionIndex].isMultiSelect =
        !updatedQuestions[questionIndex].isMultiSelect;

      return updatedQuestions;
    });
  };

  const handleOptionCorrectChange = (questionIndex, optionIndex, event) => {
    const { value } = event.target;

    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];

      // If the question is single-select, unselect all other options when a correct option is selected
      if (!updatedQuestions[questionIndex].isMultiSelect) {
        updatedQuestions[questionIndex].options.forEach((option, index) => {
          if (index !== optionIndex) {
            option.isCorrect = false; // Set to boolean false
          }
        });
      }

      updatedQuestions[questionIndex].options[optionIndex].isCorrect =
        value === "true"; // Compare as boolean

      return updatedQuestions;
    });
  };

  const handleSubmit = () => {
    if (tastTitle && taskBackground && task && introVideo) {
      setStep(7);
    } else {
      toast.error("Please enter All Required details");
    }
  };

  const handleRemoveDocument = (removedFile) => {
    const updatedDocuments = Array.from(documents).filter(
      (file) => file !== removedFile
    );
    setSelectedDocuments(updatedDocuments);
  };

  const handleLinks = (e) => {
    e.preventDefault();
    if (links !== "" && !external.includes(links)) {
      if (external.length < 12) {
        setExternal([...external, links]);
        setLinks("");
      } else {
        toast.error("Only upto 12 Links are allowed");
      }
    }
  };

  const handleLinkRemove = (ski) => {
    setExternal(external.filter((learn) => learn !== ski));
  };

  const getFileIcon = (fileName) => {
    const fileExtension = fileName.split(".").pop().toLowerCase();
    if (fileExtension === "pdf") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="40"
          viewBox="0 0 33 40"
          fill="none"
        >
          <path
            d="M0.046875 4C0.046875 1.79086 1.83774 0 4.04688 0H20.0469L32.0469 12V36C32.0469 38.2091 30.256 40 28.0469 40H4.04688C1.83774 40 0.046875 38.2091 0.046875 36V4Z"
            fill="#155EEF"
          />
          <path
            opacity="0.3"
            d="M20.0469 0L32.0469 12H24.0469C21.8377 12 20.0469 10.2091 20.0469 8V0Z"
            fill="white"
          />

          <text
            x="50%"
            y="70%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#fff"
            fontSize="8"
          >
            {fileExtension.toUpperCase()}
          </text>
        </svg>
      );
    } else if (fileExtension === "docx") {
      // Handle other file types or provide a default icon
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="40"
          viewBox="0 0 33 40"
          fill="none"
        >
          <path
            d="M0.046875 4C0.046875 1.79086 1.83774 0 4.04688 0H20.0469L32.0469 12V36C32.0469 38.2091 30.256 40 28.0469 40H4.04688C1.83774 40 0.046875 38.2091 0.046875 36V4Z"
            fill="#155EEF"
          />
          <path
            opacity="0.3"
            d="M20.0469 0L32.0469 12H24.0469C21.8377 12 20.0469 10.2091 20.0469 8V0Z"
            fill="white"
          />
          <text
            x="50%"
            y="70%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#fff"
            fontSize="8"
          >
            {fileExtension.toUpperCase()}
          </text>
        </svg>
      );
    } else if (fileExtension === "txt") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="40"
          viewBox="0 0 33 40"
          fill="none"
        >
          <path
            d="M0.09375 4C0.09375 1.79086 1.88461 0 4.09375 0H20.0938L32.0938 12V36C32.0938 38.2091 30.3029 40 28.0938 40H4.09375C1.88461 40 0.09375 38.2091 0.09375 36V4Z"
            fill="#344054"
          />
          <path
            opacity="0.3"
            d="M20.0938 0L32.0938 12H24.0937C21.8846 12 20.0938 10.2091 20.0938 8V0Z"
            fill="white"
          />
          <text
            x="50%"
            y="70%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#fff"
            fontSize="8"
          >
            {fileExtension.toUpperCase()}
          </text>
        </svg>
      );
    } else if (fileExtension === "xlsl") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="40"
          viewBox="0 0 32 40"
          fill="none"
        >
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H20L32 12V36C32 38.2091 30.2091 40 28 40H4C1.79086 40 0 38.2091 0 36V4Z"
            fill="#099250"
          />
          <path
            opacity="0.3"
            d="M20 0L32 12H24C21.7909 12 20 10.2091 20 8V0Z"
            fill="white"
          />
          <text
            x="50%"
            y="70%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#fff"
            fontSize="8"
          >
            {fileExtension.toUpperCase()}
          </text>
        </svg>
      );
    } else if (fileExtension === "ppt") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="40"
          viewBox="0 0 33 40"
          fill="none"
        >
          <path
            d="M0.523438 4C0.523438 1.79086 2.3143 0 4.52344 0H20.5234L32.5234 12V36C32.5234 38.2091 30.7326 40 28.5234 40H4.52344C2.3143 40 0.523438 38.2091 0.523438 36V4Z"
            fill="#E62E05"
          />
          <path
            opacity="0.3"
            d="M20.5234 0L32.5234 12H24.5234C22.3143 12 20.5234 10.2091 20.5234 8V0Z"
            fill="white"
          />
          <text
            x="50%"
            y="70%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#fff"
            fontSize="8"
          >
            {fileExtension.toUpperCase()}
          </text>
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="40"
          viewBox="0 0 33 40"
          fill="none"
        >
          <path
            d="M0.523438 4C0.523438 1.79086 2.3143 0 4.52344 0H20.5234L32.5234 12V36C32.5234 38.2091 30.7326 40 28.5234 40H4.52344C2.3143 40 0.523438 38.2091 0.523438 36V4Z"
            fill="#E62E05"
          />
          <path
            opacity="0.3"
            d="M20.5234 0L32.5234 12H24.5234C22.3143 12 20.5234 10.2091 20.5234 8V0Z"
            fill="white"
          />
          <text
            x="50%"
            y="70%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#fff"
            fontSize="8"
          >
            {fileExtension.toUpperCase()}
          </text>
        </svg>
      );
    }
  };

  return (
    <div className="col-md-10 col-12 p-5">
      <div className="col-md-11">
        <div
          className="d-flex mt-2"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            {" "}
            <p
              className=""
              style={{ fontSize: "24px", fontWeight: "400", color: "#0C111D" }}
            >
              Create new task
            </p>
          </div>
        </div>
        <p
          style={{
            color: "#1D2939",
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: "Public Sans",
          }}
        >
          What is this job about?
        </p>
      </div>
      <div className="row mt-5">
        <p className="col-md-4 thumbnailcreate">Task title</p>
        <input
          className="col-md-7 col-12 forminput"
          value={tastTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>
      <div className="row mt-5">
        <p className="thumbnailcreate mt-3 col-md-4">
          Upload Introduction Video
        </p>
        <div
          className="col-md-7 col-12 mt-3 d-flex row p-3 border rounded-3"
          style={{
            height: "122px",
            justifyContent: "center",
            backgroundColor: "#FFF",
            cursor: "pointer",
          }}
          onClick={() => document.getElementById("videoUpload").click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {" "}
          <div className="d-flex" style={{ justifyContent: "center" }}>
            {introVideo ? (
              <p
                style={{
                  color: "#E31B54",
                  fontFamily: "Public Sans",
                  fontWeight: "600",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                {introVideo.name}
              </p>
            ) : (
              <img src={upload} alt="upload" height="40px" width="40px" />
            )}{" "}
          </div>
          <div
            className="d-flex"
            style={{ gap: "5px", justifyContent: "center" }}
          >
            <p
              style={{
                color: "#E31B54",
                fontFamily: "Public Sans",
                fontWeight: "600",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Click to upload
            </p>
            <input
              type="file"
              id="videoUpload"
              accept="video/*"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <p
              style={{
                fontFamily: "Public Sans",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              or drag and drop
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="challengeDescription mb-3">Task Background</p>

        <div style={{ overflow: "hidden" }}>
          <ReactQuill
            value={taskBackground}
            onChange={(value) => setTaskBackground(value)}
            modules={modules}
            formats={formats}
            className="col-md-11 rounded-3 whitescrollbar"
            style={{
              backgroundColor: "#FFF",
              height: "400px",
              overflowY: "auto",
            }}
          />
          <style>
            {`
    .whitescrollbar::-webkit-scrollbar {
      width: 10px;
    }

    .whitescrollbar::-webkit-scrollbar-thumb {
      background-color: #FFF; /* Change this to your desired scrollbar color */
      border-radius: 10px;
    }

    .whitescrollbar::-webkit-scrollbar-track {
      background-color: #FFF; /* Change this to your desired scrollbar track color */
      border-radius: 10px;
    }
  `}
          </style>
        </div>
        <p
          className="mt-2"
          style={{
            fontFamily: "Public Sans",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {taskBackground.replace(/(<([^>]+)>)/gi, "").length} Characters
        </p>
      </div>
      <div className="mt-5">
        <p className="challengeDescription mb-3">Key Terms (optional)</p>

        <div style={{ overflow: "hidden" }}>
          <ReactQuill
            value={terms}
            onChange={(value) => setTerms(value)}
            modules={modules}
            formats={formats}
            className="col-md-11 rounded-3 whitescrollbar"
            style={{
              backgroundColor: "#FFF",
              height: "400px",
              overflowY: "auto",
            }}
          />
          <style>
            {`
    .whitescrollbar::-webkit-scrollbar {
      width: 10px;
    }

    .whitescrollbar::-webkit-scrollbar-thumb {
      background-color: #FFF; /* Change this to your desired scrollbar color */
      border-radius: 10px;
    }

    .whitescrollbar::-webkit-scrollbar-track {
      background-color: #FFF; /* Change this to your desired scrollbar track color */
      border-radius: 10px;
    }
  `}
          </style>
        </div>
        <p
          className="mt-2"
          style={{
            fontFamily: "Public Sans",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {terms.replace(/(<([^>]+)>)/gi, "").length} Characters
        </p>
      </div>
      <div className="mt-5">
        <p className="challengeDescription mb-3">Your Task</p>

        <div style={{ overflow: "hidden" }}>
          <ReactQuill
            value={task}
            onChange={(value) => setTasks(value)}
            modules={modules}
            formats={formats}
            className="col-md-11 rounded-3 whitescrollbar"
            style={{
              backgroundColor: "#FFF",
              height: "400px",
              overflowY: "auto",
            }}
          />
          <style>
            {`
    .whitescrollbar::-webkit-scrollbar {
      width: 10px;
    }

    .whitescrollbar::-webkit-scrollbar-thumb {
      background-color: #FFF; /* Change this to your desired scrollbar color */
      border-radius: 10px;
    }

    .whitescrollbar::-webkit-scrollbar-track {
      background-color: #FFF; /* Change this to your desired scrollbar track color */
      border-radius: 10px;
    }
  `}
          </style>
        </div>
        <p
          className="mt-2"
          style={{
            fontFamily: "Public Sans",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {task.replace(/(<([^>]+)>)/gi, "").length} Characters
        </p>
      </div>
      <p className="challengeDescription mb-3 mt-5">
        Attach external Links (optional)
      </p>{" "}
      <form onSubmit={(e) => handleLinks(e)}>
        <input
          value={links}
          onChange={(e) => setLinks(e.target.value)}
          className="forminput col-md-12 col-12 mt-2"
          placeholder="e.g, Data Presentation, Communication Skills, Sales, M&A Screening, etc."
        />
      </form>
      <div className="d-flex flex-wrap" style={{ gap: "20px" }}>
        {external &&
          external.map((ski, i) => (
            <div
              key={i}
              className="mt-2  skillsshow d-flex"
              style={{ cursor: "pointer" }}
            >
              <p className="skillsshowtext"> {ski}</p>
              <div onClick={() => handleLinkRemove(ski)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9.87484 9.00604L15.5715 3.32867C15.8095 3.08843 15.8095 2.69925 15.5715 2.45901C15.3377 2.21448 14.9516 2.20714 14.7089 2.4426L9.01221 8.11997L3.38879 2.4426C3.2735 2.31966 3.11309 2.25 2.94527 2.25C2.77745 2.25 2.61703 2.31966 2.50174 2.4426C2.29073 2.67471 2.29073 3.03093 2.50174 3.26303L8.12516 8.9322L2.4285 14.6014C2.1905 14.8416 2.1905 15.2308 2.4285 15.471C2.54181 15.588 2.69763 15.6532 2.85982 15.6515C3.02513 15.665 3.18901 15.6119 3.31555 15.5038L9.01221 9.82647L14.7089 15.5695C14.8222 15.6865 14.978 15.7517 15.1402 15.75C15.3022 15.7507 15.4577 15.6857 15.5715 15.5695C15.8095 15.3292 15.8095 14.9401 15.5715 14.6998L9.87484 9.00604Z"
                    fill="#0C111D"
                  />
                </svg>
              </div>
            </div>
          ))}
      </div>
      {/* <p className="challengeDescription mb-3 mt-5">
        Upload Releveant Documents (optional)
      </p>
      <div
        className="col-md-11  border rounded-3"
        style={{ backgroundColor: "#FFF", justifyContent: "center" }}
      >
        <div className="d-flex" style={{ justifyContent: "center" }}>
          {documents ? (
            <img
              src={URL.createObjectURL(documents)}
              alt="Selected"
              className="img-fluid"
              style={
                isNonMobile ? { maxHeight: "300px" } : { maxHeight: "200px" }
              }
            />
          ) : (
            <div
              className="mt-2 p-3 d-flex"
              style={{
                backgroundColor: "#FFF5F6",
                borderRadius: "60px",
                height: "60px",
                width: "60px",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
              >
                <path
                  d="M0.399902 4C0.399902 1.79086 2.19076 0 4.3999 0H12.3999L19.5999 7.2V20C19.5999 22.2091 17.809 24 15.5999 24H4.3999C2.19076 24 0.399902 22.2091 0.399902 20V4Z"
                  fill="#E31B54"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  x="5"
                  y="6"
                >
                  <g clipPath="url(#clip0_4343_10944)">
                    <path
                      d="M5.4 3.3998L4.95378 2.50737C4.82536 2.25053 4.76115 2.12210 4.66535 2.02827C4.58063 1.94530 4.47853 1.88219 4.36643 1.84353C4.23967 1.7998 4.09608 1.7998 3.80892 1.7998H2.28C1.83196 1.7998 1.60794 1.7998 1.43681 1.887C1.28628 1.9637 1.16389 2.08608 1.08719 2.23661C1 2.40774 1 2.63176 1 3.0798V3.3998M1 3.3998H7.08C7.75206 3.3998 8.08809 3.3998 8.34479 3.5306C8.57058 3.64565 8.75416 3.82922 8.86921 4.05502C9 4.31171 9 4.64774 9 5.31981V7.07981C9 7.75187 9 8.0879 8.86921 8.34459C8.75416 8.57039 8.57058 8.75397 8.34479 8.86901C8.08809 8.99981 7.75206 8.99981 7.08 8.99981H2.92C2.24794 8.99981 1.91191 8.99981 1.65521 8.86901C1.42942 8.75397 1.24584 8.57039 1.13079 8.34459C1 8.0879 1 7.75187 1 7.07981V3.3998Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4343_10944">
                      <rect
                        width="9.6"
                        height="9.6"
                        fill="white"
                        transform="translate(0.200195 0.599609)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </svg>
            </div>
          )}
        </div>
        {!documents && (
          <div className="d-flex mt-2 " style={{ justifyContent: "center" }}>
            <p className="addthumbnail">Add Relevant Documents</p>
          </div>
        )}
        <div className="d-flex mt-3 mb-3" style={{ justifyContent: "center" }}>
          {" "}
          <button
            className="d-flex border uploadbuttoncreate"
            style={{ gap: "10px" }}
            onClick={openFileInput}
          >
            {documents ? "Change" : "Upload"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M11.8109 16.54L8.08086 12.82C7.92269 12.6624 7.83379 12.4483 7.83379 12.225C7.83379 12.0017 7.92269 11.7876 8.08086 11.63C8.41349 11.3113 8.93822 11.3113 9.27086 11.63L11.5609 13.93V3.84C11.5609 3.37608 11.9369 3 12.4009 3C12.8648 3 13.2409 3.37608 13.2409 3.84V13.93L15.5309 11.63C15.8635 11.3113 16.3882 11.3113 16.7209 11.63C16.879 11.7876 16.9679 12.0017 16.9679 12.225C16.9679 12.4483 16.879 12.6624 16.7209 12.82L12.9909 16.54C12.8369 16.7009 12.6235 16.7913 12.4009 16.79C12.1777 16.7937 11.9634 16.7029 11.8109 16.54Z"
                fill="white"
              />
              <path
                d="M17.6209 8.42H18.8309C21.3471 8.47468 23.3455 10.5536 23.3009 13.07V16.88C23.3455 19.3964 21.3471 21.4753 18.8309 21.53L5.97086 21.45C3.45462 21.3953 1.45621 19.3164 1.50086 16.8V12.99C1.47135 11.7762 1.9261 10.6005 2.76474 9.72245C3.60338 8.84442 4.75696 8.33621 5.97086 8.31H7.18086C7.64478 8.31 8.02086 8.68608 8.02086 9.15C8.02086 9.61392 7.64478 9.99 7.18086 9.99H5.97086C5.20152 10.0134 4.47354 10.3437 3.94936 10.9074C3.42519 11.471 3.14844 12.221 3.18086 12.99V16.77C3.14844 17.539 3.42519 18.289 3.94936 18.8526C4.47354 19.4163 5.20152 19.7466 5.97086 19.77L18.8309 19.91C19.6002 19.8866 20.3282 19.5563 20.8524 18.9926C21.3765 18.429 21.6533 17.679 21.6209 16.91V13.1C21.6533 12.331 21.3765 11.581 20.8524 11.0174C20.3282 10.4537 19.6002 10.1234 18.8309 10.1H17.6209C17.1569 10.1 16.7809 9.72392 16.7809 9.26C16.7809 8.79608 17.1569 8.42 17.6209 8.42Z"
                fill="white"
              />
            </svg>
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
        </div>
      </div> */}
      <p className="challengeDescription mb-3 mt-5">
        Upload Relevant Documents (optional)
      </p>
      <div
        className="col-md-11 border rounded-3"
        style={{ backgroundColor: "#FFF", justifyContent: "center" }}
      >
        <div className="d-flex" style={{ justifyContent: "center" }}>
          {documents ? (
            <div>
              <p
                style={{
                  color: "#E31B54",
                  fontFamily: "Public Sans",
                  fontWeight: "600",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                {documents.length}{" "}
                {documents.length > 1 ? "Files Selected" : "File Selected"}
              </p>
            </div>
          ) : (
            <div
              className="mt-2 p-3 d-flex"
              style={{
                backgroundColor: "#FFF5F6",
                borderRadius: "60px",
                height: "60px",
                width: "60px",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
              >
                <path
                  d="M0.399902 4C0.399902 1.79086 2.19076 0 4.3999 0H12.3999L19.5999 7.2V20C19.5999 22.2091 17.809 24 15.5999 24H4.3999C2.19076 24 0.399902 22.2091 0.399902 20V4Z"
                  fill="#E31B54"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  x="5"
                  y="6"
                >
                  <g clipPath="url(#clip0_4343_10944)">
                    <path
                      d="M5.4 3.3998L4.95378 2.50737C4.82536 2.25053 4.76115 2.12210 4.66535 2.02827C4.58063 1.94530 4.47853 1.88219 4.36643 1.84353C4.23967 1.7998 4.09608 1.7998 3.80892 1.7998H2.28C1.83196 1.7998 1.60794 1.7998 1.43681 1.887C1.28628 1.9637 1.16389 2.08608 1.08719 2.23661C1 2.40774 1 2.63176 1 3.0798V3.3998M1 3.3998H7.08C7.75206 3.3998 8.08809 3.3998 8.34479 3.5306C8.57058 3.64565 8.75416 3.82922 8.86921 4.05502C9 4.31171 9 4.64774 9 5.31981V7.07981C9 7.75187 9 8.0879 8.86921 8.34459C8.75416 8.57039 8.57058 8.75397 8.34479 8.86901C8.08809 8.99981 7.75206 8.99981 7.08 8.99981H2.92C2.24794 8.99981 1.91191 8.99981 1.65521 8.86901C1.42942 8.75397 1.24584 8.57039 1.13079 8.34459C1 8.0879 1 7.75187 1 7.07981V3.3998Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4343_10944">
                      <rect
                        width="9.6"
                        height="9.6"
                        fill="white"
                        transform="translate(0.200195 0.599609)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </svg>
            </div>
          )}
        </div>
        {!documents && (
          <div className="d-flex mt-2 " style={{ justifyContent: "center" }}>
            <p className="addthumbnail">Add Reletive Documents</p>
          </div>
        )}
        <div className="d-flex mt-3 mb-3" style={{ justifyContent: "center" }}>
          {" "}
          <button
            className="d-flex border uploadbuttoncreate"
            style={{ gap: "10px" }}
            onClick={openFileInput}
          >
            {documents ? "Change" : "Upload"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              {/* Your existing SVG path */}
            </svg>
          </button>
          <input
            type="file"
            accept="image/*,application/pdf,.doc,.docx,.txt"
            onChange={handleFileChange}
            style={{ display: "none" }}
            ref={fileInputRef}
            multiple
          />
        </div>
      </div>
      <div className="d-flex flex-wrap ">
        {documents.length > 0 && (
          <div className="mt-3 d-flex mt-0 mb-0 m-2 p-2 ">
            {Array.from(documents).map((file, index) => (
              <div
                key={index}
                className="d-flex m-2 p-2 rounded-3 border"
                style={{ background: "#FFF" }}
              >
                <div className="">{getFileIcon(file.name)}</div>
                <p
                  style={{
                    color: "#E31B54",
                    fontFamily: "Public Sans",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="  m-2 d-flex"
                >
                  {file.name.length > 20
                    ? file.name.slice(0, 20) + "..."
                    : file.name}
                </p>
                <div
                  className=" d-flex"
                  style={{
                    cursor: "pointer",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    handleRemoveDocument(file);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      d="M9.30108 8.28369L14.3648 3.23713C14.5763 3.02359 14.5763 2.67765 14.3648 2.46411C14.157 2.24675 13.8138 2.24022 13.598 2.44952L8.53429 7.49607L3.5357 2.44952C3.43322 2.34024 3.29063 2.27832 3.14145 2.27832C2.99228 2.27832 2.84969 2.34024 2.74721 2.44952C2.55964 2.65584 2.55964 2.97248 2.74721 3.17879L7.7458 8.21805L2.6821 13.2573C2.47055 13.4709 2.47055 13.8168 2.6821 14.0303C2.78282 14.1343 2.92133 14.1923 3.0655 14.1908C3.21244 14.2028 3.35811 14.1556 3.47059 14.0595L8.53429 9.01296L13.598 14.1179C13.6987 14.2219 13.8372 14.2798 13.9814 14.2783C14.1254 14.279 14.2636 14.2211 14.3648 14.1179C14.5763 13.9043 14.5763 13.5584 14.3648 13.3448L9.30108 8.28369Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <p
        className=" mt-5 mb-5"
        style={{ fontSize: "24px", fontWeight: "400", color: "#0C111D" }}
      >
        Add Task Questions
      </p>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="mt-4">
          <p className="question">Question {questionIndex + 1}</p>
          <input
            type="text"
            name="question"
            className="mt-3 forminput col-md-11"
            value={question.question}
            onChange={(e) => handleQuestionChange(questionIndex, e)}
          />
          <p className="answers mt-3">Answers</p>
          <div className="row mb-4">
            <div className="col-md-6">
              <p className="Optional mt-3 ">Optional Student Data collection</p>
              <p className="belowOptional">
                These are notifications for comments on your posts and replies
                to your comments.
              </p>
            </div>
            <div className="col-md-5 " style={{ justifyContent: "end" }}>
              <div
                className=" d-flex"
                style={{ justifyContent: "end" }}
                onClick={(e) => {
                  handleMultiSelect(questionIndex, e);
                }}
              >
                {question.isMultiSelect ? (
                  <img src={on} alt="" />
                ) : (
                  <img src={off} alt="" />
                )}
                <p
                  className="d-flex selectText"
                  style={{ justifyContent: "end" }}
                >
                  Multi-Select
                </p>
              </div>
              <div
                className="mt-2 d-flex"
                style={{ justifyContent: "end" }}
                onClick={(e) => {
                  handleMultiSelect(questionIndex, e);
                }}
              >
                {question.isMultiSelect ? (
                  <img src={off} alt="" />
                ) : (
                  <img src={on} alt="" />
                )}
                <p
                  className="d-flex selectText"
                  style={{ justifyContent: "end" }}
                >
                  Single-Select
                </p>
              </div>
            </div>
          </div>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="mt-2 row">
              <p className="col-md-3">Option {optionIndex + 1}</p>
              <input
                type="text"
                className="col-md-3 forminput mt-0 mb-0 m-2"
                name="value "
                value={option.value}
                onChange={(e) =>
                  handleOptionChange(questionIndex, optionIndex, e)
                }
                placeholder={`Option ${optionIndex + 1}`}
              />
              <select
                name="isCorrect"
                className="col-md-3 forminput"
                value={option.isCorrect}
                onChange={(e) =>
                  handleOptionCorrectChange(questionIndex, optionIndex, e)
                }
              >
                <option value="false">Incorrect</option>
                <option value="true">Correct</option>
              </select>
            </div>
          ))}
          <button
            className="btn d-flex"
            onClick={() => addOption(questionIndex)}
            style={{
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="plusbutton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M17.5833 9.66667H13C12.5398 9.66667 12.1667 9.29357 12.1667 8.83333V4.25C12.1667 3.55964 11.607 3 10.9167 3C10.2263 3 9.66667 3.55964 9.66667 4.25V8.83333C9.66667 9.29357 9.29357 9.66667 8.83333 9.66667H4.25C3.55964 9.66667 3 10.2263 3 10.9167C3 11.607 3.55964 12.1667 4.25 12.1667H8.83333C9.29357 12.1667 9.66667 12.5398 9.66667 13V17.5833C9.66667 18.2737 10.2263 18.8333 10.9167 18.8333C11.607 18.8333 12.1667 18.2737 12.1667 17.5833V13C12.1667 12.5398 12.5398 12.1667 13 12.1667H17.5833C18.2737 12.1667 18.8333 11.607 18.8333 10.9167C18.8333 10.2263 18.2737 9.66667 17.5833 9.66667Z"
                  fill="white"
                />
              </svg>{" "}
            </div>
            Add Option
          </button>
          <p className="explaintask mt-4">Explain the right answer!</p>
          <div style={{ overflow: "hidden" }}>
            <ReactQuill
              value={questions[questionIndex].description}
              onChange={(value) =>
                handleDescriptionChange(questionIndex, value)
              }
              modules={modules}
              formats={formats}
              className="col-md-11 rounded-3 whitescrollbar"
              style={{
                backgroundColor: "#FFF",
                height: "400px",
                overflowY: "auto",
              }}
            />
            <style>
              {`
    .whitescrollbar::-webkit-scrollbar {
      width: 10px;
    }

    .whitescrollbar::-webkit-scrollbar-thumb {
      background-color: #FFF; /* Change this to your desired scrollbar color */
      border-radius: 10px;
    }

    .whitescrollbar::-webkit-scrollbar-track {
      background-color: #FFF; /* Change this to your desired scrollbar track color */
      border-radius: 10px;
    }
  `}
            </style>
          </div>
        </div>
      ))}
      <button className="continuebutton mt-5" onClick={addQuestion}>
        Add Question
      </button>
      <div className="col-md-11">
        <div
          className="d-flex mt-4"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            {" "}
            <button
              className="btn backbutton "
              // style={{ border: "1px solid #E31B54", color: "#E31B54" }}
            >
              Back
            </button>
          </div>
          <div className="d-flex" style={{ gap: "20px" }}>
            <button
              className="btn "
              style={{ border: "1px solid #E31B54", color: "#E31B54" }}
              onClick={() => setPreview(true)}
            >
              Preview Task
            </button>
            <button
              className="continuebutton"
              onClick={() => handleAddAnotherTask()}
            >
              Add Another Task
            </button>
            <button className="continuebutton" onClick={() => handleSave()}>
              Publish Challenge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step6;
