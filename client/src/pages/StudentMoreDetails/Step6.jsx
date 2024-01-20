import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Step6 = ({
  isNonMobile,
  setStep,
  handleFillPercentageChange,
  fillPercentage,
  languages,
  setLanguages,
  HandleSendData,
}) => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    // Filter countries based on the search text
    const filteredCountries = language.filter((country) =>
      country.text.toLowerCase().startsWith(search.toLowerCase())
    );
    setSearchList(filteredCountries);
  }, [search]);

  const handleSetLanguages = (selectedLang) => {
    // Check if the selected language is already in the languages state
    const languageExists = languages.find(
      (lang) => lang.text === selectedLang.text
    );

    // If the language is not in the state, add it
    if (!languageExists) {
      setLanguages((prevLanguages) => [...prevLanguages, selectedLang]);
      return;
    }
  };

  const handleNext = () => {
    if (languages.length === 0) {
      toast.error("Please Select Language");
    } else {
      HandleSendData();
    }
  };

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

  const handleRemoveLanguage = (lang) => {
    setLanguages(languages.filter((lan) => lan.text !== lang.text));
  };

  return (
    <div className={`${isNonMobile ? "m-4 p-4" : "m-2 p-2"} `}>
      <p className="mainheading">
        What languages do you speak at business level?
      </p>
      <div className="row mt-4">
        <div className="col-md-6">
          <div>
            <p className="selectlanguage">Select Languages</p>
            <p className={`belowSelectLanguage`}>
              Please only list languages in which you feel comfortable working
              daily.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <input
            className={`col-md-12 forminput  ${!isNonMobile && "mt-3"}`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Languages"
          />

          <div
            className="countrylist scrollbaredit"
            style={{ maxHeight: "10vh", overflow: "auto", cursor: "pointer" }}
          >
            {searchList.length !== 0
              ? searchList.map((sea, i) => (
                  <div
                    className="d-flex  mb-3"
                    key={i}
                    onClick={() => {
                      handleSetLanguages(sea);
                      setSearch("");
                    }}
                  >
                    <div>{sea.icon}</div>
                    <p> {sea.text}</p>
                  </div>
                ))
              : "None"}
          </div>

          <div className="flex-wrap d-flex mt-3" style={{ gap: "10px" }}>
            {languages.length > 0 &&
              languages.map((lang, index) => (
                <div className={`tags `} key={index}>
                  {lang.icon}
                  <p className="languagestext">{lang.text}</p>
                  <div onClick={() => handleRemoveLanguage(lang)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.00065 1.33301H12.0007C13.4734 1.33301 14.6673 2.52692 14.6673 3.99967V11.9997C14.6673 13.4724 13.4734 14.6663 12.0007 14.6663H4.00065C2.52789 14.6663 1.33398 13.4724 1.33398 11.9997V3.99967C1.33398 2.52692 2.52789 1.33301 4.00065 1.33301ZM13.1792 13.1782C13.4917 12.8656 13.6673 12.4417 13.6673 11.9997V3.99967C13.6673 3.55765 13.4917 3.13372 13.1792 2.82116C12.8666 2.5086 12.4427 2.33301 12.0007 2.33301H4.00065C3.08018 2.33301 2.33398 3.0792 2.33398 3.99967V11.9997C2.33398 12.4417 2.50958 12.8656 2.82214 13.1782C3.1347 13.4907 3.55862 13.6663 4.00065 13.6663H12.0007C12.4427 13.6663 12.8666 13.4907 13.1792 13.1782Z"
                        fill="#667085"
                      />
                      <path
                        d="M10.4607 5.81967C10.2654 5.62471 9.9492 5.62471 9.75398 5.81967L8.14065 7.43301L6.52732 5.81967C6.33031 5.6361 6.02331 5.64152 5.8329 5.83193C5.6425 6.02234 5.63708 6.32933 5.82065 6.52634L7.43398 8.13967L5.82065 9.75301C5.62568 9.94822 5.62568 10.2645 5.82065 10.4597C6.01586 10.6546 6.33211 10.6546 6.52732 10.4597L8.14065 8.84634L9.75398 10.4597C9.84766 10.5535 9.97475 10.6062 10.1073 10.6063C10.2393 10.6035 10.3654 10.5511 10.4607 10.4597C10.6556 10.2645 10.6556 9.94822 10.4607 9.75301L8.84732 8.13967L10.4607 6.52634C10.6556 6.33113 10.6556 6.01489 10.4607 5.81967Z"
                        fill="#667085"
                      />
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {languages && console.log(languages)}
      </div>
      <button className="continuebutton mt-5" onClick={() => handleNext()}>
        Next
      </button>
    </div>
  );
};
export default Step6;
