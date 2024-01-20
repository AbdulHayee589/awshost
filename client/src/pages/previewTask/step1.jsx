import ReactPlayer from "react-player";
const Step1 = ({ task, setSteps, tasks, preview }) => {
  return (
    <div className="p-5 pt-0 ">
      <div className="p-5 rounded-3" style={{ background: "#FFF" }}>
        <p className="headertitle "> {preview.title}</p>
        <p className="belowtitletask mt-3 mb-4">
          Task {tasks + 1} : {task && task.taskTitle && task.taskTitle}
        </p>

        {task && (
          <>
            <div>
              <ReactPlayer
                url={`http://localhost:5000/uploads/${task.introVideo}`}
                controls
                width="100%"
                height="50vh"
              />
            </div>
          </>
        )}
      </div>
      <div className="d-flex p-5" style={{ justifyContent: "end" }}>
        <button
          className="continuebutton"
          onClick={() => {
            setSteps(2);
          }}
        >
          Next{" "}
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

export default Step1;
