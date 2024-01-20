import "./body.css";
import image from "../../assets/images/guideline.png";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Guideline = () => {
  const [agree, setAgree] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const uniqueId = useSelector((state) => state.uniqueId);

  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const handleSubmit = () => {
    if (!agree) {
      toast.error("Please confirm that you agree to Terms and Privacy Policy");
      return;
    }

    navigate("/dashboard");
  };

  useEffect(() => {
    if (!uniqueId) {
      navigate("/register/organization");
    }
  }, []);
  return (
    <div>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="row d-flex">
          <h2 style={{ fontSize: "40px" }}>varyance guidelines</h2>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Public Sans",
              color: "#1D2939",
            }}
          >
            Define your role on varyance. You can easily change the selection in
            team settings.
          </p>
        </div>
      </div>
      <div
        className={` mt-5 ${isNonMobile ? "d-flex" : ""}`}
        style={{ gap: "30px" }}
      >
        <div className="col-md-5">
          <div className="imagewrapper p-5 pb-0">
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
            <img src={image} alt="guideline image" className="img-fluid" />
          </div>
        </div>
        <div className={`col-md-5 ${isNonMobile ? "" : "mt-5"}`}>
          <p className="Text-1">
            Millions of students place their trust in handshake and the
            companies on our platform.{" "}
          </p>
          <p className="Text-1 mt-3">
            To maintain that trust, all employers on Handshake must agree to the
            following general guidelines, in addition to our{" "}
            <span className="Text-2">Terms of Service :</span>
          </p>
          <p className="Text-4 mt-5">
            <span className="Text-3"> Be Accurate and Trustworthy:</span> Tell
            the truth about your company, your team and the jobs available. If
            your opportunities require upfront costs, disclose that in your
            company description and job postings.
          </p>
          <p className="Text-4 mt-3">
            <span className="Text-3"> Be Fair:</span> Do not discriminate based
            on ethnicity, national origin, religion*, age, gender, sexual
            orientation, disablity or military / veteran status or lack thereof.
          </p>
          <p className="Text-4 mt-3">
            <span className="Text-3"> Keep Your Commitments:</span> When you
            make a commitment to a school or student, keep it. If you can’t work
            to prove a fair and equitable path for affected students
          </p>
          <p className="Text-4 mt-3">
            <span className="Text-3"> Keep Student Info Confidential:</span>{" "}
            Guard student information as if it were you own. Do ot disclose any
            personal information without the prior consent of a student.
          </p>

          <p className="Text-4 mt-3">
            In addition, most career service center require employers to abide
            by the full{" "}
            <span className="Text-5">
              {" "}
              NACE Principles for Employment Professionals.
            </span>
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="mt-3 d-flex">
          <div className="" style={{ marginRight: "10px" }}>
            <div
              className="checkbox rounded-1 border border-1"
              style={
                agree
                  ? { cursor: "pointer", backgroundColor: "#E31B54" }
                  : { cursor: "pointer", backgroundColor: "#FFF" }
              }
              onClick={() => setAgree(!agree)}
            ></div>
          </div>
          <div className="">
            <p className="Text-4">
              I agree to the <span className="Text-5">Terms of Service</span>{" "}
              and <span className="Text-5">Privacy Policy</span>. *
            </p>
          </div>
        </div>
        <div className="mt-3 d-flex">
          <div className="" style={{ marginRight: "10px" }}>
            <div
              className="checkbox rounded-1 border border-1"
              style={
                agree2
                  ? { cursor: "pointer", backgroundColor: "#E31B54" }
                  : { cursor: "pointer", backgroundColor: "#FFF" }
              }
              onClick={() => setAgree2(!agree2)}
            ></div>
          </div>
          <div className="">
            <p className="Text-4">
              I agree to receive marketing messages includeing promotions and
              special offers from varyance.
            </p>
          </div>
        </div>
        <div>
          <button
            className="continuebutton mt-5 mb-5"
            onClick={() => handleSubmit()}
          >
            Save and continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default Guideline;
