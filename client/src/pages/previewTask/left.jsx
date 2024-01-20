import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Left = ({ preview, task, steps }) => {
  const { duration } = preview || 20;
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Convert minutes to seconds
  const navigate = useNavigate();

  useEffect(() => {
    if (!preview) {
      navigate("/student/dashboard");
    }
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timeLeft]);

  const calculateProgress = () => {
    const totalLength = 2 * Math.PI * 90; // Circumference of the circle
    const progress = (1 - timeLeft / (duration * 60)) * totalLength;
    return progress > totalLength ? totalLength : progress < 0 ? 0 : progress;
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="col-md-3 p-5">
      <div
        className="p-5 d-flex shadowa rounded-3 row"
        style={{
          background: "#FFF",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <img
            src={JSON.parse(preview.company).img}
            alt="Company image"
            height="56px"
          />
        </div>
      </div>
      <div
        className="p-4 d-flex shadowa rounded-3 mt-5 row"
        style={{
          background: "#FFF",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="202"
          height="202"
          viewBox="0 0 202 202"
          fill="none"
        >
          <circle
            cx="101"
            cy="101"
            r="90"
            stroke="#FFF"
            strokeDashoffset={calculateProgress()}
            strokeWidth="12"
            fill="#FFF"
          />{" "}
          <circle
            cx="101"
            cy="101"
            r="90"
            stroke="#177B57"
            strokeWidth="12"
            fill="none"
            strokeDasharray={2 * Math.PI * 90}
            strokeDashoffset={calculateProgress()}
            strokeLinecap="round"
          />{" "}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#177B57"
            fontSize="30px"
            style={{
              textAlign: "center",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "135%", // 40.5px
            }}
          >
            {formatTime(timeLeft)}
          </text>
        </svg>

        <p className="text-center countdown">Countdown</p>
        <p className="text-center totaltime">{preview.duration} mins total</p>
      </div>
      <div
        className="p-4 d-flex shadowa rounded-3 mt-5 row"
        style={{
          background: "#FFF",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <p className="overview">Overview</p>
        <div>
          <div className="row ">
            <div className="col-md-2"></div>
          </div>
          {preview.alltask.length > 0 &&
            preview.alltask.map((tas, index) => (
              <div key={index} className="d-flex">
                <div className="col-md-1 " style={{ justifyContent: "center" }}>
                  {index === 0 && (
                    <div
                      className="d-flex"
                      style={{ justifyContent: "center" }}
                    >
                      <div
                        style={{
                          width: "2px",
                          height: "25px",
                          background: "#177B57",
                          borderRadius: 2,
                        }}
                      />
                    </div>
                  )}

                  <div className="d-flex" style={{ justifyContent: "center" }}>
                    {" "}
                    {index < task && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="0.75"
                          y="0.75"
                          width="22.5"
                          height="22.5"
                          rx="11.25"
                          stroke="#177B57"
                          stroke-width="1.5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.0965 7.38967L9.9365 14.2997L8.0365 12.2697C7.6865 11.9397 7.1365 11.9197 6.7365 12.1997C6.3465 12.4897 6.2365 12.9997 6.4765 13.4097L8.7265 17.0697C8.9465 17.4097 9.3265 17.6197 9.7565 17.6197C10.1665 17.6197 10.5565 17.4097 10.7765 17.0697C11.1365 16.5997 18.0065 8.40967 18.0065 8.40967C18.9065 7.48967 17.8165 6.67967 17.0965 7.37967V7.38967Z"
                          fill="#177B57"
                        />
                      </svg>
                    )}
                    {index > task && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="0.75"
                          y="0.75"
                          width="22.5"
                          height="22.5"
                          rx="11.25"
                          stroke="#EAECF0"
                          stroke-width="1.5"
                        />
                        <circle cx="12" cy="12" r="4" fill="#EAECF0" />
                      </svg>
                    )}
                    {index === task && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="0.75"
                          y="0.75"
                          width="22.5"
                          height="22.5"
                          rx="11.25"
                          fill="#EEF4FF"
                        />
                        <rect
                          x="0.75"
                          y="0.75"
                          width="22.5"
                          height="22.5"
                          rx="11.25"
                          stroke="#177B57"
                          stroke-width="1.5"
                        />
                        <circle cx="12" cy="12" r="4" fill="#177B57" />
                      </svg>
                    )}
                  </div>
                  {index !== preview.alltask.length - 1 && (
                    <div
                      className="d-flex"
                      style={{ justifyContent: "center" }}
                    >
                      <div
                        style={{
                          width: "2px",
                          height: "25px",
                          background: "#177B57",
                          borderRadius: 2,
                        }}
                      />
                    </div>
                  )}
                  {}
                </div>
                <div
                  className={`col-md-9 ${
                    index === 0 ? "mt-4" : " mt-0"
                  } mb-0 m-2 `}
                >
                  <p className="tasknumbering"> Task {index + 1}</p>
                  <p className="tasktitlename">{tas.taskTitle}</p>
                </div>
                {/* <div className="col-md-2">
                  {index > task + 1 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="0.75"
                        y="0.75"
                        width="22.5"
                        height="22.5"
                        rx="11.25"
                        stroke="#EAECF0"
                        stroke-width="1.5"
                      />
                      <circle cx="12" cy="12" r="4" fill="#EAECF0" />
                    </svg>
                  )}
                  {index === task && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="0.75"
                        y="0.75"
                        width="22.5"
                        height="22.5"
                        rx="11.25"
                        fill="#EEF4FF"
                      />
                      <rect
                        x="0.75"
                        y="0.75"
                        width="22.5"
                        height="22.5"
                        rx="11.25"
                        stroke="#177B57"
                        stroke-width="1.5"
                      />
                      <circle cx="12" cy="12" r="4" fill="#177B57" />
                    </svg>
                  )}
                  {index < task && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="0.75"
                        y="0.75"
                        width="22.5"
                        height="22.5"
                        rx="11.25"
                        stroke="#177B57"
                        stroke-width="1.5"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.0965 7.38967L9.9365 14.2997L8.0365 12.2697C7.6865 11.9397 7.1365 11.9197 6.7365 12.1997C6.3465 12.4897 6.2365 12.9997 6.4765 13.4097L8.7265 17.0697C8.9465 17.4097 9.3265 17.6197 9.7565 17.6197C10.1665 17.6197 10.5565 17.4097 10.7765 17.0697C11.1365 16.5997 18.0065 8.40967 18.0065 8.40967C18.9065 7.48967 17.8165 6.67967 17.0965 7.37967V7.38967Z"
                        fill="#177B57"
                      />
                    </svg>
                  )}
                </div> */}
                {/* <div className="col-md-6">
                  <p className="steps d-flex ">Task {index + 1}</p>
                  <p>{tas.taskTitle}</p>
                </div> */}
                {/* <div className=" ">
                  {" "}
                  <div
                    style={{
                      width: "2px",
                      height: "25px",
                      background: "#177B57",
                      borderRadius: 2,
                    }}
                  />
                </div> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Left;
