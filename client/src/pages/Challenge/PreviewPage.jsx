import logo from "../../assets/images/logo.png";
import "./preview.css";
import { useMediaQuery } from "@mui/material";
import time from "../../assets/images/icons/time.png";
import videoicon from "../../assets/images/icons/videoicon.png";
import ReactPlayer from "react-player";
import image from "../../assets/images/guideline.png";
import linkedin from "../../assets/images/icons/linkedin.png";
import Footer from "../../components/Company/Footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PreviewPage = ({
  step,
  setStep,
  selectedFile,
  skills,
  learns,
  title,
  description,
  selectedItem,
  selectedLanguage,
  defaults,
  type,
  duration,
  difficulty,
  tools,
  selectedVideo,
  company,
}) => {
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const maxLines = 4;
  const navigate = useNavigate();
  const email = useSelector((state) => state.email);
  const [user, setUser] = useState("");
  const getClampedText = (text, maxLines) => {
    const lineHeight = 1.2; // Adjust this value based on your line height
    const maxHeight = maxLines * lineHeight;

    return {
      maxHeight: `${maxHeight}em`,
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: maxLines,
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let id;
        const userInfoResponse = await axios.post(
          "http://localhost:5000/getUserInfo",
          { email: email }
        );

        if (userInfoResponse.data.message === "Found") {
          setUser(userInfoResponse.data.user);
          id = userInfoResponse.data.user.company;
        } else {
          navigate("/register/organiser");
          return; // Exit early if user not found
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [email]);

  return (
    <>
      <div>
        <div
          className=" p-5 pt-3 pb-3 mb-0 d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <button className="backbutton" onClick={() => setStep(4)}>
            Back
          </button>
          <button className="continuebutton" onClick={() => setStep(6)}>
            {" "}
            Start Adding Tasks{" "}
          </button>
        </div>
        <div
          className={`${isNonMobile ? "p-4" : ""} `}
          style={{ height: "100vh", width: "100vw" }}
        >
          <div
            className={` rounded-4 ${isNonMobile ? "p-5" : "p-2"} `}
            style={{
              backgroundImage: selectedFile
                ? `url(${URL.createObjectURL(selectedFile)})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",

              height: "100%",
              width: "100%",
            }}
          >
            {" "}
            {console.log(company)}
            <div className="mb-5">
              <img src={logo} alt="logo image" height="45px" width="45px" />
            </div>
            <div
              className={`mt-5 behindpreviewcompanyimage ${
                isNonMobile ? "p-5" : "p-2"
              }`}
            >
              <div className={`${isNonMobile ? "m-5" : ""} row`}>
                {company && (
                  <div className=" row ">
                    <img
                      src={company.img}
                      alt="company logo"
                      className=" col-md-2"
                      style={{ maxHeight: "80px", maxWidth: "80px" }}
                    />
                    <div className="col-md-6" style={{ overflow: "hidden" }}>
                      <p
                        style={{
                          fontFamily: "Public Sans",
                          fontSize: "26px",
                          fontWeight: "800",
                          color: "#FFF",
                          overflow: "hidden",
                          wordWrap: "break-word", // Allow the text to break onto the next line
                          margin: 0,
                        }}
                      >
                        {company.title}
                      </p>
                    </div>
                  </div>
                )}

                <p
                  style={{ wordWrap: "break-word" }}
                  className="testtitle mt-3"
                >
                  {title}
                </p>

                <p
                  className={`descriptiontest row mt-3`}
                  style={getClampedText(description, maxLines)}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <div
                  className=" d-flex flex-wrap  mt-3"
                  style={{ gap: "10px" }}
                >
                  {console.log(company)}
                  <div className="roundedpreviewicons  ">
                    <img
                      src={company.country[0].icon}
                      alt="company country flag"
                      width="16px"
                      height="16px"
                    />
                  </div>
                  <div className="roundedpreviewicons">
                    <img src={time} alt="time" width="16px" height="16px" />
                    <p className="previewTime"> {duration} minutes</p>
                  </div>
                  <div className="roundedpreviewicons">
                    <img
                      src={videoicon}
                      alt="time"
                      width="16px"
                      height="16px"
                    />
                    <p className="previewTime">Video</p>
                  </div>
                </div>
                <div className="mt-5">
                  <button
                    className={`d-flex startchallengebutton ${
                      isNonMobile ? "p-3" : "p-2"
                    } `}
                  >
                    Start Challenge
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M8.50007 20.7498C8.69914 20.7508 8.89019 20.6715 9.03007 20.5298L17.0301 12.5298C17.3225 12.237 17.3225 11.7627 17.0301 11.4698L9.03007 3.46985C8.73456 3.19449 8.27406 3.20261 7.98845 3.48823C7.70284 3.77384 7.69471 4.23434 7.97007 4.52985L15.4401 11.9998L7.97007 19.4698C7.67762 19.7627 7.67762 20.237 7.97007 20.5298C8.10996 20.6715 8.30101 20.7508 8.50007 20.7498Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${isNonMobile ? "p-5" : "p-2"} `}
          style={{
            minHeight: "100vh",
            minWidth: "100vw",
            backgroundColor: "#F0F5FE",
          }}
        >
          <div className="m-5">
            <p className="Welcomemsg">
              Welcome to the {company.title} {type} challenge.
            </p>

            <div
              className="mt-5 row "
              style={{ justifyContent: "space-between" }}
            >
              <div className="col-md-9">
                <div>
                  {" "}
                  <div className="video-container">
                    {selectedVideo && (
                      <>
                        <ReactPlayer
                          url={URL.createObjectURL(selectedVideo)}
                          controls
                          width="100%"
                          height="100%"
                          style={{ maxHeight: "680px" }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>{" "}
              <div
                className={`col-md-3 videosideBar ${
                  isNonMobile ? "p-4" : "p-2 mt-3"
                } `}
              >
                <p className="skillstext">Skills you will expand & learn.</p>
                <p className="mt-3 skillsbelowtext">
                  Solve real-world challenges designed by investment banks, law
                  firms, consulting firms.
                </p>
                <div className="d-flex flex-wrap" style={{ gap: "20px" }}>
                  {skills &&
                    skills.map((ski, i) => (
                      <div
                        key={i}
                        className="mt-2  skillsshow d-flex"
                        style={{ cursor: "pointer" }}
                      >
                        <p className="skillsshowtext"> {ski}</p>
                      </div>
                    ))}
                  {learns &&
                    learns.map((ski, i) => (
                      <div
                        key={i}
                        className="mt-2  skillsshow d-flex"
                        style={{ cursor: "pointer" }}
                      >
                        <p className="skillsshowtext"> {ski}</p>
                      </div>
                    ))}
                </div>
                <button
                  className="btn d-flex mt-3"
                  style={{
                    color: "#E31B54",
                    fontFamily: "Public Sans",
                    fontSize: "16px",
                  }}
                >
                  See All Skills
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24  24"
                    fill="none"
                  >
                    <path
                      d="M8.00007 20.7498C8.19914 20.7508 8.39019 20.6715 8.53007 20.5298L16.5301 12.5298C16.8225 12.237 16.8225 11.7627 16.5301 11.4698L8.53007 3.46985C8.23456 3.19449 7.77406 3.20261 7.48845 3.48823C7.20284 3.77384 7.19471 4.23434 7.47007 4.52985L14.9401 11.9998L7.47007 19.4698C7.17762 19.7627 7.17762 20.237 7.47007 20.5298C7.60996 20.6715 7.80101 20.7508 8.00007 20.7498Z"
                      fill="#E31B54"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${isNonMobile ? " mb-0 p-5" : "p-2 m-3"} `}
          style={{ minHeight: "100vh", backgroundColor: "#FFF" }}
        >
          <p className="Welcomemsg col-md-4">
            Explore your career path with this challenge.
          </p>
          <div className="mt-5 row" style={{ gap: "50px" }}>
            <div
              className={`${
                isNonMobile ? "p-5 pb-0" : "p-2 pb-0"
              }   videosideBar col-md-3`}
              style={{ backgroundColor: "#FFF", maxWidth: "450px" }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M19.378 6.90272L9.76216 16.9006C9.54467 17.1206 9.422 17.4225 9.422 17.7377C9.422 18.0529 9.54467 18.3548 9.76216 18.5748C9.97596 18.797 10.266 18.922 10.5686 18.9223C10.8698 18.9155 11.1576 18.7915 11.3749 18.5748L20.9908 8.57694C21.2083 8.35694 21.3309 8.05507 21.3309 7.73983C21.3309 7.42459 21.2083 7.12272 20.9908 6.90272C20.5453 6.44081 19.8235 6.44081 19.378 6.90272Z"
                    fill="#C01048"
                  />
                  <path
                    d="M11.3597 13.0941C11.6616 13.0905 11.9505 12.966 12.1661 12.7467L15.3765 9.41404C15.7954 8.9473 15.7831 8.21997 15.3485 7.76886C14.914 7.31775 14.2133 7.30492 13.7637 7.73983L10.5533 11.0725C10.1084 11.5349 10.1084 12.2842 10.5533 12.7467C10.7707 12.9633 11.0585 13.0873 11.3597 13.0941Z"
                    fill="#C01048"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30.5914 17.1059L28.0201 4.20188C27.5364 1.75717 25.4642 0.00197899 23.06 0.000553946H7.76901C5.33631 -0.0358722 3.22212 1.72786 2.73286 4.20188L0.161536 17.1059C-0.280094 18.5252 0.204371 20.0785 1.36352 20.9598L13.429 30.1206C14.5936 30.9855 16.1593 30.9855 17.324 30.1206L29.3894 21.023C30.5751 20.1329 31.0627 18.5439 30.5914 17.1059ZM27.8832 18.7959L15.8177 27.9093C15.5522 28.0999 15.2008 28.0999 14.9352 27.9093L2.86979 18.7959C2.60171 18.6025 2.4899 18.2478 2.59592 17.9272C2.60272 17.8326 2.60272 17.7376 2.59592 17.6429L5.24332 4.73889C5.4929 3.5062 6.55606 2.63525 7.769 2.66981H23.1361C24.3206 2.67324 25.3416 3.53566 25.5857 4.73889L28.157 17.6429C28.1502 17.7376 28.1502 17.8326 28.157 17.9272C28.2631 18.2478 28.1512 18.6025 27.8832 18.7959Z"
                    fill="#C01048"
                  />
                </svg>
              </div>
              <p className="HeadingFont mt-4">Real-life insights</p>
              <p className="mt-2 smalltext">
                Demonstrate your skills in a real-life scenario and expand your
                skillset.
              </p>
              <img
                src={image}
                alt="guideline image"
                className="img-fluid mt-5"
              />
            </div>
            <div
              className={`${
                isNonMobile ? "p-5 pb-0" : "p-2 pb-0 mt-3"
              }   divcolorpreview col-md-3`}
              style={{ overflow: "hidden" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.69755 12.4784C6.93112 7.09803 12.1864 3.59351 18.012 3.59962C21.8297 3.59962 25.4907 5.11721 28.1888 7.81813C30.8869 10.5191 32.4007 14.1817 32.3967 17.9994C32.3967 23.8249 28.8866 29.0766 23.504 31.3045C18.1213 33.5324 11.9265 32.2977 7.80936 28.1762C3.69224 24.0548 2.46398 17.8587 4.69755 12.4784ZM29.3024 22.3767C29.8294 20.9779 30.0954 19.4942 30.0873 17.9994C30.1212 15.2503 29.216 12.5719 27.5213 10.4071C26.842 11.5391 25.559 13.2297 23.9741 13.2297C23.3644 13.1806 22.7508 13.242 22.1629 13.4108V13.5768C22.1629 13.8485 22.9025 14.5881 23.2949 14.9806C24.2723 15.7094 24.9231 16.794 25.1062 17.9994C25.1062 20.4145 25.3477 21.1541 25.559 21.3352C26.8639 21.4285 28.1368 21.7827 29.3024 22.3767ZM5.93668 17.9994C5.92296 15.3142 6.80463 12.7011 8.44231 10.5731C8.87 11.3531 9.69629 11.8303 10.5857 11.8108C11.807 12.4266 12.8865 13.2903 13.7554 14.3466C13.1161 14.7397 12.5366 15.2226 12.0347 15.7806C11.9881 15.8254 11.9374 15.8748 11.8836 15.9272C11.4672 16.3326 10.8699 16.9144 10.6159 16.9277C9.91704 16.9066 9.24051 17.1749 8.74614 17.6693C8.25178 18.1636 7.98345 18.8402 8.00458 19.539C8.00675 19.712 8.04803 19.8823 8.12533 20.0371L9.4838 22.754C9.50113 24.3168 9.75039 25.8682 10.2234 27.3578C7.46991 25.034 5.89788 21.6022 5.93668 17.9994ZM13.8913 29.3502C15.2122 29.8296 16.6067 30.0748 18.012 30.0747V30.12C22.1662 30.1479 26.0431 28.0384 28.276 24.5352C27.3655 24.0943 26.3935 23.794 25.393 23.6446C22.7817 23.6446 22.7817 19.9013 22.7817 18.09C22.7817 17.8164 22.1088 17.1446 21.693 16.7295C21.6729 16.7094 21.6534 16.6899 21.6346 16.6711C20.6641 15.9385 20.0193 14.8548 19.8384 13.6523C19.8384 11.041 22.4949 11.041 23.9138 11.041C24.3062 11.0259 25.2421 9.90896 25.8156 8.79199C21.3398 5.00316 14.7889 4.9777 10.2838 8.73162C10.3066 8.86144 10.3066 8.99425 10.2838 9.12406C10.2989 9.48632 10.4649 9.48632 10.631 9.48632C12.4422 9.48632 16.5026 13.1693 16.5629 14.89C16.5653 15.2781 16.4017 15.6486 16.1133 15.9082C15.8248 16.1678 15.4392 16.2916 15.0535 16.2485C14.7818 16.2636 14.0422 17.0032 13.6498 17.3956C12.9155 18.367 11.8336 19.0161 10.631 19.2069C10.5102 19.2069 10.3291 19.2069 10.3291 19.3579L11.6423 21.8786C11.7196 22.0334 11.7608 22.2037 11.763 22.3767C11.763 24.022 12.1253 26.6936 12.9102 27.4936C13.4578 27.9681 13.8078 28.6304 13.8913 29.3502Z"
                  fill="#101828"
                />
              </svg>
              <p className="HeadingFont mt-4" style={{ color: "black" }}>
                Stand out
              </p>
              <p className="mt-2 smalltext">
                Stand out to your favorite employers by participating in this
                challenge.
              </p>

              <div
                className="mt-5 p-5 d-flex companyimage"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FFF",
                  minHeight: "250px",
                }}
              >
                <img
                  src={company.img}
                  alt="guideline image"
                  className="img-fluid"
                  style={{ height: "70px" }}
                />
              </div>
            </div>
            {isNonMobile && (
              <div className="col-md-4">
                <div className="divcolorpreviewthird  p-5 ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.3251 22.6204L18.1951 26.8354C18.451 27.7326 18.1146 28.6937 17.3551 29.2354L13.2601 32.2354C12.8795 32.5209 12.4158 32.6737 11.9401 32.6704C11.4597 32.6737 10.9913 32.521 10.6051 32.2354L6.52508 29.2354C5.73174 28.6639 5.39832 27.6455 5.70008 26.7154L6.54008 22.6204C6.81694 21.3003 7.98127 20.3551 9.33008 20.3554H14.5351C15.8839 20.3551 17.0482 21.3003 17.3251 22.6204ZM7.87508 27.3004L12.0001 30.3904L16.0201 27.4204L15.1201 23.0704C15.0572 22.7981 14.8146 22.6052 14.5351 22.6054H9.33008C9.05057 22.6052 8.80797 22.7981 8.74508 23.0704L7.87508 27.3004Z"
                        fill="black"
                      />
                      <path
                        d="M12.0001 24.7204L10.5001 26.2204C10.2857 26.4294 10.1647 26.716 10.1647 27.0154C10.1647 27.3148 10.2857 27.6015 10.5001 27.8104C10.7068 28.0274 10.9954 28.1472 11.2951 28.1404C11.5622 28.1191 11.8126 28.0019 12.0001 27.8104L13.5001 26.3104C13.9058 26.0797 14.127 25.6224 14.0559 25.1611C13.9848 24.6998 13.6362 24.3303 13.1798 24.2324C12.7234 24.1346 12.254 24.3288 12.0001 24.7204Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.5751 3.64543L30.0751 14.1454C30.2983 14.3727 30.4177 14.6821 30.4051 15.0004V25.5004C30.4051 29.4355 27.2151 32.6254 23.2801 32.6254H18.9751C18.3538 32.6254 17.8501 32.1217 17.8501 31.5004C17.8501 30.8791 18.3538 30.3754 18.9751 30.3754H23.2801C25.9725 30.3754 28.1551 28.1928 28.1551 25.5004V16.1254H21.7801C19.5019 16.1254 17.6551 14.2786 17.6551 12.0004V5.61043H14.2801C11.5853 5.6187 9.40506 7.8056 9.40508 10.5004V18.0004C9.40508 18.6217 8.9014 19.1254 8.28008 19.1254C7.65876 19.1254 7.15508 18.6217 7.15508 18.0004V10.5004C7.13908 8.60039 7.88267 6.77266 9.22061 5.42346C10.5585 4.07426 12.38 3.31536 14.2801 3.31543H18.7801C19.0783 3.31569 19.3643 3.43439 19.5751 3.64543ZM19.9051 7.15543V12.0004C19.9133 13.0301 20.7504 13.8605 21.7801 13.8604H26.6101L19.9051 7.15543Z"
                        fill="black"
                      />
                    </svg>
                    <p className="HeadingFont mt-4" style={{ color: "black" }}>
                      Get a certificate
                    </p>
                    <p className="mt-2 smalltext">
                      You can share your certificate on your varyance and
                      LinkedIn profile and use it on your resume.
                    </p>
                  </div>
                  <div className="d-flex mt-5">
                    <img
                      src={logo}
                      alt="logo image"
                      height="45px"
                      width="45px"
                    />
                    <img
                      src={linkedin}
                      className="rounded-2 shadow"
                      alt="logo image"
                      height="35px"
                      width="35px"
                    />
                  </div>
                </div>
                <div className="divcolorpreviewforth  p-5 mt-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M34.1274 14.8478H35.9456C37.4276 14.8577 38.6266 16.0567 38.6365 17.5387V20.3387C38.6365 21.8249 37.4317 23.0297 35.9456 23.0297H34.5456V24.6115C34.6586 27.3802 32.5137 29.7201 29.7456 29.8478H26.8728C25.5556 29.8285 24.3077 29.2541 23.4365 28.266C22.5832 27.2519 21.3255 26.6664 20.0001 26.6664C18.6747 26.6664 17.4171 27.2519 16.5638 28.266C15.6925 29.2541 14.4446 29.8285 13.1274 29.8478H10.2547C7.48658 29.7201 5.34168 27.3802 5.45467 24.6115V23.0297H4.0183C2.53215 23.0297 1.32739 21.8249 1.32739 20.3387V17.5387C1.33731 16.0567 2.53628 14.8577 4.0183 14.8478H5.83648C6.51138 12.977 8.2664 11.7131 10.2547 11.666H29.7456C31.7204 11.7279 33.4573 12.9891 34.1274 14.8478ZM4.09103 17.5387V20.3024L5.45467 20.2842V17.5387H4.09103ZM31.8183 24.6115C31.9243 25.8722 31.0036 26.9866 29.7456 27.1206H26.8728C26.3291 27.117 25.8154 26.8702 25.4728 26.4478C24.0922 24.8824 22.1056 23.9856 20.0183 23.9856C17.931 23.9856 15.9444 24.8824 14.5638 26.4478C14.2212 26.8702 13.7075 27.117 13.1638 27.1206H10.2547C8.9966 26.9866 8.07599 25.8722 8.18194 24.6115V16.9024C8.07599 15.6417 8.9966 14.5272 10.2547 14.3933H29.7456C31.0036 14.5272 31.9243 15.6417 31.8183 16.9024V24.6115ZM34.5456 17.5569V20.3024L35.9092 20.3206V17.5569H34.5456Z"
                        fill="white"
                      />
                      <path
                        d="M16.3638 18.8297H10.9092C10.1561 18.8297 9.54557 19.4402 9.54557 20.1933C9.54557 20.9464 10.1561 21.5569 10.9092 21.5569H16.3638C17.1169 21.5569 17.7274 20.9464 17.7274 20.1933C17.7274 19.4402 17.1169 18.8297 16.3638 18.8297Z"
                        fill="white"
                      />
                      <path
                        d="M26.6001 19.2297C26.4715 19.0964 26.3167 18.9912 26.1456 18.9206C25.8118 18.7933 25.4429 18.7933 25.1092 18.9206C24.938 18.9912 24.7833 19.0964 24.6547 19.2297C24.4088 19.4902 24.2721 19.8351 24.2728 20.1933C24.2658 20.3676 24.2968 20.5413 24.3638 20.7024C24.4323 20.8703 24.5309 21.0244 24.6547 21.1569C24.919 21.4106 25.2702 21.5537 25.6365 21.5569C25.8118 21.5555 25.985 21.5184 26.1456 21.4478C26.3135 21.3793 26.4676 21.2807 26.6001 21.1569C26.8526 20.8993 26.9959 20.554 27.0001 20.1933C27.0007 20.0119 26.9635 19.8323 26.891 19.666C26.8199 19.5049 26.7215 19.3572 26.6001 19.2297Z"
                        fill="white"
                      />
                      <path
                        d="M22.5092 18.9387C22.1755 18.8115 21.8066 18.8115 21.4728 18.9387C21.3044 19.0046 21.1546 19.1108 21.0365 19.2478C20.7772 19.501 20.6327 19.8491 20.6365 20.2115C20.6387 20.385 20.6694 20.557 20.7274 20.7206C20.7961 20.8928 20.9016 21.0479 21.0365 21.1751C21.292 21.4309 21.6386 21.5748 22.0001 21.5751C22.1755 21.5737 22.3487 21.5366 22.5092 21.466C22.6772 21.3975 22.8312 21.2989 22.9638 21.1751C23.2132 20.9154 23.3559 20.5715 23.3638 20.2115C23.3634 19.8499 23.2196 19.5033 22.9638 19.2478C22.8351 19.1146 22.6804 19.0094 22.5092 18.9387Z"
                        fill="white"
                      />
                      <path
                        d="M30.2365 19.2115C29.8422 18.8255 29.2561 18.7112 28.7456 18.9206C28.5813 18.9959 28.4283 19.0939 28.291 19.2115C28.172 19.3477 28.0739 19.5009 28.0001 19.666C27.9653 19.8339 27.9653 20.0072 28.0001 20.1751C27.9638 20.349 27.9638 20.5285 28.0001 20.7024C28.0691 20.8647 28.1678 21.0126 28.291 21.1387C28.4182 21.2737 28.5734 21.3791 28.7456 21.4478C28.9119 21.5203 29.0914 21.5575 29.2728 21.5569C29.4484 21.5577 29.6221 21.5205 29.7819 21.4478C29.9542 21.3791 30.1093 21.2737 30.2365 21.1387C30.3597 21.0126 30.4584 20.8647 30.5274 20.7024C30.5855 20.5326 30.6162 20.3546 30.6183 20.1751C30.6146 20.0017 30.5839 19.83 30.5274 19.666C30.4478 19.504 30.3502 19.3516 30.2365 19.2115Z"
                        fill="white"
                      />
                    </svg>
                    <p className="HeadingFont mt-4" style={{ color: "white" }}>
                      Virtual Experience
                    </p>
                    <p className="mt-2 smalltext" style={{ color: "white" }}>
                      Walk through the office and get to know how your future
                      workplace will look like.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`${isNonMobile ? "p-5" : "p-2"} `}
          style={{
            minHeight: "700px",
            minWidth: "100vw",
            backgroundColor: "#F0F5FE",
          }}
        >
          <div>
            <div className="m-5 p-5 row">
              <div className="col-md-4">
                <p className="titlepreview">{title}</p>

                <p
                  className={`descriptionbelow  mt-3`}
                  style={getClampedText(description, maxLines)}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
              {isNonMobile && (
                <div className="col-md-1">
                  <div
                    style={{
                      width: "2px",
                      height: "60vh",
                      backgroundColor: "#FFF",
                      border: "5px white solid",
                    }}
                  ></div>
                </div>
              )}
              <div className="col-md-7">
                <div className="row col-md-12">
                  <div className={`col-md-4 ${!isNonMobile && "mt-3"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M28.0415 3H22.3272C21.6509 3 21.1027 3.54822 21.1027 4.22449C21.1027 4.90076 21.6509 5.44898 22.3272 5.44898H28.0415C29.1686 5.44898 30.0823 6.36268 30.0823 7.4898V13.2041C30.0823 13.8803 30.6305 14.4286 31.3068 14.4286C31.983 14.4286 32.5313 13.8803 32.5313 13.2041V7.4898C32.5313 5.01015 30.5211 3 28.0415 3Z"
                        fill="black"
                      />
                      <path
                        d="M7.02105 30.551H12.7353C13.4116 30.551 13.9598 31.0992 13.9598 31.7755C13.9598 32.4518 13.4116 33 12.7353 33H7.02105C4.5414 33 2.53125 30.9899 2.53125 28.5102V22.7959C2.53125 22.3585 2.76464 21.9542 3.1435 21.7355C3.52235 21.5167 3.98913 21.5167 4.36799 21.7355C4.74684 21.9542 4.98023 22.3585 4.98023 22.7959V28.5102C4.98023 29.6373 5.89393 30.551 7.02105 30.551Z"
                        fill="black"
                      />
                      <path
                        d="M30.0823 22.7977C30.0823 22.1204 30.6305 21.5714 31.3068 21.5714C31.9767 21.5714 32.5223 22.1105 32.5313 22.7813V28.5038C32.5313 30.987 30.5211 33 28.0415 33H22.3272C21.6509 33 21.1027 32.451 21.1027 31.7738C21.1027 31.0965 21.6509 30.5475 22.3272 30.5475H28.0415C29.1686 30.5475 30.0823 29.6325 30.0823 28.5038V22.7977Z"
                        fill="black"
                      />
                      <path
                        d="M7.02105 3H12.7353C13.4116 3 13.9598 3.54822 13.9598 4.22449C13.9598 4.90076 13.4116 5.44898 12.7353 5.44898H7.02105C5.89393 5.44898 4.98023 6.36268 4.98023 7.4898V13.2041C4.98023 13.8803 4.43201 14.4286 3.75574 14.4286C3.07947 14.4286 2.53125 13.8803 2.53125 13.2041V7.4898C2.53125 5.01015 4.5414 3 7.02105 3Z"
                        fill="black"
                      />
                    </svg>
                    <p className="knowledgeitems">Required Knowledge</p>
                    <div className="mt-3">
                      <button
                        className="btn border rounded-3 secondbuttontext"
                        style={{ backgroundColor: "#FFF" }}
                      >
                        {difficulty}
                      </button>
                    </div>
                  </div>
                  <div className={`col-md-4 ${!isNonMobile && "mt-3"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M15.2401 13.9596C15.5395 13.9596 15.8261 14.0806 16.0351 14.295L18.7951 17.04C19.0061 17.2508 19.1248 17.5367 19.1251 17.835V19.92C19.1251 20.5413 18.6214 21.045 18.0001 21.045C17.3788 21.045 16.8751 20.5413 16.8751 19.92V18.3L14.4451 15.885C14.0064 15.4458 14.0064 14.7342 14.4451 14.295C14.654 14.0806 14.9407 13.9596 15.2401 13.9596Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27 15.795V15.09C27.0068 12.8638 25.7101 10.8396 23.685 9.915V6C23.685 4.34315 22.3419 3 20.685 3H15.33C13.6732 3 12.33 4.34315 12.33 6V9.915C10.2965 10.8322 8.99213 12.8592 9.00004 15.09V21.735C8.99797 23.9807 10.3215 26.016 12.375 26.925V31.17C12.375 32.8269 13.7182 34.17 15.375 34.17H20.685C22.3419 34.17 23.685 32.8269 23.685 31.17V26.925C25.7334 26.0099 27.0544 23.9784 27.06 21.735V21.045C27.678 21.0369 28.177 20.5379 28.185 19.92V16.92C28.1855 16.6109 28.0587 16.3153 27.8346 16.1025C27.6105 15.8897 27.3087 15.7785 27 15.795ZM14.685 6C14.685 5.61064 15.0007 5.295 15.39 5.295H20.685C21.0744 5.295 21.39 5.61064 21.39 6V9.42H14.685V6ZM20.73 31.875C21.1194 31.875 21.435 31.5594 21.435 31.17L21.375 27.405H14.625V31.17C14.625 31.5594 14.9407 31.875 15.33 31.875H20.73ZM24.855 21.735C24.855 22.658 24.4884 23.5431 23.8358 24.1957C23.1831 24.8484 22.298 25.215 21.375 25.215H14.685C12.7631 25.215 11.205 23.6569 11.205 21.735V15.09C11.2133 13.1739 12.7689 11.625 14.685 11.625H21.33C23.2461 11.625 24.8018 13.1739 24.81 15.09L24.855 21.735Z"
                        fill="black"
                      />
                    </svg>
                    <p className="knowledgeitems">Time Commitment</p>
                    <div className="mt-3">
                      <button
                        className="btn border rounded-3 secondbuttontext"
                        style={{ backgroundColor: "#FFF" }}
                      >
                        {duration} {" min"}
                      </button>
                    </div>
                  </div>
                  <div className={`col-md-4 ${!isNonMobile && "mt-3"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.7766 4.5H18.8966C16.4113 4.5 14.3966 6.51472 14.3966 9V25.92C14.3966 28.4053 16.4113 30.42 18.8966 30.42H27.7766C30.2619 30.42 32.2766 28.4053 32.2766 25.92V9C32.2766 6.51472 30.2619 4.5 27.7766 4.5ZM16.7066 16.5H17.9366C18.3508 16.5 18.6866 16.8358 18.6866 17.25V17.73C18.6866 18.1442 18.3508 18.48 17.9366 18.48H16.7066V16.5ZM27.7766 28.2C29.0192 28.2 30.0266 27.1926 30.0266 25.95V9C30.0266 7.75736 29.0192 6.75 27.7766 6.75H18.8966C17.6539 6.75 16.6466 7.75736 16.6466 9V14.22H17.8766C19.5334 14.22 20.8766 15.5631 20.8766 17.22V17.7C20.8766 19.3569 19.5334 20.7 17.8766 20.7H16.6466V25.95C16.6466 27.1926 17.6539 28.2 18.8966 28.2H27.7766Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.01158 9.63C2.83086 7.02372 4.78669 4.75978 7.39158 4.56C9.98473 4.78293 11.9168 7.04925 11.7266 9.645V23.55C11.7436 24.2715 11.5452 24.9818 11.1566 25.59L8.35158 29.925C8.15289 30.2812 7.77696 30.502 7.36908 30.502C6.9612 30.502 6.58527 30.2812 6.38658 29.925L3.58158 25.59C3.20182 24.9779 3.00412 24.2703 3.01158 23.55V9.63ZM9.25159 24.36C9.40226 24.117 9.48033 23.8359 9.47659 23.55L9.50659 9.63C9.52159 8.1 8.54659 6.81 7.39159 6.81C6.25159 6.81 5.27659 8.13 5.27659 9.63V23.55C5.26379 23.833 5.3314 24.1138 5.47159 24.36L7.36159 27.36L9.25159 24.36Z"
                        fill="black"
                      />
                      <path
                        d="M7.37659 7.77C6.75527 7.77 6.25159 8.27368 6.25159 8.895V14.085C6.25159 14.7063 6.75527 15.21 7.37659 15.21C7.99791 15.21 8.50159 14.7063 8.50159 14.085V8.895C8.50566 8.5954 8.38845 8.30688 8.17658 8.09501C7.96471 7.88314 7.67619 7.76592 7.37659 7.77Z"
                        fill="black"
                      />
                      <path
                        d="M27.4466 9.21H22.4216C21.8002 9.21 21.2966 9.71368 21.2966 10.335C21.2966 10.9563 21.8002 11.46 22.4216 11.46H27.4466C28.0679 11.46 28.5716 10.9563 28.5716 10.335C28.5716 9.71368 28.0679 9.21 27.4466 9.21Z"
                        fill="black"
                      />
                    </svg>

                    <p className="knowledgeitems">Required Tools</p>
                    <div className="mt-2" style={{ gap: "10px" }}>
                      {tools &&
                        tools.map((tol, i) => (
                          <button
                            key={i}
                            style={{ backgroundColor: "#FFF" }}
                            className="btn border rounded-3 secondbuttontext m-1"
                          >
                            {tol}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
                {isNonMobile && (
                  <div className="row col-md-12 mt-5">
                    <div className="col-md-4">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.775 19.2152H12.69C12.2869 19.2153 11.9008 19.0532 11.6186 18.7653C11.3364 18.4775 11.1819 18.0882 11.19 17.6852V15.6002C11.19 14.7718 11.8616 14.1002 12.69 14.1002H14.775C15.6034 14.1002 16.275 14.7718 16.275 15.6002V17.7152C16.275 18.5437 15.6034 19.2152 14.775 19.2152ZM14.055 16.3202H13.41V16.9652H14.055V16.3202Z"
                          fill="black"
                        />
                        <path
                          d="M12.195 23.0102H18.84C19.4613 23.0102 19.965 22.5066 19.965 21.8852C19.965 21.2639 19.4613 20.7602 18.84 20.7602H12.195C11.5737 20.7602 11.07 21.2639 11.07 21.8852C11.07 22.5066 11.5737 23.0102 12.195 23.0102Z"
                          fill="black"
                        />
                        <path
                          d="M21 24.5552H12.195C11.5737 24.5552 11.07 25.0589 11.07 25.6802C11.07 26.3016 11.5737 26.8052 12.195 26.8052H21C21.6213 26.8052 22.125 26.3016 22.125 25.6802C22.125 25.0589 21.6213 24.5552 21 24.5552Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M29.295 14.1602L18.795 3.66024C18.574 3.47083 18.291 3.36938 18 3.37524H13.5C9.56497 3.37524 6.375 6.56521 6.375 10.5002V25.5002C6.375 29.4353 9.56497 32.6252 13.5 32.6252H22.5C26.435 32.6252 29.625 29.4353 29.625 25.5002V15.0002C29.6301 14.6877 29.5115 14.3858 29.295 14.1602ZM19.125 7.18524L25.815 13.8752H21C19.9645 13.8752 19.125 13.0358 19.125 12.0002V7.18524ZM8.625 25.5002C8.63324 28.1892 10.811 30.367 13.5 30.3752H22.5C25.189 30.367 27.3668 28.1892 27.375 25.5002V16.1252H21C18.7218 16.1252 16.875 14.2784 16.875 12.0002V5.62524H13.5C10.811 5.63348 8.63324 7.81127 8.625 10.5002V25.5002Z"
                          fill="black"
                        />
                      </svg>
                      <p className="knowledgeitems mt-2">CV Share (optional)</p>
                      <p className="belowtext mt-2">
                        Have your CV saved in your dashboard or ready to be
                        uploaded
                      </p>
                    </div>
                    <div className="col-md-4">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <path
                          d="M20.194 20.853C20.194 19.4778 19.0792 18.363 17.704 18.363C16.3288 18.363 15.214 19.4778 15.214 20.853C15.2119 21.436 15.4195 22.0004 15.799 22.443C16.1813 22.8414 16.3138 23.4176 16.144 23.943L15.829 24.873C15.7071 25.2913 15.7877 25.7424 16.0467 26.0926C16.3057 26.4428 16.7134 26.652 17.149 26.658H18.259C18.709 26.6579 19.1312 26.4407 19.3931 26.0747C19.6549 25.7088 19.7241 25.239 19.579 24.813L19.204 23.883C19.0341 23.3576 19.1667 22.7814 19.549 22.383C19.9369 21.9646 20.1653 21.4229 20.194 20.853Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.039 11.658C24.1233 11.5754 26.1385 12.4142 27.5486 13.9514C28.9587 15.4886 29.6208 17.5685 29.359 19.638L27.934 28.293C27.2482 31.77 24.1568 34.2469 20.614 34.158H14.794C11.2763 34.2362 8.20681 31.7857 7.50397 28.338L6.07897 19.683C5.58205 16.4265 7.47175 13.277 10.579 12.183V7.50303C10.5781 6.28041 11.0748 5.11008 11.9548 4.26126C12.8347 3.41244 14.0222 2.9582 15.244 3.00303H20.164C21.3858 2.9582 22.5732 3.41244 23.4532 4.26126C24.3331 5.11008 24.8298 6.28041 24.829 7.50303C24.829 8.12435 24.3253 8.62803 23.704 8.62803C23.0827 8.62803 22.579 8.12435 22.579 7.50303C22.5222 6.22448 21.4428 5.23223 20.164 5.28303H15.244C13.9652 5.23223 12.8858 6.22448 12.829 7.50303V11.658H22.039ZM25.204 27.843L26.704 19.158C26.8528 18.0344 26.4957 16.9027 25.729 16.068C24.7965 15.0106 23.4486 14.4134 22.039 14.433H13.369C11.9641 14.4058 10.6169 14.9917 9.67897 16.038C8.9305 16.8928 8.60072 18.036 8.77897 19.158L10.204 27.843C10.669 29.9825 12.6065 31.4768 14.794 31.383H20.614C22.8014 31.4768 24.7389 29.9825 25.204 27.843Z"
                          fill="black"
                        />
                      </svg>
                      <p className="knowledgeitems mt-2">Access</p>
                      <p className="belowtext mt-2">
                        Undergraduate, graduate students and PhDs
                      </p>
                    </div>
                    <div className="col-md-4">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M26.9999 11.25C26.9999 13.3211 25.321 15 23.2499 15C21.1788 15 19.4999 13.3211 19.4999 11.25V9.15C19.4999 7.4103 20.9102 6 22.6499 6H23.8499C25.5896 6 26.9999 7.4103 26.9999 9.15V11.25ZM22.6499 8.25C22.1528 8.25 21.7499 8.65294 21.7499 9.15V11.25C21.7499 12.0784 22.4215 12.75 23.2499 12.75C24.0783 12.75 24.7499 12.0784 24.7499 11.25V9.15C24.7499 8.65294 24.3469 8.25 23.8499 8.25H22.6499Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M29.9998 18.705L30.1198 19.5C31.7296 19.5644 33.0011 20.8889 32.9998 22.5V27C32.9998 28.6568 31.6567 30 29.9998 30H5.99982C4.34296 30 2.99982 28.6568 2.99982 27V22.5C2.99331 21.4968 3.48866 20.5567 4.31982 19.995C4.17689 19.6923 4.08563 19.3678 4.04982 19.035L3.76482 16.155C3.68429 15.3112 3.96444 14.4728 4.53601 13.8469C5.10758 13.221 5.91724 12.8661 6.76482 12.87C7.13469 12.8728 7.50084 12.944 7.84482 13.08L9.79482 13.83C10.6567 14.1601 11.3847 14.7667 11.8648 15.555L12.8698 17.175C13.2963 17.8708 13.4208 18.7103 13.2148 19.5H15.9448L16.1098 18.705C16.4714 16.8015 18.1176 15.4119 20.0548 15.375H26.0548C27.992 15.4119 29.6382 16.8015 29.9998 18.705ZM20.1298 17.64C19.2713 17.6738 18.5498 18.2958 18.3898 19.14L18.3148 19.545H27.8548V19.14C27.7174 18.2891 26.9916 17.6579 26.1298 17.64H20.1298ZM6.22482 15.375C6.36062 15.2174 6.55684 15.1247 6.76482 15.12C6.85359 15.0989 6.94605 15.0989 7.03482 15.12L8.98482 15.87C9.38816 16.021 9.73072 16.3003 9.95982 16.665L10.9498 18.3C11.0949 18.5235 11.0949 18.8114 10.9498 19.035C10.8291 19.2704 10.5844 19.4161 10.3198 19.41H7.06482C6.68907 19.4052 6.37488 19.123 6.32982 18.75L5.99982 15.93C5.99263 15.7214 6.07443 15.5196 6.22482 15.375ZM29.9998 27.75C30.414 27.75 30.7498 27.4142 30.7498 27V22.5C30.7498 22.0858 30.414 21.75 29.9998 21.75H5.99982C5.58561 21.75 5.24982 22.0858 5.24982 22.5V27C5.24982 27.4142 5.58561 27.75 5.99982 27.75H29.9998Z"
                          fill="black"
                        />
                      </svg>
                      <p className="knowledgeitems mt-2">Desktop</p>
                      <p className="belowtext mt-2">
                        This challenges is only available on desktop (no
                        smartphone view)
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex p-5"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="m-5 p-5">
            <div className="d-flex " style={{ justifyContent: "center" }}>
              <img
                src={company.img}
                alt="company logo"
                style={{ height: "80px" }}
              />
            </div>
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <p className="lasttitle mt-5"> {title}</p>
            </div>
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <p
                className={`lastdescription mt-3`}
                style={getClampedText(description, maxLines)}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <button
                className={`d-flex btn border mt-5 ${
                  isNonMobile ? "p-3" : "p-2"
                } `}
                style={{ color: "black" }}
              >
                Start Challenge
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M8.50007 20.7498C8.69914 20.7508 8.89019 20.6715 9.03007 20.5298L17.0301 12.5298C17.3225 12.237 17.3225 11.7627 17.0301 11.4698L9.03007 3.46985C8.73456 3.19449 8.27406 3.20261 7.98845 3.48823C7.70284 3.77384 7.69471 4.23434 7.97007 4.52985L15.4401 11.9998L7.97007 19.4698C7.67762 19.7627 7.67762 20.237 7.97007 20.5298C8.10996 20.6715 8.30101 20.7508 8.50007 20.7498Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <hr style={{ width: "90vw" }} />
        </div>
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <div className="d-flex" style={{ width: "90vw" }}>
            <div className="" style={{ height: "100%", position: "relative" }}>
              <div
                style={{
                  width: 84,
                  height: 84,
                  left: 0,
                  top: 0.32,

                  background: "white",
                  boxShadow:
                    "0px 1.9913972616195679px 1.5931177139282227px rgba(166, 150, 194, 0.02)",
                  borderRadius: 71.96,
                }}
              />
              <img
                style={{
                  width: 78,
                  height: 78,
                  left: 3,
                  top: 3.3,
                  position: "absolute",
                  borderRadius: 9999,
                }}
                src={user.profilephoto}
              />
            </div>
            <div className="m-3 mt-0 mb-0">
              <p className="maybeLater">
                Maybe later?
                <span className="backtosearch"> Back to Search.</span>
              </p>
              <p className="col-md-5 solvetext">
                Solve real-world challenges designed by investment banks, law
                firms, consulting firms and industry leaders across the globe.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <div style={{ width: "90vw" }}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default PreviewPage;
