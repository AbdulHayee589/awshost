const Terms = ({ task, setSteps, tasks, preview }) => {
  return (
    <div className="p-5 pt-0">
      {" "}
      <div
        className="p-5 pt-4 rounded-3"
        style={{ background: "#FFF", height: "65vh", overflow: "auto" }}
      >
        <p className="headertitle "> {preview.title}</p>
        <p className="belowtitletask mt-3 mb-4">
          Task {tasks + 1} : {task && task.taskTitle && task.taskTitle}
        </p>
        <div
          style={{ width: "100%", height: "1px", background: "#EAECF0" }}
        ></div>

        <p className="taskbackground mt-3">
          Important key terms and frameworks
        </p>
        {console.log(task)}
        {task.terms && (
          <p
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: task.terms }}
          />
        )}
      </div>
      <div className="d-flex p-5" style={{ justifyContent: "end" }}>
        <button
          className="btn p-2 mt-0 mb-0 m-3 "
          style={{ border: "2px solid #E31B54", color: "#E31B54" }}
          onClick={() => {
            setSteps(2);
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
            setSteps(4);
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
export default Terms;
