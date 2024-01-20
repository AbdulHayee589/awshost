import { useState } from "react";
import { toast } from "react-toastify";
const Step3 = ({
  task,
  setSteps,
  addtask,
  tasks,
  preview,
  selectedAnswers,
  setSelectedAnswers,
  show,
  setShow,
}) => {
  const [question, setQuestion] = useState(0);
  const [selected, setSelected] = useState([]);

  const handleNext = () => {
    const existingAnswerIndex = selectedAnswers.findIndex(
      (selec) => selec.question === task.questions[question].question
    );
    if (selected.length === 0) {
      const check = show.findIndex((selec) => selec.question === question);
      if (check === -1) {
        toast.error("Please Select an answer");
      } else {
        if (task.questions.length > question + 1) {
          setQuestion(question + 1);
        } else {
          addtask();
          setSelected([]);
          // setQuestion(0);
        }
      }
    } else {
      if (existingAnswerIndex !== -1) {
        if (selected.length !== 0) {
          selectedAnswers[existingAnswerIndex] = {
            index: question,
            question: task.questions[question].question,
            selected: selected,
          };
        }
      } else {
        if (selected.length !== 0) {
          selectedAnswers.push({
            index: question,
            question: task.questions[question].question,
            selected: selected,
          });
        }
      }

      setSelected([]);
      if (task.questions.length > question + 1) {
        setQuestion(question + 1);
      } else {
        addtask();
        setSelected([]);
        // setQuestion(0);
      }
    }
  };

  const handleSelect = ({ opt, question }) => {
    // Check if the option is already selected

    if (task.questions[question].isMultiSelect) {
      const isSelected = show.some((selec) => selec.opt.value === opt.value);
      if (isSelected) {
        setSelected(selected.filter((selec) => selec.opt.value !== opt.value));
        setShow(show.filter((selec) => selec.opt.value !== opt.value));
      } else {
        if (task.questions[question].options.length > selected.length + 1) {
          setSelected([...selected, { opt, question }]);
          setShow([...show, { opt, question }]);
        } else {
          toast.error("Cannot select all options");
        }
      }
    } else {
      setSelected([{ opt, question }]);
      setShow([{ opt, question }]);
    }
  };

  return (
    <div className="p-5 pt-0">
      <div
        className="p-5 rounded-3 "
        style={{
          background: "#FFF",
          height: "65vh",
          overflow: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        {console.log(show)}
        <p className="headertitle "> {preview.title}</p>
        <p className="belowtitletask mt-3 mb-4">
          Task {tasks + 1} : {task && task.taskTitle && task.taskTitle}
        </p>
        <div
          style={{ width: "100%", height: "1px", background: "#EAECF0" }}
        ></div>
        <div>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <p className="questionnumber">Question {question + 1}</p>
            <div className="d-flex" style={{ alignItems: "center" }}>
              {" "}
              {task.questions[question].isMultiSelect && (
                <>
                  <div
                    className="warning d-flex"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_5131_3770)">
                        <path
                          d="M9.9974 6.6665V9.99984M9.9974 13.3332H10.0057M18.3307 9.99984C18.3307 14.6022 14.5998 18.3332 9.9974 18.3332C5.39502 18.3332 1.66406 14.6022 1.66406 9.99984C1.66406 5.39746 5.39502 1.6665 9.9974 1.6665C14.5998 1.6665 18.3307 5.39746 18.3307 9.99984Z"
                          stroke="#DC6803"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5131_3770">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p
                    className="warningtext d-flex"
                    style={{ alignItems: "center" }}
                  >
                    Multiple right answers possible!
                  </p>
                </>
              )}
            </div>
          </div>
          <p className="question mt-3">
            {task.questions[question].question &&
              task.questions[question].question}
          </p>

          <div className="mt-4 flex-wrap d-flex" style={{ gap: "20px" }}>
            {task.questions[question] &&
              task.questions[question].options &&
              task.questions[question].options.map((opt, index) => (
                <div
                  className="rounded-3 p-4 d-flex"
                  key={index}
                  style={{
                    background:
                      show &&
                      show.some((selec) => selec.opt.value === opt.value)
                        ? "#FFF1F3"
                        : "#FFF",
                    border:
                      show &&
                      show.some((selec) => selec.opt.value === opt.value)
                        ? "1px solid #E31B54"
                        : "1px solid #B0B4C5",
                    cursor: "pointer",
                    minHeight: "152px",
                    width: "40%",
                    justifyContent: "space-between",
                  }}
                  onClick={() => {
                    handleSelect({ opt, question });
                  }}
                >
                  <p>{opt.value}</p>
                  {show &&
                  show.some((selec) => selec.opt.value === opt.value) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M11.97 2.5C6.44997 2.5 1.96997 6.98 1.96997 12.5C1.96997 18.02 6.44997 22.5 11.97 22.5C17.49 22.5 21.97 18.02 21.97 12.5C21.97 6.98 17.5 2.5 11.97 2.5ZM12 16.73C9.65997 16.73 7.76997 14.84 7.76997 12.5C7.76997 10.16 9.65997 8.27 12 8.27C14.34 8.27 16.23 10.16 16.23 12.5C16.23 14.84 14.34 16.73 12 16.73Z"
                        fill="#E31B54"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5Z"
                        fill="#F6F7FB"
                        stroke="#AFB2C5"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="d-flex p-5" style={{ justifyContent: "end" }}>
        <button
          className="btn p-2 mt-0 mb-0 m-3 "
          style={{ border: "2px solid #E31B54", color: "#E31B54" }}
          onClick={() => {
            if (question === 0) {
              setSteps(5);
            } else {
              setQuestion(question - 1);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.9999 3.25C15.8009 3.24906 15.6098 3.32836 15.4699 3.47L7.46993 11.47C7.17747 11.7628 7.17747 12.2372 7.46993 12.53L15.4699 20.53C15.7654 20.8054 16.2259 20.7972 16.5115 20.5116C16.7972 20.226 16.8053 19.7655 16.5299 19.47L9.05993 12L16.5299 4.53C16.8224 4.23718 16.8224 3.76282 16.5299 3.47C16.39 3.32836 16.199 3.24906 15.9999 3.25Z"
              fill="#E31B54"
            />
          </svg>
          Previous
        </button>
        <button
          className="continuebutton"
          onClick={() => {
            handleNext();
          }}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.99995 20.75C8.19902 20.7509 8.39007 20.6716 8.52995 20.53L16.53 12.53C16.8224 12.2372 16.8224 11.7628 16.53 11.47L8.52995 3.47C8.23444 3.19464 7.77394 3.20277 7.48833 3.48838C7.20272 3.77399 7.19459 4.23449 7.46995 4.53L14.94 12L7.46995 19.47C7.1775 19.7628 7.1775 20.2372 7.46995 20.53C7.60983 20.6716 7.80088 20.7509 7.99995 20.75Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Step3;
