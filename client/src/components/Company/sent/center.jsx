import { useEffect, useState } from "react";
import icon from "../../../assets/images/icons/emailicon.png";
import leftarrow from "../../../assets/images/icons/leftarrow.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import axios from "axios";
const Center = () => {
  const navigate = useNavigate();
  const email = useSelector((state) => state.email) ?? "";
  const [uniqueId, setUniqueId] = useState("");

  const sendEmail = () => {
    // Replace with the actual recipient's email
    const payload = {
      code: `http://localhost:3000/Find/${uniqueId}`,
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
  };

  // useEffect(() => {
  //   if (!email) {
  //     navigate("/register/organization");
  //   } else {
  //     getUniqueId();
  //   }
  // }, []);

  const getUniqueId = () => {
    axios
      .post("http://localhost:5000/organisation/register/verify", { email })
      .then((res) => {
        setUniqueId(res.data.uniqueId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="container d-flex"
      style={{
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div
        className="d-flex"
        style={{
          justifyContent: "center",
          marginTop: "-100px",
        }}
      >
        <div className="row">
          <div className="d-flex" style={{ justifyContent: "center" }}>
            <img src={icon} alt="email image" width="64px" height="64px" />
          </div>
          <h2 className="text-center mt-3">Check your email</h2>
          <p
            className="text-center mt-3"
            style={{ color: "#475467", fontFamily: "Public sans" }}
          >
            We sent a password reset link to
            <br /> {email ? email : "olivia@untitledui.com"}
          </p>
          <div>
            <p
              className="text-center mt-3"
              style={{ color: "#475467", fontFamily: "Public sans" }}
            >
              Didn’t receive the email?
              <button
                className="btn"
                style={{
                  fontWeight: "600", // 600 is usually associated with semi-bold
                  color: "#E31B54",
                  fontFamily: "Inter, sans-serif",
                }}
                onClick={() => sendEmail()}
              >
                Click to resend
              </button>
            </p>
          </div>
          <div className="d-flex" style={{ justifyContent: "center" }}>
            <button
              className="btn col-md-2"
              style={{
                color: "#475467",
                fontFamily: "Inter, sans-serif",
                fontWeight: "600",
                fontSize: "1rem",
              }}
              onClick={() => navigate("/register/organization")}
            >
              <img src={leftarrow} alt="asda" className="mt-0 mb-0 m-2" />
              Back to Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Center;
