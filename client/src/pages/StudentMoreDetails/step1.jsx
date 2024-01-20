import { useState } from "react";

const step1 = ({
  levelofstudy,
  setLevelOfStudy,
  isNonMobile,
  setStep,
  handleFillPercentageChange,
  fillPercentage,
}) => {
  const study = ["Bachelor", "Master", "PHD", "State Examination", "Other"];

  return (
    <div className={`${isNonMobile ? "m-4 p-4" : "m-2 p-2"} `}>
      <p className="mainheading">Level of Study</p>
      <div className="mt-4">
        {study.map((stu, index) => (
          <div key={index} className="d-flex mt-2 mb-2">
            <div
              className="d-flex"
              style={{
                marginRight: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="checkbox rounded-5 border border-1"
                style={
                  levelofstudy === stu
                    ? { cursor: "pointer", backgroundColor: "#E31B54" }
                    : { cursor: "pointer", backgroundColor: "#FFF" }
                }
                onClick={() => {
                  setLevelOfStudy(stu);
                  setStep(2);
                  handleFillPercentageChange(fillPercentage + 16.6666);
                }}
              ></div>
            </div>
            <p className="options d-flex">{stu}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default step1;
