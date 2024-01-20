import { useNavigate } from "react-router-dom";
const Step4 = ({ setSteps }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="p-5 rounded-3 d-flex"
        style={{
          background: "#EEF1FA",
          height: "65vh",
          overflow: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="alltask">All Tasks Completed</h1>
      </div>
      <div className="d-flex p-5" style={{ justifyContent: "end" }}>
        <button
          className="continuebutton"
          onClick={() => {
            navigate("/student/dashboard/challenge");
          }}
        >
          Finish
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
    </>
  );
};

export default Step4;
