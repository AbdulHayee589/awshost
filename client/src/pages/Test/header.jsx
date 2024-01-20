import "./header.css";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
const TestHeader = ({ preview, task, tasks, steps }) => {
  const [fillPercentage, setFillPercentage] = useState(16.6777);

  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (steps !== 7) {
      setPercentage((task / preview.alltask.length) * 100);
    } else {
      setPercentage(100);
    }
  }, [task, steps]);

  const fillBarStyle = {
    width: `${percentage}%`,
    height: "10px", // Adjust as needed
    background: "#E31B54", // Color of the fill bar
    transition: "width 0.3s ease", // Optional: Add transition for a smoother effect
  };

  const handleFillPercentageChange = (newPercentage) => {
    setFillPercentage(newPercentage);
  };

  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="row d-flex" style={{ justifyContent: "space-between" }}>
        <button
          className="col-md-1 btn"
          onClick={() => navigate("/student/dashboard")}
        >
          <img src={logo} alt="logo img" />
        </button>
        {/* <div className="col-md-4">
          <p className="headertitle "> {preview.title}</p>
          <p className="belowtitletask">
            Task {task + 1} : {tasks && tasks.taskTitle && tasks.taskTitle}
          </p>
        </div> */}
        <div
          className="d-flex col-md-6 mt-0 mb-0 m-2"
          style={{ gap: "30px", justifyContent: "end" }}
        >
          <div
            className="col-md-5 p-4 rounded-3 d-flex"
            style={{
              background: "#FFF",

              alignItems: "center",
            }}
          >
            <div className="col-md-12">
              <div
                className="d-flex col-md-12"
                style={{ justifyContent: "space-between" }}
              >
                {" "}
                <p className="rate">Rate of Completion</p>
                <p className="nextrate">
                  {" "}
                  {percentage}%{/* ADD PERCENTAGE */}
                </p>
              </div>

              <div className="fill-bar rounded-4" style={fillBarStyle}></div>
            </div>
          </div>
          <div
            className="col-md-5 p-3 rounded-3 flex-wrap d-flex"
            style={{
              background: "#FFF",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="d-flex flex-wrap" style={{ gap: "10px" }}>
              {preview.alltask.length > 0 &&
                preview.alltask.map((tas, index) => (
                  <div
                    key={index}
                    className={`p-3  text-center d-flex ${
                      task === index && steps !== 7 && "rounded-5"
                    }`}
                    style={{
                      background: "#F9FAFB",
                      width: "43.322px",
                      height: "26px",
                      justifyContent: "center",
                      alignItems: "center",
                      ...(task === index &&
                        steps !== 7 && {
                          background: "#E31B54",
                        }),
                    }}
                  >
                    <p
                      className="steps"
                      style={
                        task === index && steps !== 7 ? { color: "white" } : {}
                      }
                    >
                      S{index + 1}
                    </p>
                  </div>
                ))}
              <div
                className={`p-3  text-center d-flex ${
                  steps === 7 && "rounded-5"
                } `}
                style={{
                  background: "#F9FAFB",
                  width: "43.322px",
                  height: "26px",
                  justifyContent: "center",
                  alignItems: "center",
                  ...(steps === 7 && {
                    background: "#E31B54",
                  }),
                }}
              >
                <p
                  className=" steps "
                  style={steps === 7 ? { color: "white" } : {}}
                >
                  Done
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestHeader;
