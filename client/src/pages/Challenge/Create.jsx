import React, { useEffect, useState } from "react";
import Right from "./Rightbar";
import { useMediaQuery } from "@mui/material";
import { toast } from "react-toastify";
import "./create.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { setStep as set } from "../../state";
import { useDispatch } from "react-redux";

const Create = ({
  step,
  setStep,
  selectedFile,
  setSelectedFile,
  title,
  setTitle,
  description,
  setDescription,
}) => {
  const navigate = useNavigate();

  const isNonMobile = useMediaQuery("(min-width:767px)");
  const dispatch = useDispatch();
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const img = new Image();
      img.onload = function () {
        setSelectedFile(file);
      };
      img.src = URL.createObjectURL(file);
    } else {
      toast.error("Please select a valid image file.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    dispatch(set({ step: 1 }));
  }, []);

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

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const fileInputRef = React.createRef();

  const handleSubmit = () => {
    if (!title) {
      toast.error("Please Enter Challenge Title", {});
      return;
    } else if (!selectedFile) {
      toast.error("Please upload Challenge Thumbnail", {});
      return;
    } else if (description.replace(/(<([^>]+)>)/gi, "").length === 0) {
      toast.error("Please Enter Challenge description", {});
      return;
    } else {
      setStep(2);
    }
  };

  const maxCharacters = 180;

  const handleChange = (value) => {
    console.log(value.replace(/(<([^>]+)>)/gi, "").length);
    // Check if the content exceeds the character limit
    if (value.replace(/(<([^>]+)>)/gi, "").length <= maxCharacters) {
      setDescription(value);
    } else {
      setDescription(
        value.replace(/(<([^>]+)>)/gi, "").slice(0, maxCharacters)
      );
    }
  };

  return (
    <div
      className="col-md-10  pt-0"
      style={
        step === 5 ? {} : { backgroundColor: "#F0F5FE", minHeight: "100vh" }
      }
    >
      <div className="p-5 pt-2">
        <p
          className="mt-4"
          style={{ fontSize: "24px", fontWeight: "400", color: "#0C111D" }}
        >
          Basic Information
        </p>
        <p
          style={{
            color: "#1D2939",
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: "Public Sans",
          }}
        >
          What is this challenge about?
        </p>
        <div className="row mt-5">
          <p className="col-md-4 thumbnailcreate">Challenge title</p>
          <input
            className="col-md-7 col-12 forminput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="row mt-3">
          <hr style={{ borderColor: "#D9D9D9", borderWidth: "1px" }} />
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <p className="thumbnailcreate">Thumbnail</p>
            <p className="mt-3 thumbnailcreatetext">
              Give your course a thumbnail. Similar to a book cover, this photo
              will appear at the top of your course overview page. For best
              results, use a ratio of 3:2.
            </p>
          </div>
          <div
            className="col-md-7  border rounded-3"
            style={{ backgroundColor: "#FFF", justifyContent: "center" }}
          >
            <div className="d-flex" style={{ justifyContent: "center" }}>
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  className="img-fluid"
                  style={
                    isNonMobile
                      ? { maxHeight: "300px" }
                      : { maxHeight: "200px" }
                  }
                />
              ) : (
                <div
                  className="mt-2 p-3 d-flex"
                  style={{
                    backgroundColor: "#FFF5F6",
                    borderRadius: "60px",
                    height: "60px",
                    width: "60px",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                  >
                    <path
                      d="M0.399902 4C0.399902 1.79086 2.19076 0 4.3999 0H12.3999L19.5999 7.2V20C19.5999 22.2091 17.809 24 15.5999 24H4.3999C2.19076 24 0.399902 22.2091 0.399902 20V4Z"
                      fill="#E31B54"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      x="5"
                      y="6"
                    >
                      <g clipPath="url(#clip0_4343_10944)">
                        <path
                          d="M5.4 3.3998L4.95378 2.50737C4.82536 2.25053 4.76115 2.12210 4.66535 2.02827C4.58063 1.94530 4.47853 1.88219 4.36643 1.84353C4.23967 1.7998 4.09608 1.7998 3.80892 1.7998H2.28C1.83196 1.7998 1.60794 1.7998 1.43681 1.887C1.28628 1.9637 1.16389 2.08608 1.08719 2.23661C1 2.40774 1 2.63176 1 3.0798V3.3998M1 3.3998H7.08C7.75206 3.3998 8.08809 3.3998 8.34479 3.5306C8.57058 3.64565 8.75416 3.82922 8.86921 4.05502C9 4.31171 9 4.64774 9 5.31981V7.07981C9 7.75187 9 8.0879 8.86921 8.34459C8.75416 8.57039 8.57058 8.75397 8.34479 8.86901C8.08809 8.99981 7.75206 8.99981 7.08 8.99981H2.92C2.24794 8.99981 1.91191 8.99981 1.65521 8.86901C1.42942 8.75397 1.24584 8.57039 1.13079 8.34459C1 8.0879 1 7.75187 1 7.07981V3.3998Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4343_10944">
                          <rect
                            width="9.6"
                            height="9.6"
                            fill="white"
                            transform="translate(0.200195 0.599609)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </svg>
                </div>
              )}
            </div>
            {!selectedFile && (
              <div
                className="d-flex mt-2 "
                style={{ justifyContent: "center" }}
              >
                <p className="addthumbnail">Add Thumbnail image</p>
              </div>
            )}
            <div
              className="d-flex mt-3 mb-3"
              style={{ justifyContent: "center" }}
            >
              {" "}
              <button
                className="d-flex border uploadbuttoncreate"
                style={{ gap: "10px" }}
                onClick={openFileInput}
              >
                {selectedFile ? "Change" : "Upload"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M11.8109 16.54L8.08086 12.82C7.92269 12.6624 7.83379 12.4483 7.83379 12.225C7.83379 12.0017 7.92269 11.7876 8.08086 11.63C8.41349 11.3113 8.93822 11.3113 9.27086 11.63L11.5609 13.93V3.84C11.5609 3.37608 11.9369 3 12.4009 3C12.8648 3 13.2409 3.37608 13.2409 3.84V13.93L15.5309 11.63C15.8635 11.3113 16.3882 11.3113 16.7209 11.63C16.879 11.7876 16.9679 12.0017 16.9679 12.225C16.9679 12.4483 16.879 12.6624 16.7209 12.82L12.9909 16.54C12.8369 16.7009 12.6235 16.7913 12.4009 16.79C12.1777 16.7937 11.9634 16.7029 11.8109 16.54Z"
                    fill="white"
                  />
                  <path
                    d="M17.6209 8.42H18.8309C21.3471 8.47468 23.3455 10.5536 23.3009 13.07V16.88C23.3455 19.3964 21.3471 21.4753 18.8309 21.53L5.97086 21.45C3.45462 21.3953 1.45621 19.3164 1.50086 16.8V12.99C1.47135 11.7762 1.9261 10.6005 2.76474 9.72245C3.60338 8.84442 4.75696 8.33621 5.97086 8.31H7.18086C7.64478 8.31 8.02086 8.68608 8.02086 9.15C8.02086 9.61392 7.64478 9.99 7.18086 9.99H5.97086C5.20152 10.0134 4.47354 10.3437 3.94936 10.9074C3.42519 11.471 3.14844 12.221 3.18086 12.99V16.77C3.14844 17.539 3.42519 18.289 3.94936 18.8526C4.47354 19.4163 5.20152 19.7466 5.97086 19.77L18.8309 19.91C19.6002 19.8866 20.3282 19.5563 20.8524 18.9926C21.3765 18.429 21.6533 17.679 21.6209 16.91V13.1C21.6533 12.331 21.3765 11.581 20.8524 11.0174C20.3282 10.4537 19.6002 10.1234 18.8309 10.1H17.6209C17.1569 10.1 16.7809 9.72392 16.7809 9.26C16.7809 8.79608 17.1569 8.42 17.6209 8.42Z"
                    fill="white"
                  />
                </svg>
              </button>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
            </div>
          </div>
        </div>
        <hr style={{ borderColor: "#D9D9D9", borderWidth: "1px" }} />
        <p className="challengeDescription mb-3">Short Challenge Description</p>

        <div style={{ overflow: "hidden" }}>
          <ReactQuill
            value={description}
            onChange={handleChange}
            modules={modules}
            formats={formats}
            className="col-md-11 rounded-3 whitescrollbar"
            style={{
              backgroundColor: "#FFF",
              height: "400px",
              overflow: "auto",
            }}
          />
          <style>
            {`
          .whitescrollbar::-webkit-scrollbar {
            width: 10px;
          }

          .whitescrollbar::-webkit-scrollbar-thumb {
            background-color: #E31B54; /* Change this to your desired scrollbar color */
            border-radius: 10px;
          }

          .whitescrollbar::-webkit-scrollbar-track {
            background-color: #FFF; /* Change this to your desired scrollbar track color */
            border-radius: 10px;
          }
        `}
          </style>
        </div>
        <p
          className="mt-2"
          style={{
            fontFamily: "Public Sans",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {description.replace(/(<([^>]+)>)/gi, "").length}/180 Characters
        </p>
        <div
          className="d-flex col-md-11 "
          style={{ justifyContent: "end", gap: "10px" }}
        >
          <button
            className="createbackbutton"
            onClick={() => navigate("/dashboard/Challenges")}
          >
            Back
          </button>
          <button className="continuebutton" onClick={() => handleSubmit()}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default Create;
