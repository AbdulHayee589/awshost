import { useEffect, useState } from "react";
import upload from "../../assets/images/icons/upload.png";
import "./step4.css";
import { setStep as set } from "../../state";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Step4 = ({
  duration,
  setDuration,
  difficulty,
  setDifficulty,
  tools,
  setTools,
  setStep,
  selectedFile,
  setSelectedFile,
}) => {
  const tool = [
    "PDF Reader",
    "Text Editor",
    "MS Excel",
    "MS Powerpoint",
    "MS Word",
    "Calculator",
    "Webcam",
  ];
  const dispatch = useDispatch();
  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);

    // Do something with the selected file, for example, set it to state
    // You can use this file for further processing like uploading to a server
  };

  useEffect(() => {
    dispatch(set({ step: 4 }));
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedFile(e.dataTransfer.files[0]);
  };

  const handleAddtool = (tol) => {
    if (tools.includes(tol)) {
      setTools(tools.filter((item) => item !== tol));
    } else {
      setTools([...tools, tol]);
    }
  };

  const handleSubmit = () => {
    if (duration && difficulty && tools.length > 0 && selectedFile) {
      setStep(5);
      dispatch(set({ step: 5 }));
    } else {
      toast.error("Enter All Details");
    }
  };

  return (
    <div className="col-md-10 col-12 p-5">
      <p className="HeaderText mt-4">Create new challenge</p>
      <p
        className="mt-4"
        style={{ fontSize: "24px", fontWeight: "400", color: "#0C111D" }}
      >
        Challenge Introduction Page
      </p>
      <p
        style={{
          color: "#1D2939",
          fontSize: "14px",
          fontWeight: "400",
          fontFamily: "Public Sans",
        }}
        className="mb-3"
      >
        Develop
      </p>
      <p className="timecommitment mt-3">Upload Introduction Video</p>
      <div
        className="col-md-12 col-12 mt-3 d-flex row p-3 border rounded-3"
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
          {selectedFile ? (
            <p
              style={{
                color: "#E31B54",
                fontFamily: "Public Sans",
                fontWeight: "600",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              {selectedFile.name}
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
      <hr style={{ borderColor: "#D9D9D9", borderWidth: "1px" }} />
      <p className="timecommitment mt-5">Time Commitment</p>
      <div className="row mt-3">
        <div className="col-md-6 ">
          <p className="expectedduration ">Expected Duration</p>
        </div>
        <div className="col-md-6 d-flex" style={{ gap: "20px" }}>
          <button
            className="btn border rounded-3 secondbuttontext"
            style={
              duration === "45"
                ? { backgroundColor: "#FEA3B4", color: "#FFF" }
                : { backgroundColor: "#FFF" }
            }
            onClick={() => setDuration("45")}
          >
            45 min
          </button>
          <button
            className="btn border rounded-3 secondbuttontext"
            style={
              duration === "60"
                ? { backgroundColor: "#FEA3B4", color: "#FFF" }
                : { backgroundColor: "#FFF" }
            }
            onClick={() => setDuration("60")}
          >
            60 min
          </button>
          <button
            className="btn border rounded-3 secondbuttontext"
            style={
              duration === "120"
                ? { backgroundColor: "#FEA3B4", color: "#FFF" }
                : { backgroundColor: "#FFF" }
            }
            onClick={() => setDuration("120")}
          >
            120 min
          </button>
        </div>
      </div>
      <p className="timecommitment mt-5">Requirements</p>
      <div className="row mt-3">
        <div className="col-md-6 ">
          <p className="expectedduration ">Difficulty Level</p>
        </div>
        <div className="col-md-6 d-flex flex-wrap" style={{ gap: "20px" }}>
          <button
            className="btn border rounded-3 secondbuttontext"
            style={
              difficulty === "Basic"
                ? { backgroundColor: "#FEA3B4", color: "#FFF" }
                : { backgroundColor: "#FFF" }
            }
            onClick={() => setDifficulty("Basic")}
          >
            Basic
          </button>
          <button
            className="btn border rounded-3 secondbuttontext"
            style={
              difficulty === "Intermediate"
                ? { backgroundColor: "#FEA3B4", color: "#FFF" }
                : { backgroundColor: "#FFF" }
            }
            onClick={() => setDifficulty("Intermediate")}
          >
            Intermediate
          </button>
          <button
            className="btn border rounded-3 secondbuttontext"
            style={
              difficulty === "Advanced"
                ? { backgroundColor: "#FEA3B4", color: "#FFF" }
                : { backgroundColor: "#FFF" }
            }
            onClick={() => setDifficulty("Advanced")}
          >
            Advanced
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 ">
          <p className="expectedduration ">Required Tools</p>
        </div>
        <div className="col-md-6 d-flex flex-wrap" style={{ gap: "10px" }}>
          {tool &&
            tool.map((tol, i) => (
              <button
                key={i}
                style={
                  tools.includes(tol)
                    ? { backgroundColor: "#FEA3B4", color: "#FFF" }
                    : { backgroundColor: "#FFF" }
                }
                className="btn border rounded-3 secondbuttontext"
                onClick={() => {
                  handleAddtool(tol);
                }}
              >
                {tol}
              </button>
            ))}
        </div>
      </div>
      <hr style={{ borderColor: "#D9D9D9", borderWidth: "1px" }} />
      <div
        className="d-flex mt-5 "
        style={{ justifyContent: "end", gap: "10px" }}
      >
        <button className="createbackbutton" onClick={() => setStep(3)}>
          Back
        </button>
        <button
          className="continuebutton"
          onClick={() => {
            handleSubmit();
          }}
        >
          Preview Page
        </button>
      </div>
    </div>
  );
};
export default Step4;
