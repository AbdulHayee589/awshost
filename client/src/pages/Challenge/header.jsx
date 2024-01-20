import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
const Header = ({ text }) => {
  const navigate = useNavigate();
  return (
    <div
      className=" pt-3 pb-3 p-5 d-flex justify-content-between headercreate "
      style={{ position: "relative" }}
    >
      <div
        className="d-flex align-items-center"
        style={{ justifyContent: "center" }}
      >
        <img src={logo} alt="logo img" height="50px" />
        <p className="HeaderText mt-0 mb-0 m-5">{text}</p>
      </div>
      <div className="d-flex">
        <button className="savedraft">Save As Draft</button>
        <div
          className="d-flex btn"
          style={{ justifyContent: "center", alignItems: "center" }}
          onClick={() => navigate("/dashboard")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
          >
            <path
              d="M12.0693 11.5074L19.0318 4.56837C19.3227 4.27475 19.3227 3.79908 19.0318 3.50546C18.7461 3.20659 18.2742 3.19761 17.9775 3.4854L11.0149 10.4244L4.14186 3.4854C4.00095 3.33514 3.80489 3.25 3.59977 3.25C3.39466 3.25 3.1986 3.33514 3.05769 3.4854C2.79978 3.76909 2.79978 4.20447 3.05769 4.48815L9.93075 11.4171L2.96817 18.3461C2.67728 18.6397 2.67728 19.1154 2.96817 19.409C3.10665 19.552 3.29711 19.6317 3.49533 19.6296C3.69738 19.6461 3.89768 19.5812 4.05234 19.4491L11.0149 12.5101L17.9775 19.5294C18.116 19.6724 18.3064 19.7521 18.5047 19.75C18.7027 19.7509 18.8927 19.6714 19.0318 19.5294C19.3227 19.2357 19.3227 18.7601 19.0318 18.4664L12.0693 11.5074Z"
              fill="#98A2B3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
