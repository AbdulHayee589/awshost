import { useSelector } from "react-redux";

import "./test.css";
import Left from "./left";
import TestHeader from "./header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Document from "./Step";
import Terms from "./Terms";
import Tasks from "./tasks";
import axios from "axios";
const Task = () => {
  const preview = useSelector((state) => state.preview);
  const [steps, setSteps] = useState(1);
  const navigate = useNavigate();
  const [task, setTask] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [show, setShow] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!preview) {
      navigate("/student/dashboard");
    }
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const addtask = () => {
    if (preview.alltask.length > task + 1) {
      setTask(task + 1);
      setSteps(1);
    } else {
      setSteps(7);
      axios
        .post("http://localhost:5000/Test/Results", {
          preview,
          user,
          selectedAnswers,
        })
        .then((res) => {
          if (res.data === "DONE") {
            console.log("Done");
          }
        });
      setTask(task + 1);
    }
  };

  return (
    <div
      style={{ background: "#F6F7FB", minHeight: "100vh", minWidth: "100vw" }}
    >
      {preview && preview.alltask.length > 0 && (
        <TestHeader
          tasks={preview.alltask[task]}
          task={task}
          preview={preview}
          steps={steps}
        />
      )}

      <div className="row">
        {" "}
        {preview && (
          <>
            <div className="col-md-9 pt-4 ">
              {steps === 1 && preview && preview.alltask.length > 0 && (
                <div className="mt-4">
                  <Step1
                    task={preview.alltask[task]}
                    setSteps={setSteps}
                    tasks={task}
                    preview={preview}
                  />
                </div>
              )}
              {steps === 2 && preview && preview.alltask.length > 0 && (
                <div className="mt-4">
                  <Step2
                    task={preview.alltask[task]}
                    setSteps={setSteps}
                    tasks={task}
                    preview={preview}
                  />
                </div>
              )}
              {steps === 3 && preview && preview.alltask.length > 0 && (
                <div className="mt-4">
                  <Terms
                    task={preview.alltask[task]}
                    setSteps={setSteps}
                    tasks={task}
                    preview={preview}
                  />
                </div>
              )}
              {steps === 4 && preview && preview.alltask.length > 0 && (
                <div className="mt-4">
                  <Tasks
                    task={preview.alltask[task]}
                    setSteps={setSteps}
                    tasks={task}
                    preview={preview}
                  />
                </div>
              )}
              {steps === 5 && preview && preview.alltask.length > 0 && (
                <div className="mt-4">
                  <Document
                    task={preview.alltask[task]}
                    setSteps={setSteps}
                    tasks={task}
                    preview={preview}
                  />
                </div>
              )}
              {steps === 6 && preview && preview.alltask.length > 0 && (
                <div className="mt-4">
                  <Step3
                    task={preview.alltask[task]}
                    setSteps={setSteps}
                    addtask={addtask}
                    tasks={task}
                    preview={preview}
                    selectedAnswers={selectedAnswers}
                    setSelectedAnswers={setSelectedAnswers}
                    show={show}
                    setShow={setShow}
                  />
                </div>
              )}
              {steps === 7 && preview && preview.alltask.length > 0 && (
                <div className="mt-4">
                  <Step4
                    task={preview.alltask[task]}
                    setSteps={setSteps}
                    addtask={addtask}
                  />
                </div>
              )}
            </div>
            <Left preview={preview} task={task} steps={steps} />
          </>
        )}
      </div>
    </div>
  );
};
export default Task;
