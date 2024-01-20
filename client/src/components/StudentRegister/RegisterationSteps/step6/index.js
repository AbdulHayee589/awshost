import React, { useEffect, useRef } from "react";
import "./style.scss";
import { IoIosArrowBack } from "react-icons/io";
import logo from "../../../../assets/images/logo.png";
import flag from "../../../../assets/images/flags/flagGermany.png";
import interest1 from "../../../../assets/images/icons/money.png";
import interest2 from "../../../../assets/images/icons/airplane.png";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
function Step6({
  firstName,
  LastName,
  setEmailAddress,
  selectedItem,
  EmailAddress,
}) {
  const uni = useSelector((state) => state.Uni);
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmailAddress(email);
  };
  const inputRef = useRef(null);
  useEffect(() => {
    // Focus on the input field when the component loads
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <motion.div
      id="Step6KSJen"
      initial={{ opacity: 0.2, scale: 0.2, x: "50%" }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="stepWrapper">
        {/* <div className="backButton" onClick={() => BackSetp()}>
          <h6>
            <IoIosArrowBack /> {"    "}
            Back
          </h6>
        </div> */}
        {/* <div className="section_title">
          <h3>/your last name</h3>
        </div> */}
        <div className="section_title">
          <h3>/your university e-mail</h3>
        </div>
        <div className="Form_first_wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="Input_wrapper">
                <input
                  ref={inputRef}
                  type="email"
                  value={EmailAddress}
                  name="First_Name"
                  className="Name_field"
                  placeholder="jack.smith@ebs.edu"
                  onChange={(e) => handleEmailChange(e)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card_wrapper">
                <div className="card boxShadow testcard">
                  <div className="row">
                    <div className="col">
                      <div className="nameLetter">
                        <h2>
                          {firstName?.length ? firstName?.slice(0, 1) : null}.
                          {LastName?.length ? LastName?.slice(0, 1) : null}
                        </h2>
                      </div>
                    </div>
                    <div className="col">
                      <div className="CardLogo">
                        <img src={logo} />
                      </div>
                    </div>
                  </div>
                  <div className="card_details">
                    <h3>
                      {firstName} {LastName}
                    </h3>
                    <p>Student at {uni}</p>
                    <div className="card_moreInfo">
                      <div className="countryLogo">
                        <div className="imgCountryContainer">
                          <img src={flag} alt="" />
                        </div>
                        <p className="countryName">Germany</p>
                      </div>
                      {selectedItem &&
                        selectedItem.map((item, index) => (
                          <div key={index} className="interests">
                            <div className="interest_item">
                              <img
                                src={item.icon}
                                alt=""
                                className="Interest_img_icon"
                              />
                              <p className="Interest_text">{item.id}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Step6;
