import { useState } from "react";
import "./step2.css";
import Automotive from "../../assets/images/icons/Automotive.png";
import Brand from "../../assets/images/icons/Brand.png";
import Consulting from "../../assets/images/icons/Consulting.png";
import Economics from "../../assets/images/icons/Economics.png";
import Emerging from "../../assets/images/icons/Emerging.png";
import Fashion from "../../assets/images/icons/Fashion.png";
import Finance from "../../assets/images/icons/Finance.png";
import Government from "../../assets/images/icons/Government.png";
import Graduate from "../../assets/images/icons/Graduate.png";
import Law from "../../assets/images/icons/Law.png";
import Pharma from "../../assets/images/icons/Pharma.png";
import Startup from "../../assets/images/icons/Startup.png";
import Supply from "../../assets/images/icons/Supply.png";
import Technology from "../../assets/images/icons/Technology.png";
import { toast } from "react-toastify";
const Step2 = ({
  setSkills,
  skills,
  learns,
  setLearns,
  selectedItem,
  setSelectedItem,
  selectedLanguage,
  setSelectedLanguage,
  defaults,
  setDefaults,

  setStep,
}) => {
  const [skill, setSkill] = useState("");
  const [learn, setLearn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skill !== "" && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  const handleRemove = (ski) => {
    setSkills(skills.filter((skill) => skill !== ski));
  };

  const handlelearnSubmit = (e) => {
    e.preventDefault();
    if (learn !== "" && !learns.includes(learn)) {
      if (learns.length < 12) {
        setLearns([...learns, learn]);
        setLearn("");
      } else {
        toast.error("Only upto 12 skills are allowed");
      }
    }
  };
  const handlelearnRemove = (ski) => {
    setLearns(learns.filter((learn) => learn !== ski));
  };

  const items = [
    {
      id: "Brand Management",
      icon: Brand,
      text: "Brand Management",
      select: false,
    },
    { id: "Finance", icon: Finance, text: "Finance", select: false },
    { id: "Consulting", icon: Consulting, text: "Consulting", select: false },
    { id: "Economics", icon: Economics, text: "Economics", select: false },
    { id: "Law", icon: Law, text: "Law", select: false },
    { id: "Fashion", icon: Fashion, text: "Fashion", select: false },
    {
      id: "Emerging Markets",
      icon: Emerging,
      text: "Emerging Markets",
      select: false,
    },
    { id: "Supply Chain", icon: Supply, text: "Supply Chain", select: false },
    { id: "Pharma", icon: Pharma, text: "Pharma", select: false },
    { id: "Technology", icon: Technology, text: "Technology", select: false },
    { id: "Government", icon: Government, text: "Government", select: false },
    {
      id: "Graduate Studies / MBA",
      icon: Graduate,
      text: "Graduate Studies / MBA",
      select: false,
    },
    { id: "Start-Up", icon: Startup, text: "Start-Up", select: false },
    { id: "Automotive", icon: Automotive, text: "Automotive", select: false },
    { id: "Others", icon: null, text: "Others", select: false },
  ];
  const language = [
    {
      text: "French",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_3910_21827)">
            <path
              d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
              fill="#F0F0F0"
            />
            <path
              d="M16.0001 8.00045C16.0001 4.56073 13.8291 1.62839 10.7827 0.498047V15.5029C13.8291 14.3725 16.0001 11.4402 16.0001 8.00045Z"
              fill="#D80027"
            />
            <path
              d="M0.000488281 8.00045C0.000488281 11.4402 2.17152 14.3725 5.21789 15.5029V0.498047C2.17152 1.62839 0.000488281 4.56073 0.000488281 8.00045Z"
              fill="#0052B4"
            />
          </g>
          <defs>
            <clipPath id="clip0_3910_21827">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      select: false,
    },
    {
      text: "Italian",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_3910_21830)">
            <path
              d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
              fill="#F0F0F0"
            />
            <path
              d="M16.0001 7.99948C16.0001 4.55976 13.8291 1.62741 10.7827 0.49707V15.5019C13.8291 14.3715 16.0001 11.4392 16.0001 7.99948Z"
              fill="#D80027"
            />
            <path
              d="M0 7.99948C0 11.4392 2.171 14.3715 5.21741 15.5019V0.49707C2.171 1.62741 0 4.55976 0 7.99948Z"
              fill="#6DA544"
            />
          </g>
          <defs>
            <clipPath id="clip0_3910_21830">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      select: false,
    },
    {
      text: "German",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_3910_21833)">
            <path
              d="M0.497559 10.7835C1.6279 13.8299 4.56025 16.0009 7.99996 16.0009C11.4397 16.0009 14.372 13.8299 15.5024 10.7835L7.99996 10.0879L0.497559 10.7835Z"
              fill="#FFDA44"
            />
            <path
              d="M7.99996 0.000976562C4.56025 0.000976562 1.6279 2.17198 0.497559 5.21838L7.99996 5.91401L15.5024 5.21835C14.372 2.17198 11.4397 0.000976562 7.99996 0.000976562Z"
              fill="black"
            />
            <path
              d="M0.497594 5.2168C0.176031 6.08345 0 7.02083 0 7.99939C0 8.97795 0.176031 9.91533 0.497594 10.782H15.5024C15.824 9.91533 16 8.97795 16 7.99939C16 7.02083 15.824 6.08345 15.5024 5.2168H0.497594Z"
              fill="#D80027"
            />
          </g>
          <defs>
            <clipPath id="clip0_3910_21833">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      select: false,
    },
    {
      text: "Portuguese",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_3910_21836)">
            <path
              d="M-0.000488281 8.00045C-0.000488281 11.4401 2.17051 14.3725 5.21686 15.5028L5.91254 8.00042L5.21686 0.498047C2.17051 1.62842 -0.000488281 4.56073 -0.000488281 8.00045Z"
              fill="#6DA544"
            />
            <path
              d="M15.9999 8C15.9999 3.58175 12.4182 0 7.99994 0C7.02138 0 6.08397 0.176031 5.21729 0.497594V15.5024C6.08397 15.824 7.02138 16 7.99994 16C12.4182 16 15.9999 12.4183 15.9999 8Z"
              fill="#D80027"
            />
            <path
              d="M5.21765 10.783C6.75444 10.783 8.00025 9.53715 8.00025 8.00037C8.00025 6.46358 6.75444 5.21777 5.21765 5.21777C3.68087 5.21777 2.43506 6.46358 2.43506 8.00037C2.43506 9.53715 3.68087 10.783 5.21765 10.783Z"
              fill="#FFDA44"
            />
            <path
              d="M3.65186 6.6084V8.34753C3.65186 9.21196 4.35261 9.91275 5.21708 9.91275C6.08154 9.91275 6.7823 9.212 6.7823 8.34753V6.6084H3.65186Z"
              fill="#D80027"
            />
            <path
              d="M5.21755 8.86875C4.92986 8.86875 4.6958 8.63468 4.6958 8.34699V7.65137H5.73927V8.34703C5.73927 8.63468 5.50521 8.86875 5.21755 8.86875Z"
              fill="#F0F0F0"
            />
          </g>
          <defs>
            <clipPath id="clip0_3910_21836">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      select: false,
    },
    {
      text: "Spanish",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M15.5033 5.21741C14.373 2.17103 11.4407 0 8.00094 0C4.56122 0 1.62888 2.17103 0.498535 5.21741H15.5033Z"
            fill="#D80027"
          />
          <path
            d="M0.498047 10.7832C1.62839 13.8296 4.56073 16.0006 8.00045 16.0006C11.4402 16.0006 14.3725 13.8296 15.5029 10.7832H0.498047Z"
            fill="#D80027"
          />
        </svg>
      ),
      select: false,
    },
  ];

  const [InterestItemsList, setInterestItem] = useState([...items]);

  function selectItem(item, i) {
    let itemId = item.id;
    let updatedItem = [...InterestItemsList];

    if (selectedItem.some((selectedIte) => selectedIte.id === item.id)) {
      updatedItem[i].select = false;
      let newIdList = selectedItem.filter(
        (selectedItem) => selectedItem.id !== itemId
      );
      setSelectedItem(newIdList);
    } else {
      updatedItem[i].select = true;
      setSelectedItem((prev) => [...prev, item]);
    }

    setInterestItem([...updatedItem]);
  }

  const [languages, setLanguages] = useState([...language]);

  function selectlanguage(item, i) {
    let itemId = item.text;
    let updatedItem = [...languages];

    if (updatedItem[i]?.select) {
      // If the item is already selected, unselect it
      updatedItem[i].select = false;
      let newSelectedItems = selectedLanguage.filter(
        (selected) => selected.text !== itemId
      );
      setSelectedLanguage(newSelectedItems);
    } else {
      // If the item is not selected, select it
      updatedItem[i].select = true;
      setSelectedLanguage((prev) => [...prev, item]);
    }

    setLanguages(languages);
  }

  const handleFormSubmit = () => {
    if (learns.length < 5) {
      toast.error("Please Enter at least 5 skills which students will learn");
      return;
    } else if (selectedItem.length < 3) {
      toast.error("Please Add upto 3 Student Interests");
      return;
    } else {
      setStep(3);
    }
  };

  return (
    <div className="col-md-10 p-5">
      <p
        className="mt-4"
        style={{ fontSize: "24px", fontWeight: "400", color: "#0C111D" }}
      >
        Challenge Details
      </p>
      <p
        style={{
          color: "#1D2939",
          fontSize: "14px",
          fontWeight: "400",
          fontFamily: "Public Sans",
        }}
      >
        Categorize the challenge to attract the right students.
      </p>
      <p className="mt-4 step2headingtext">Required Skills(Optional)</p>
      <p className="step2belowtext mt-2">
        Skills students should have to excel in the challenge.
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="forminput col-md-12 col-12 mt-2"
          placeholder="e.g, DFC Modelling, Python, SWOT Analysis"
        />
      </form>
      <div className="d-flex flex-wrap" style={{ gap: "20px" }}>
        {skills &&
          skills.map((ski, i) => (
            <div
              key={i}
              className="mt-2  skillsshow d-flex"
              style={{ cursor: "pointer" }}
            >
              <p className="skillsshowtext"> {ski}</p>
              <div onClick={() => handleRemove(ski)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9.87484 9.00604L15.5715 3.32867C15.8095 3.08843 15.8095 2.69925 15.5715 2.45901C15.3377 2.21448 14.9516 2.20714 14.7089 2.4426L9.01221 8.11997L3.38879 2.4426C3.2735 2.31966 3.11309 2.25 2.94527 2.25C2.77745 2.25 2.61703 2.31966 2.50174 2.4426C2.29073 2.67471 2.29073 3.03093 2.50174 3.26303L8.12516 8.9322L2.4285 14.6014C2.1905 14.8416 2.1905 15.2308 2.4285 15.471C2.54181 15.588 2.69763 15.6532 2.85982 15.6515C3.02513 15.665 3.18901 15.6119 3.31555 15.5038L9.01221 9.82647L14.7089 15.5695C14.8222 15.6865 14.978 15.7517 15.1402 15.75C15.3022 15.7507 15.4577 15.6857 15.5715 15.5695C15.8095 15.3292 15.8095 14.9401 15.5715 14.6998L9.87484 9.00604Z"
                    fill="#0C111D"
                  />
                </svg>
              </div>
            </div>
          ))}
      </div>
      <hr style={{ borderColor: "#D9D9D9", borderWidth: "1px" }} />
      <p className="step2headingtext mt-3">Skills student will learn</p>
      <p className="mt-2 step2belowtext">
        Select a minimum of 5 and up to 12 skills students will learn, apply or
        expand on. Learn more about challenge skills.
      </p>
      <form onSubmit={(e) => handlelearnSubmit(e)}>
        <input
          value={learn}
          onChange={(e) => setLearn(e.target.value)}
          className="forminput col-md-12 col-12 mt-2"
          placeholder="e.g, Data Presentation, Communication Skills, Sales, M&A Screening, etc."
        />
      </form>
      <div className="d-flex flex-wrap" style={{ gap: "20px" }}>
        {learns &&
          learns.map((ski, i) => (
            <div
              key={i}
              className="mt-2  skillsshow d-flex"
              style={{ cursor: "pointer" }}
            >
              <p className="skillsshowtext"> {ski}</p>
              <div onClick={() => handlelearnRemove(ski)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9.87484 9.00604L15.5715 3.32867C15.8095 3.08843 15.8095 2.69925 15.5715 2.45901C15.3377 2.21448 14.9516 2.20714 14.7089 2.4426L9.01221 8.11997L3.38879 2.4426C3.2735 2.31966 3.11309 2.25 2.94527 2.25C2.77745 2.25 2.61703 2.31966 2.50174 2.4426C2.29073 2.67471 2.29073 3.03093 2.50174 3.26303L8.12516 8.9322L2.4285 14.6014C2.1905 14.8416 2.1905 15.2308 2.4285 15.471C2.54181 15.588 2.69763 15.6532 2.85982 15.6515C3.02513 15.665 3.18901 15.6119 3.31555 15.5038L9.01221 9.82647L14.7089 15.5695C14.8222 15.6865 14.978 15.7517 15.1402 15.75C15.3022 15.7507 15.4577 15.6857 15.5715 15.5695C15.8095 15.3292 15.8095 14.9401 15.5715 14.6998L9.87484 9.00604Z"
                    fill="#0C111D"
                  />
                </svg>
              </div>
            </div>
          ))}
      </div>
      <hr style={{ borderColor: "#D9D9D9", borderWidth: "1px" }} />
      <p className="step2headingtext mt-3">Student Interests</p>
      <p className="mt-2 step2belowtext">
        Categorize challenge based on student interests. Add up to 3 groups.
      </p>
      <div
        className="tags-container mt-3"
        style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
      >
        {InterestItemsList.map((item, index) => (
          <div
            className={`createchallengetags ${
              selectedItem.some((selectedIte) => selectedIte.id === item.id)
                ? "selected"
                : ""
            }`}
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => selectItem(item, index)}
          >
            {item.icon && (
              <img src={item.icon} alt="icon" width="16px" height="16px" />
            )}
            <p
              className="createchallengetagstext"
              style={
                selectedItem.some((selectedIte) => selectedIte.id === item.id)
                  ? { color: "white" }
                  : {}
              }
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <hr style={{ borderColor: "#D9D9D9", borderWidth: "1px" }} />
      <p className="step2headingtext mt-3">
        Language Requirements (in case challenge is in another language other
        than English).
      </p>
      <p className="mt-2 step2belowtext">
        Applicable if challenge covers national regulations, laws or local
        concepts.
      </p>{" "}
      <div
        className="tags-container mt-3"
        style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
      >
        {languages.map((item, index) => (
          <div
            className={`createchallengetags ${
              selectedLanguage.some(
                (selectedIte) => selectedIte.text === item.text
              )
                ? "selected"
                : ""
            }`}
            key={index}
            onClick={() => selectlanguage(item, index)}
            style={{ cursor: "pointer" }}
          >
            {item.icon && item.icon}
            <p
              className="createchallengetagstext"
              style={
                selectedLanguage.some(
                  (selectedIte) => selectedIte.text === item.text
                )
                  ? { color: "white" }
                  : {}
              }
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div
        className=" d-flex mt-5"
        style={{ marginRight: "10px", gap: "10px" }}
      >
        <div
          className="checkbox rounded-1 border border-1"
          style={
            defaults
              ? { cursor: "pointer", backgroundColor: "#E31B54" }
              : { cursor: "pointer", backgroundColor: "#FFF" }
          }
          onClick={() => setDefaults(!defaults)}
        ></div>
        <p className="step2headingtext">
          Set this as default values for future job posts.
        </p>
      </div>
      <hr style={{ borderColor: "#D9D9D9", borderWidth: "1px" }} />
      <div className="d-flex  " style={{ justifyContent: "end", gap: "10px" }}>
        <button className="createbackbutton" onClick={() => setStep(1)}>
          Back
        </button>
        <button className="continuebutton" onClick={() => handleFormSubmit()}>
          Continue
        </button>
      </div>
    </div>
  );
};
export default Step2;
