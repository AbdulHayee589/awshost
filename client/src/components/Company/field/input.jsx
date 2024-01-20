import { useState } from "react";
import company1 from "../../../assets/images/icons/company1.png";
import company2 from "../../../assets/images/icons/company2.png";
import company3 from "../../../assets/images/icons/company3.png";
import tick from "../../../assets/images/icons/tick.png";
import vector from "../../../assets/images/icons/Vector.png";
import { toast } from "react-toastify";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { setEmail } from "../../../state/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
const Inputs = () => {
  const [email, setEmails] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selected, setSelected] = useState("Company");
  const [emailErr, setEmailErr] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const sendEmail = (ad) => {
    // Replace with the actual recipient's email

    const payload = {
      code: `http://localhost:3000/Find/${ad}`,
      to_email: email,
      // Use the static recipient for testing
    };

    emailjs
      .send("service_n7cs94q", "template_4zwnbf4", payload, "Bvq0qqBKlCIn1crfW")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    dispatch(setEmail({ email }));
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
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
      setEmailErr(true);
      return;
    }

    const publicEmailDomainPattern =
      /@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|protonmail\.com|mail\.com)$/;

    if (publicEmailDomainPattern.test(email)) {
      toast.error("Please use a valid company email address", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setEmailErr(true);
      return;
    }
    setEmailErr(false);
    axios
      .post("http://localhost:5000/organisation/register", {
        email,
        password,
        selected,
      })
      .then((res) => {
        sendEmail(res.data.uniqueId);

        navigate("/register/organization/verify");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="m-5 " style={{ maxWidth: "638px" }}>
      <div className="">
        <p style={{ fontSize: "16px" }}>Email</p>
        <div className="">
          <input
            placeholder="jennifer.meyer@bcg.com"
            value={email}
            type="email"
            onChange={(e) => setEmails(e.target.value)}
            className="rounded-3  mt-3 col-md-12 col-12"
            style={{
              padding: "15px",
              border: emailErr ? "2px solid #FF0000" : "2px solid #D9D9D9",
              fontFamily: "Public Sans",
            }}
          />
        </div>
        <div
          className="mt-3 d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className="col-md-6 col-12">
            <div className="">Password</div>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-3  mt-3 col-md-11 col-12"
              style={{
                padding: "15px",

                border:
                  password.length < 8 && password.length !== 0
                    ? "2px solid #FF0000"
                    : "2px solid #D9D9D9",
                fontFamily: "Public Sans",
              }}
            />
          </div>
          {isNonMobile && (
            <div className="col-md-6 ">
              Repeat Password
              <div className="d-flex" style={{ justifyContent: "end" }}>
                <input
                  value={confirmPassword}
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="rounded-3  mt-3 col-md-12"
                  style={{
                    padding: "15px",

                    border:
                      password !== confirmPassword
                        ? "2px solid #FF0000"
                        : "2px solid #D9D9D9",
                    fontFamily: "Public Sans",
                  }}
                />
              </div>
            </div>
          )}
        </div>
        {!isNonMobile && (
          <div className="col-md-6 col-12 mt-3">
            <div className=""> Repeat Password</div>
            <input
              value={confirmPassword}
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="rounded-3  mt-3 col-md-12 col-12"
              style={{
                padding: "15px",
                border:
                  password !== confirmPassword
                    ? "2px solid #FF0000"
                    : "2px solid #D9D9D9",
              }}
            />
          </div>
        )}
        <div className="d-flex">
          <div
            className="mt-4 rounded-3  col-md-12 col-12 d-flex"
            style={{
              backgroundColor: "white",
              padding: "20px",
              border:
                selected === "Company"
                  ? "2px solid #E31B54"
                  : "2px solid #D9D9D9",
              borderColor: selected === "Company" ? "#E31B54" : "#D9D9D9",

              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={() => setSelected("Company")}
          >
            <div className="row">
              <div className="d-flex">
                <img
                  className="rounded-5 border border-2 border-white img-fluid"
                  src={company1}
                  alt="company image"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    maxHeight: isNonMobile ? "58px" : "24px",
                    maxWidth: "58px",
                  }} // Add position: relative
                />
                <img
                  className="rounded-5 img-fluid"
                  src={company2}
                  alt="company image"
                  style={{
                    marginLeft: isNonMobile ? "-20px" : "-10px",
                    position: "relative",
                    zIndex: 3,
                    maxHeight: isNonMobile ? "67px" : "24px",
                    maxWidth: "67px",
                  }} // Add position: relative
                />
                <img
                  className="rounded-5 img-fluid"
                  src={company3}
                  alt="company image"
                  style={{
                    marginLeft: isNonMobile ? "-20px" : "-10px",
                    position: "relative",
                    zIndex: 1,
                    maxHeight: isNonMobile ? "58px" : "24px",
                    maxWidth: "58px",
                  }} // Add position: relative
                />
              </div>
              {!isNonMobile && (
                <div className="">
                  <div className="row pt-2">
                    <b style={{ fontSize: "20px", fontWeight: "500" }}>
                      Company Login
                    </b>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "Public Sans",
                        fontWeight: "600",
                      }}
                    >
                      Automate task and manager workflows
                    </p>
                  </div>
                </div>
              )}
            </div>
            {isNonMobile && (
              <div className="col-md-8">
                <div className="row pt-2">
                  <b style={{ fontSize: "20px", fontWeight: "500" }}>
                    Company Login
                  </b>
                  <p
                    style={{
                      fontSize: "16px",
                      fontFamily: "Public Sans",
                      fontWeight: "600",
                    }}
                  >
                    Automate task and manager workflows
                  </p>
                </div>
              </div>
            )}
            <div className="">
              {selected === "Company" ? (
                <img src={tick} alt="tick image" width="24px" height="24px" />
              ) : (
                <img src={vector} alt="tick image" width="20px" height="20px" />
              )}
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div
            className="mt-4 rounded-3  col-md-12 d-flex"
            style={{
              backgroundColor: "white",
              padding: "20px",
              border:
                selected === "Company"
                  ? "2px solid #E31B54"
                  : "2px solid #D9D9D9",
              borderColor: selected === "University" ? "#E31B54" : "#D9D9D9",

              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={() => setSelected("University")}
          >
            <div className="row">
              <div className="d-flex">
                <img
                  className="rounded-5 border border-2 border-white img-fluid"
                  src={company1}
                  alt="company image"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    maxHeight: isNonMobile ? "58px" : "24px",
                    maxWidth: "58px",
                  }} // Add position: relative
                />
                <img
                  className="rounded-5 img-fluid"
                  src={company2}
                  alt="company image"
                  style={{
                    marginLeft: isNonMobile ? "-20px" : "-10px",
                    position: "relative",
                    zIndex: 3,
                    maxHeight: isNonMobile ? "67px" : "24px",
                    maxWidth: "67px",
                  }} // Add position: relative
                />
                <img
                  className="rounded-5 img-fluid"
                  src={company3}
                  alt="company image"
                  style={{
                    marginLeft: isNonMobile ? "-20px" : "-10px",
                    position: "relative",
                    zIndex: 1,
                    maxHeight: isNonMobile ? "58px" : "24px",
                    maxWidth: "58px",
                  }} // Add position: relative
                />
              </div>
              <div>
                {" "}
                {!isNonMobile && (
                  <div className="col-md-8">
                    <div className="row pt-2">
                      <b style={{ fontSize: "20px", fontWeight: "500" }}>
                        University Login
                      </b>
                      <p
                        style={{
                          fontSize: "16px",
                          fontFamily: "Public Sans",
                          fontWeight: "600",
                        }}
                      >
                        I need multi-User business automation
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {isNonMobile && (
              <div className="col-md-8">
                <div className="row pt-2">
                  <b style={{ fontSize: "20px", fontWeight: "500" }}>
                    University Login
                  </b>
                  <p
                    style={{
                      fontSize: "16px",
                      fontFamily: "Public Sans",
                      fontWeight: "600",
                    }}
                  >
                    I need multi-User business automation
                  </p>
                </div>
              </div>
            )}
            <div className="">
              {selected === "University" ? (
                <img src={tick} alt="tick image" width="24px" height="24px" />
              ) : (
                <img src={vector} alt="tick image" width="20px" height="20px" />
              )}
            </div>
          </div>
        </div>
        <div className="d-flex mt-4">
          <button
            className="btn col-12"
            style={{
              backgroundColor: "#E31B54",
              color: "#fff",
              height: "44px",
              width: "112px",
              zIndex: 5,
            }}
            onClick={() => {
              handleSubmit();
            }}
            disabled={
              !email ||
              !password ||
              !confirmPassword ||
              password !== confirmPassword ||
              password.length < 5
            }
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default Inputs;
