import React, { useState } from "react";

import ReactQuill from "react-quill";
import on from "../../assets/images/icons/on.png";
import off from "../../assets/images/icons/off.png";
import "./step7.css";
const Step7 = ({
  step,
  setStep,
  handleSave,
  questions,
  setQuestions,
  handleAddAnotherTask,
}) => {
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
        window.alert("test");
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
  return (
    <div className="col-md-8 col-12 p-5">
      <div>
        <p className="HeaderText mt-4">Challenge Tasks</p>
        <div
          className="d-flex mt-4"
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
          <div className="d-flex" style={{ gap: "20px" }}>
            <button
              className="btn "
              style={{ border: "1px solid #E31B54", color: "#E31B54" }}
            >
              Save as draft
            </button>
            <button
              className="continuebutton"
              onClick={() => handleAddAnotherTask()}
            >
              Add Another Task
            </button>
            <button className="continuebutton" onClick={() => handleSave()}>
              Continue
            </button>
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
    </div>
  );
};
export default Step7;
