import { Navigate } from "react-router-dom";
import "./second.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const Second = () => {
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const navigate = useNavigate();
  return (
    <div className="mt-5">
      <div className="row d-flex" style={{ justifyContent: "space-between" }}>
        <div className="col-md-6">
          <button
            className="btn border rounded-3 secondbuttontext"
            style={{ backgroundColor: "#FFF" }}
          >
            12 months
          </button>
          <button
            className="btn border rounded-3 secondbuttontext"
            style={{ backgroundColor: "#FFF" }}
          >
            90 days
          </button>
          <button
            className="btn border rounded-3 secondbuttontext"
            style={{ backgroundColor: "#FFF" }}
          >
            30 days
          </button>
        </div>
        <div
          className={`d-flex col-md-6 ${!isNonMobile && "mt-5"}`}
          style={{ gap: "10px", justifyContent: isNonMobile ? "end" : "" }}
        >
          <button className="overflow">Student overflow</button>
          <button
            className="d-flex border createchallenge"
            style={{ gap: "10px" }}
            onClick={() => navigate("/create/challenge")}
          >
            Create challenge
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M20.6016 11H13.3516V3.75C13.3516 3.33579 13.0158 3 12.6016 3C12.1873 3 11.8516 3.33579 11.8516 3.75V11H4.60156C4.18735 11 3.85156 11.3358 3.85156 11.75C3.85156 12.1642 4.18735 12.5 4.60156 12.5H11.8516V19.75C11.8516 20.1642 12.1873 20.5 12.6016 20.5C13.0158 20.5 13.3516 20.1642 13.3516 19.75V12.5H20.6016C21.0158 12.5 21.3516 12.1642 21.3516 11.75C21.3516 11.3358 21.0158 11 20.6016 11Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className=" row   mt-5" style={{ gap: "10px" }}>
        <div className="col-md-3 statsdiv">
          <p className="statstextfirst">Challenge Registration</p>
        </div>
        <div className="col-md-3 statsdiv">
          <p className="statstextfirst">Completions</p>
        </div>
        <div className="col-md-3 statsdiv">
          <p className="statstextfirst">Submitted CVs</p>
        </div>
      </div>
    </div>
  );
};
export default Second;
