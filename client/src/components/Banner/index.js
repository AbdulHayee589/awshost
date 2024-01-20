// !imports

import React, { useState } from "react";

//! local imports
import "./styles.scss";
import Card from "../Card/Card";

// ! images imports
import { useMediaQuery } from "@mui/material";
import logo1 from "../../assets/images/1.png";
import logo2 from "../../assets/images/2.png";
import logo3 from "../../assets/images/3.png";
import logo4 from "../../assets/images/4.png";
import logo5 from "../../assets/images/5.png";
import logo6 from "../../assets/images/6.png";
import logo7 from "../../assets/images/7.png";

import germany from "../../assets/images/flags/flagGermany.png";
import uk from "../../assets/images/flags/uk.png";
import frnc from "../../assets/images/flags/france.png";
import italy from "../../assets/images/flags/italy.png";
import tree from "../../assets/images/flags/coconut-tree.png";
import globe from "../../assets/images/flags/planet-earth.png";
import portogal from "../../assets/images/flags/portogal.jpg";
import spain from "../../assets/images/flags/span.png";
import { setUni } from "../../state";
import { useDispatch } from "react-redux";

import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
function Banner() {
  const [selectedLogo, setSelectedLogo] = useState(logo1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const university = [
    {
      name: "EBS Universität für Wirtschaft und Recht",
      logo: logo1,
    },
    {
      name: "Frankfurt School of Finance & Management",
      logo: logo2,
    },
    {
      name: "WHU - Otto Beisheim School of Management",
      logo: logo3,
    },
    {
      name: "Universität Mannheim",
      logo: logo4,
    },
    {
      name: "TU Technische Universität Darmstadt",
      logo: logo5,
    },
    {
      name: "Universität Augsburg",
      logo: logo6,
    },
    {
      name: "Universität Heidelberg",
      logo: logo7,
    },
  ];
  const HandleSetUni = (e) => {
    const selectedUniversity = university.find(
      (uni) => uni.logo === e.target.value
    );

    if (selectedUniversity) {
      dispatch(setUni({ Uni: selectedUniversity.name }));
    }
    navigate("/register");
  };
  return (
    <div
      className="HomeBannerSection"
      style={isNonMobile ? {} : { overflow: "hidden" }}
    >
      <div className="banner_wrapper positive-absolute">
        <span />
        <div className="pt-5">
          <img
            src={logo}
            className="Logo_nav"
            width="64px"
            height="64px"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="gropu1Sectin">
                <div className="group_wrapper">
                  <div className="title">
                    <h2>
                      Join /varyance and <br />
                      fast-track your career start
                    </h2>
                    <p className="mt-1">
                      Solve real-world challenges designed by investment banks,
                      law firms, consulting firms and industry leaders across
                      the globe.
                    </p>
                  </div>
                  <div className="searchInput">
                    <p>Find your university</p>
                    <div className="searchContainer d-flex">
                      <div className="wrapper p-2">
                        <img src={selectedLogo} alt="" />
                        <select
                          className="btn text-start"
                          name="dropdown"
                          id="UniDrop"
                          onChange={(e) => {
                            setSelectedLogo(e.target.value);
                            HandleSetUni(e);
                          }}
                        >
                          {university.map((uni, index) => (
                            <option key={index} value={uni.logo}>
                              {uni.name}
                            </option>
                          ))}
                        </select>

                        <label htmlFor="dropdown"></label>
                      </div>
                      <div
                        className="imgGroup d-flex col-md-2"
                        style={{ position: "relative" }}
                      >
                        <img
                          src="./p4.png"
                          alt=""
                          style={{
                            zIndex: 5,
                            marginLeft: "-15px",
                            position: "relative",
                          }}
                        />
                        <img
                          src="./p4.png"
                          alt=""
                          style={{
                            zIndex: 4,
                            marginLeft: "-15px",
                            position: "relative",
                          }}
                        />
                        <img
                          src="./p3.png"
                          alt=""
                          style={{
                            zIndex: 3,
                            marginLeft: "-15px",
                            position: "relative",
                          }}
                        />
                        <img
                          src="./p2.png"
                          alt=""
                          style={{
                            zIndex: 2,
                            marginLeft: "-15px",
                            position: "relative",
                          }}
                        />
                        <img
                          src="./p1.png"
                          alt=""
                          style={{
                            zIndex: 1,
                            marginLeft: "-15px",
                            position: "relative",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 p-0">
              <div className="grid-wrapper">
                <div className="grid-cards">
                  {/* <img src={GroupCard} className="img-fluid" alt="alt"/> */}
                  <Card />
                </div>
                <div className="logo-grid">
                  <div className="logo-g">
                    <img src="./bcg-icon.png" alt="logo" />
                  </div>
                  <div className="logo-g">
                    <img src="./google-icon.png" alt="logo" />
                  </div>
                  <div className="logo-g">
                    <img src="./lufthansa-icon.png" alt="logo" />
                  </div>
                  <div className="arrow-logo">
                    <img src="./Icon.png" alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
