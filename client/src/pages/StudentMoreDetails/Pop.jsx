import { useState, useEffect } from "react";
import "./pop.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Step1 from "./step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
const Popup = () => {
  const [levelofstudy, setLevelOfStudy] = useState("");
  const [study, setStudy] = useState("Please Select");
  const [gender, setGender] = useState("");
  const [intake, setIntake] = useState({
    Month: "",
    Year: "",
  });
  const [languages, setLanguages] = useState([]);
  const [graduation, setGraduation] = useState({
    Month: "",
    Year: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  // EmailAddress
  const isNonMobile = useMediaQuery("(min-width:767px)");
  // Add state to manage the visibility of the popup
  const [showPopup, setShowPopup] = useState(true);
  const [fillPercentage, setFillPercentage] = useState(16.6777);
  const [step, setStep] = useState(1);
  useEffect(() => {
    // Redirect to the home page if the user is not logged in
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleFillPercentageChange = (newPercentage) => {
    setFillPercentage(newPercentage);
  };

  const fillBarStyle = {
    width: `${fillPercentage}%`,
    height: "10px", // Adjust as needed
    background: "#E31B54", // Color of the fill bar
    transition: "width 0.3s ease", // Optional: Add transition for a smoother effect
  };

  const HandleSendData = () => {
    const userdata = {
      email: user.EmailAddress,
      levelofstudy,
      study,
      intake,
      graduation,
      languages: languages.map((lang) => ({
        text: lang.text,
        select: lang.select,
        icon: lang.icon && lang.icon.outerHTML, // Convert SVG to string
      })),
      gender,
    };

    axios
      .post("http://localhost:5000/UserData", userdata)
      .then((res) => {
        if (res.data.message === "Data received successfully") {
          dispatch(setLogin({ user: res.data.user }));
          navigate("/student/dashboard");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    // Conditionally render the popup based on the state
    <div
      className={`bg2 popup ${showPopup ? "display-block" : "display-none"}`}
    >
      <section
        className="popup-main shadow"
        style={
          isNonMobile
            ? { minHeight: "40vh", width: "50vw" }
            : { minHeight: "60vh", width: "80vw" }
        }
      >
        <div className="fill-bar" style={fillBarStyle}></div>
        {step === 1 && (
          <Step1
            levelofstudy={levelofstudy}
            setLevelOfStudy={setLevelOfStudy}
            isNonMobile={isNonMobile}
            setStep={setStep}
            handleFillPercentageChange={handleFillPercentageChange}
            fillPercentage={fillPercentage}
          />
        )}
        {step === 2 && (
          <Step2
            isNonMobile={isNonMobile}
            setStep={setStep}
            handleFillPercentageChange={handleFillPercentageChange}
            fillPercentage={fillPercentage}
            study={study}
            setStudy={setStudy}
          />
        )}
        {step === 3 && (
          <Step3
            isNonMobile={isNonMobile}
            setStep={setStep}
            handleFillPercentageChange={handleFillPercentageChange}
            fillPercentage={fillPercentage}
            intake={intake}
            setIntake={setIntake}
          />
        )}
        {step === 4 && (
          <Step4
            isNonMobile={isNonMobile}
            setStep={setStep}
            handleFillPercentageChange={handleFillPercentageChange}
            fillPercentage={fillPercentage}
            graduation={graduation}
            setGraduation={setGraduation}
          />
        )}
        {step === 5 && (
          <Step5
            isNonMobile={isNonMobile}
            setStep={setStep}
            handleFillPercentageChange={handleFillPercentageChange}
            fillPercentage={fillPercentage}
            gender={gender}
            setGender={setGender}
          />
        )}
        {step === 6 && (
          <Step6
            isNonMobile={isNonMobile}
            setStep={setStep}
            handleFillPercentageChange={handleFillPercentageChange}
            fillPercentage={fillPercentage}
            languages={languages}
            setLanguages={setLanguages}
            HandleSendData={HandleSendData}
          />
        )}
      </section>
    </div>
  );
};

export default Popup;
