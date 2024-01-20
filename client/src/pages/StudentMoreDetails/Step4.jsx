import { toast } from "react-toastify";
const Step4 = ({
  isNonMobile,
  setStep,
  handleFillPercentageChange,
  fillPercentage,
  graduation,
  setGraduation,
}) => {
  const handleNext = () => {
    if (graduation.Month === "" || graduation.Year === "") {
      toast.error("Please enter your intake details");
    } else {
      handleFillPercentageChange(fillPercentage + 16.6666);
      setStep(5);
    }
  };
  const currentYear = new Date().getFullYear();
  return (
    <div className={`${isNonMobile ? "m-4 p-4" : "m-2 p-2"} `}>
      <button
        className="btn d-flex"
        style={{ justifyContent: "center", alignItems: "center" }}
        onClick={() => {
          handleFillPercentageChange(fillPercentage - 16.6666);
          setStep(3);
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
      <p className="mainheading">Expected Year of Graduation</p>
      <div className="row mt-4">
        <div className="col-md-6">
          <select
            className="forminput col-md-12"
            value={graduation.Month}
            onChange={(e) =>
              setGraduation({ Month: e.target.value, Year: graduation.Year })
            }
          >
            <option value="" disabled selected>
              Select Month
            </option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="col-md-6">
          <select
            className="forminput col-md-12"
            value={graduation.Year}
            onChange={(e) =>
              setGraduation({ Month: graduation.Month, Year: e.target.value })
            }
          >
            <option value="" disabled selected>
              Select Year
            </option>
            {Array.from({ length: 41 }, (_, index) => (
              <option key={index} value={currentYear - 30 + index}>
                {currentYear - 30 + index}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className="continuebutton mt-5" onClick={() => handleNext()}>
        Next
      </button>
    </div>
  );
};
export default Step4;
