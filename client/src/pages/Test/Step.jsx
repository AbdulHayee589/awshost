import axios from "axios";
const Document = ({ task, setSteps, tasks, preview }) => {
  const handleDownload = (filename) => {
    axios
      .get(`http://localhost:5000/download/${filename}`, {
        responseType: "blob",
      })
      .then((response) => {
        // Create a Blob from the response data
        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });

        // Create a link element and trigger the download
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      })
      .catch((error) => {
        console.error("Error downloading document:", error);
      });
  };

  return (
    <div className="p-5 pt-0">
      <div
        className="p-5 pt-4 rounded-3 "
        style={{
          background: "#FFF",
          height: "65vh",
          overflow: "auto",
        }}
      >
        {" "}
        <div>
          {" "}
          <p className="headertitle "> {preview && preview.title}</p>
          <p className="belowtitletask mt-3 mb-4">
            Task {tasks + 1} : {task && task.taskTitle && task.taskTitle}
          </p>
          <div
            style={{ width: "100%", height: "1px", background: "#EAECF0" }}
          ></div>
        </div>
        <div
          className="flex-wrap d-flex mt-3"
          style={{
            gap: "30px",
            alignItems: "center",
          }}
        >
          {task.documents.map((doc, index) => (
            <div
              key={index}
              className="documentdiv  p-5 "
              style={{ maxHeight: "400px", maxWidth: "285px" }}
            >
              <div className="col-md-12 pt-5 pb-3 mt-5">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="40"
                  viewBox="0 0 32 40"
                  fill="none"
                >
                  <path
                    d="M0 4C0 1.79086 1.79086 0 4 0H20L32 12V36C32 38.2091 30.2091 40 28 40H4C1.79086 40 0 38.2091 0 36V4Z"
                    fill="#C01048"
                  />
                  <path
                    opacity="0.3"
                    d="M20 0L32 12H24C21.7909 12 20 10.2091 20 8V0Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="col-md-12"> {doc.originalname}</p>
              <button
                className="btn   mt-3 d-flex"
                style={{ color: "#E31B54", justifyContent: "start" }}
                onClick={() => handleDownload(doc.filename)}
              >
                <p>Download file</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.00001 20.7508C8.19908 20.7518 8.39013 20.6725 8.53001 20.5308L16.53 12.5308C16.8225 12.238 16.8225 11.7636 16.53 11.4708L8.53001 3.47082C8.2345 3.19546 7.774 3.20359 7.48839 3.4892C7.20278 3.77481 7.19465 4.23531 7.47001 4.53082L14.94 12.0008L7.47001 19.4708C7.17756 19.7636 7.17756 20.238 7.47001 20.5308C7.6099 20.6725 7.80095 20.7518 8.00001 20.7508Z"
                    fill="#E31B54"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex p-5" style={{ justifyContent: "end" }}>
        <button
          className="btn p-2 mt-0 mb-0 m-3 "
          style={{ border: "2px solid #E31B54", color: "#E31B54" }}
          onClick={() => {
            setSteps(4);
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
            setSteps(6);
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

export default Document;
