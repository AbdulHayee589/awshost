const Step2 = ({
  isNonMobile,
  setStep,
  handleFillPercentageChange,
  fillPercentage,
  study,
  setStudy,
}) => {
  const options = [
    "Humanity",
    "Business",
    "Law",
    "Engineering",
    "MINT",
    "Social Sciences",
    "Psychology",
    "Political Sciences",

    "Others",
  ];
  return (
    <div className={`${isNonMobile ? "m-4 p-4" : "m-2 p-2"} `}>
      <button
        className="btn d-flex"
        style={{ justifyContent: "center", alignItems: "center" }}
        onClick={() => {
          handleFillPercentageChange(fillPercentage - 16.6666);
          setStep(1);
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M10.6669 14.3329C10.5342 14.3335 10.4068 14.2807 10.3135 14.1862L4.98021 8.85291C4.78524 8.65769 4.78524 8.34145 4.98021 8.14624L10.3135 2.81291C10.5106 2.62933 10.8176 2.63475 11.008 2.82516C11.1984 3.01557 11.2038 3.32257 11.0202 3.51957L6.04021 8.49957L11.0202 13.4796C11.2152 13.6748 11.2152 13.991 11.0202 14.1862C10.927 14.2807 10.7996 14.3335 10.6669 14.3329Z"
              fill="black"
            />
          </svg>
        </div>
        <p className="backbuttonstudent">Back</p>
      </button>
      <p className="mainheading">What do you study?</p>
      <select
        className="forminput col-md-12 col-12 mt-4 step2Options"
        value={study}
        onChange={(e) => {
          setStudy(e.target.value);
          handleFillPercentageChange(fillPercentage + 16.6666);
          setStep(3);
        }}
      >
        <option value="Please Select" className="options">
          e.g. General Management / Finance / Law
        </option>
        {options.map((opt, index) => (
          <option key={index} value={opt} className="options">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Step2;
