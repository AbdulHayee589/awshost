import "./styles.scss";
import React, { useEffect, useRef } from "react";
import Step1 from "./RegisterationSteps/step1";
import { IoReturnDownBackSharp } from "react-icons/io5";
import Enter from "../../assets/images/icons/Enter.png";
import Step2 from "./RegisterationSteps/step2";
import { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";
import { useMediaQuery } from "@mui/material";
import bg1 from "../../assets/images/bg3.png";
import bg2 from "../../assets/images/otp_bg.png";
import Step3 from "./RegisterationSteps/step3";
import Step4 from "./RegisterationSteps/step4";
import Step5 from "./RegisterationSteps/step5";
import Step6 from "./RegisterationSteps/step6";
import Step7 from "./RegisterationSteps/step7";
import Step8 from "./RegisterationSteps/step8";
import emailjs from "@emailjs/browser";
import { setLogin } from "../../state";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function StudentRegister() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isNext, setIsNext] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const isNon = useMediaQuery("(min-width:900px)");
  const navigate = useNavigate();
  const uni = useSelector((state) => state.Uni);
  let lastStep = 8;
  let width = Math.floor(currentStep * (100 / lastStep));
  const [scope, animate] = useAnimate();
  // formData
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [optform, setOtpForm] = useState("");
  const form = useRef();

  const sendEmail = (ad) => {
    // Replace with the actual recipient's email
    const payload = {
      code: ad,
      to_email: EmailAddress,
      to_name: firstName + " " + LastName, // Use the static recipient for testing
    };

    console.log("Recipient's Email Address:", EmailAddress);

    emailjs
      .send("service_7lrwj9d", "template_d2978ia", payload, "Kdh_ACIVvT2EHVAL5")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const generateOtp = async () => {
    const randomOtp = Math.floor(1000 + Math.random() * 9000);
    setOtp(randomOtp.toString());

    // Wait for a short delay to simulate asynchronous behavior
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Now send the email and show the alert
    sendEmail(randomOtp.toString());
  };

  const CreateUser = async (payload) => {
    try {
      const response = await fetch("https://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You might need additional headers like authorization token
        },
        body: JSON.stringify(payload),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const data = await response.json();
        return { status: response.status, data };
      } else {
        // If the request was not successful, handle the error
        const errorData = await response.json();
        return { status: response.status, errorData };
      }
    } catch (error) {
      // Handle any other errors that might occur during the request
      console.error("Error during createUser request:", error);
      return { status: 500, error: "Internal Server Error" };
    }
  };

  const handleSubmit = async (code) => {
    console.log("code", code);
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    const storedEmail = localStorage.getItem("emailAddress");
    const storedInterests = JSON.parse(localStorage.getItem("interests")) || [];
    const selectedNetworks =
      JSON.parse(localStorage.getItem("selectedNetworks")) || [];

    const payload = {
      firstName: storedFirstName,
      lastName: storedLastName,
      email: storedEmail,
      code: code,
      interests: storedInterests,
      network: selectedNetworks,
      groups: [1, 2, 3],
    };
    if (currentStep === 6) {
      if (!EmailAddress?.length) {
        toast.error("Please Enter Your University Email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
    }
    const response = await CreateUser(payload);
    console.log("response", response);
    if (response.status === 200) {
      setIsNext(true);
    } else {
      // const error = response;
      setIsNext(false);
      toast.error("Please enter your valid domain university email", {
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

  const UserVerify = async (payload) => {
    try {
      const response = await fetch("https://localhost:5000/api/verify-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You might need additional headers like authorization token
        },
        body: JSON.stringify(payload),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const data = await response.json();
        return { status: response.status, data };
      } else {
        // If the request was not successful, handle the error
        const errorData = await response.json();
        return { status: response.status, errorData };
      }
    } catch (error) {
      // Handle any other errors that might occur during the request
      console.error("Error during createUser request:", error);
      return { status: 500, error: "Internal Server Error" };
    }
  };

  const handleUserVerify = async () => {
    const storedEmail = localStorage.getItem("emailAddress");
    console.log("handleUserVerify code", otp);

    const payload = {
      email: storedEmail,
      code: otp,
    };
    const response = await UserVerify(payload);
    console.log("response", response);
    if (response.status === 200) {
    } else {
      const error = response;
      console.log(error);
    }
  };

  const NextStep = () => {
    if (currentStep === lastStep) {
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };
  const BackSetp = () => {
    if (currentStep === 1) {
      navigate("/");
      return;
    }
    setCurrentStep((prev) => prev - 1);
  };
  const checkStages = async (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      if (!selectedItem?.length) {
        toast.error("Please Select 1 Interest", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      NextStep();
      return;
    }
    if (currentStep === 2) {
      if (!firstName?.length) {
        toast.error("Please Enter Your First Name", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      NextStep();
      return;
    }
    if (currentStep === 3) {
      if (!LastName?.length) {
        toast.error("Please Enter Your Last Name", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      NextStep();
      return;
    }
    if (currentStep === 6) {
      if (!EmailAddress?.length) {
        toast.error("Please Enter Your University Email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(EmailAddress)) {
        toast.error("Please Enter a Valid Email Address", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }

      const publicEmailDomainPattern =
        /@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|protonmail\.com|mail\.com)$/;

      if (publicEmailDomainPattern.test(EmailAddress)) {
        toast.error("Please use a valid university email address", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      } else {
        await generateOtp();
      }

      if (isNext) {
        NextStep();
      }
      // Call generateOtp before handleSubmit
      // await handleSubmit();
      NextStep();
      toast.success("OTP Sent to your Email Address", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    // NextStep();

    if (currentStep === 7) {
      if (!optform.length) {
        toast.error("Please Enter  OTP", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        return;
      }
      window.alert(otp);
      if (optform !== otp) {
        toast.error("Please Enter correct OTP", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        return;
      } else {
        const userData = {
          firstName,
          LastName,
          EmailAddress,
          uni,
          selectedItem,
        };

        axios
          .post("http://localhost:5000/newUser", userData)
          .then((res) => {
            if (res.data.msg === "matched") {
              // toast.success("Login SUCCESS", {
              //   position: "top-right",
              //   autoClose: 5000,
              //   hideProgressBar: false,
              //   closeOnClick: true,
              //   pauseOnHover: true,
              //   draggable: true,
              //   progress: undefined,
              //   theme: "colored",
              // });
              dispatch(setLogin({ user: res.data.newUser }));
              navigate("/register/success");
            } else if (res.data === "unmatched") {
              toast.error("Please Enter  Correct University Domain", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              BackSetp();
            } else if (res.data === "Pending") {
              toast.success("PENDING Request", {
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
          })
          .catch((err) => {
            console.log(err.message);
          });
      }

      // await handleUserVerify();
      // navigate("/success");
      return;
    }
    NextStep();
  };

  useEffect(() => {
    if (scope?.current) {
      animate(scope?.current, { width: `${width}%` }, { duration: 0.3 });
    }
  }, [currentStep]);
  return (
    <div id="StudentRegister127">
      <motion.div
        ref={scope}
        className="ProgressBarForm"
        style={{
          width: `${width}%`,
        }}
      ></motion.div>
      <div
        className="wrapper"
        style={{
          backgroundImage: currentStep == 7 ? `url(${bg2})` : `url(${bg1})`,
        }}
      >
        <div className="container">
          <div className="sectionTitle">
            <h3>/varyance</h3>
          </div>
        </div>
        {console.log(selectedItem)}
        <div className="cntentWrapper">
          <div className="container">
            {/* back button  */}
            <div className="choices_wrapper">
              <div className="action_Btn">
                <div className="backButton" onClick={BackSetp}>
                  <h6>
                    <IoIosArrowBack size={20} /> {"    "}
                    Back
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* // form part  */}
          <form style={isNon ? { height: "50vh" } : {}}>
            <div
              className={
                currentStep === 6 ? "container mt-5" : "container mt-5"
              }
            >
              <div
                className="choices_wrapper "
                style={isNon ? { height: "50vh" } : {}}
              >
                {currentStep === 1 ? (
                  <Step1
                    selectedItem={selectedItem}
                    onEnterPress={checkStages}
                    setSelectedItem={setSelectedItem}
                  />
                ) : currentStep === 2 ? (
                  <Step2
                    firstName={firstName}
                    setFirstName={setFirstName}
                    selectedItem={selectedItem}
                  />
                ) : currentStep === 3 ? (
                  <Step3
                    firstName={firstName}
                    LastName={LastName}
                    setLastName={setLastName}
                    selectedItem={selectedItem}
                  />
                ) : currentStep === 4 ? (
                  <Step4
                    onEnterPress={checkStages}
                    selectedItem={selectedItem}
                  />
                ) : currentStep === 5 ? (
                  <Step5 onEnterPress={checkStages} />
                ) : currentStep === 6 ? (
                  <>
                    <Step6
                      firstName={firstName}
                      LastName={LastName}
                      setEmailAddress={setEmailAddress}
                      EmailAddress={EmailAddress}
                      handleSubmit={handleSubmit}
                      selectedItem={selectedItem}
                    />
                  </>
                ) : currentStep === 7 ? (
                  <Step7
                    EmailAddress={EmailAddress}
                    optform={optform}
                    setOtpForm={setOtpForm}
                  />
                ) : currentStep === 8 ? (
                  <Step8 EmailAddress={EmailAddress} />
                ) : null}
              </div>
            </div>
            <div className="container ">
              <div className="choices_wrapper">
                {/* <form ref={form}>Your form content goes here</form> */}
                <div className="action_Btn">
                  <button
                    className="primary_btn cutsPdn"
                    onClick={checkStages}
                    type="submit"
                  >
                    Next
                  </button>
                  <div
                    className="Next_Info"
                    style={{
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      height: "24px",
                      width: "126px",
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    {" "}
                    <div className="">
                      <img
                        src={Enter}
                        alt="Enter icon"
                        height="24px"
                        width="24px"
                      />
                    </div>{" "}
                    or Press Enter
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* footer */}
        <div className="container margiTop mt-5 pt-5">
          <div className="footer">
            {isNonMobile && (
              <div className="left">
                <p>&#169; All right reserved</p>
              </div>
            )}
            <div className="right">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;
