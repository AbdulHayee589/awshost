import React, { useEffect, useRef } from "react";
import "./style.scss";
import { IoIosArrowBack } from "react-icons/io";
import logo from "../../../../assets/images/logo.png";
import flag from "../../../../assets/images/flags/flagGermany.png";
import interest1 from "../../../../assets/images/icons/money.png";
import interest2 from "../../../../assets/images/icons/airplane.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NameCard from "../../../Card/Namecard";
function Step2({ firstName, setFirstName, selectedItem }) {
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("firstName", JSON.stringify(firstName));
  }, [firstName]);

  useEffect(() => {
    // Focus on the input field when the component loads
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        id="Step2Ki33"
        initial={{ opacity: 0.2, scale: 0.2, x: "50%" }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0.2, x: "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <div className="stepWrapper  ">
          {/* <div className="backButton" onClick={() => BackSetp()}>
          <h6>
            <IoIosArrowBack /> {"    "}
            Back
          </h6>
        </div> */}
          <div className="section_title ">
            <h3>/your first name</h3>
          </div>
          <div className="Form_first_wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="Input_wrapper">
                  <input
                    ref={inputRef}
                    value={firstName}
                    type="text"
                    name="First_Name"
                    className="Name_field"
                    placeholder="type here"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <NameCard firstName={firstName} selectedItem={selectedItem} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Step2;
