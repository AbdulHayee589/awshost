import React, { useEffect, useState } from "react";
import "./body.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import upload from "../../../assets/images/icons/upload.png";
import Automotive from "../../../assets/images/icons/Automotive.png";
import Brand from "../../../assets/images/icons/Brand.png";
import Consulting from "../../../assets/images/icons/Consulting.png";
import Economics from "../../../assets/images/icons/Economics.png";
import Emerging from "../../../assets/images/icons/Emerging.png";
import Fashion from "../../../assets/images/icons/Fashion.png";
import Finance from "../../../assets/images/icons/Finance.png";
import Government from "../../../assets/images/icons/Government.png";
import Graduate from "../../../assets/images/icons/Graduate.png";
import Law from "../../../assets/images/icons/Law.png";
import Pharma from "../../../assets/images/icons/Pharma.png";
import Startup from "../../../assets/images/icons/Startup.png";
import Supply from "../../../assets/images/icons/Supply.png";
import Technology from "../../../assets/images/icons/Technology.png";
import sample from "../../../assets/images/logosCOmpany/bcg.png";
import { useMediaQuery } from "@mui/material";
import TextArea from "../textarea";
import { toast } from "react-toastify";
import Location from "./location/location";
import axios from "axios";
import { setCompany as set } from "../../../state";
const Body = () => {
  const email = useSelector((state) => state.email);
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:999px)");
  const [name, setName] = useState("");
  const [companyLink, setCompanyLink] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [tagline, setTagline] = useState("");
  const [agree, setAgree] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const goBack = () => {
    navigate(-1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Url = reader.result;

        // Build the payload
        const payload = {
          email,
          name,
          companyLink,
          website,
          industry,
          size,
          type,
          selectedFile: base64Url, // Use the base64 URL
          tagline,
          selectedItem,

          country,
        };

        axios
          .post("http://localhost:5000/create/company", payload)
          .then((res) => {
            if (res.data.message === "Created") {
              dispatch(set({ company: res.data.savedUser.uniqueId }));
              navigate("/create/company/role");
            } else if (res.data.message === "Already") {
              toast.error("Company Name Already Taken", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
        reader.abort();
      };

      reader.readAsDataURL(selectedFile);
    }
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
  const [InterestItemsList, setInterestItem] = useState([...items]);
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const img = new Image();
      img.onload = function () {
        if (img.width <= 300 && img.height <= 300) {
          setSelectedFile(file);
        } else {
          toast.error("Image dimensions must be 300x300px or smaller.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      };
      img.src = URL.createObjectURL(file);
    } else {
      toast.error("Please select a valid image file.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFileChange({ target: { files: event.dataTransfer.files } });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const fileInputRef = React.createRef();
  useEffect(() => {
    if (!email) {
      navigate("/register/organization");
    }
  }, []);

  function selectItem(item, i) {
    if (selectedItem.length <= 5 || item.select === true) {
      let itemId = item.id;
      let updatedItem = [...InterestItemsList];

      if (updatedItem[i]?.select) {
        // If the item is already selected, unselect it
        updatedItem[i].select = false;
        let newSelectedItems = selectedItem.filter(
          (selected) => selected.id !== itemId
        );
        setSelectedItem(newSelectedItems);
      } else {
        // If the item is not selected, select it
        updatedItem[i].select = true;
        setSelectedItem((prev) => [...prev, item]);
      }

      setInterestItem(updatedItem);
    }
  }

  return (
    <>
      <div className="mt-5 d-flex">
        <div className="col-md-6 col-12" style={{ maxWidth: "567px" }}>
          <div className="row">
            <div>
              <p className="formtext">Name *</p>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="forminput col-md-12 col-12 mt-2"
              />
            </div>
            <div>
              <p className="formtext mt-2">varyance.com/company/*</p>

              <input
                value={companyLink}
                placeholder="/bostonconsultinggroup"
                onChange={(e) => setCompanyLink(e.target.value)}
                className="forminput col-md-12 col-12 mt-2"
              />
            </div>
            <p
              style={{
                color: "#E31B54",
                fontFamily: "Public Sans",
                fontSize: "14px",
                fontWeight: "400",
              }}
              className="mt-2"
            >
              Learn more about the Page Public URL
            </p>
            <div>
              <p className="formtext mt-2">Website</p>

              <input
                value={website}
                placeholder="Begin with hhtp://’ http:// or www."
                onChange={(e) => setWebsite(e.target.value)}
                className="forminput col-md-12 col-12 mt-2"
              />
            </div>
            <div>
              <p className="formtext mt-2">Industry *</p>

              <input
                value={industry}
                placeholder="e.g. Professional Services / Banking / Healthcare"
                onChange={(e) => setIndustry(e.target.value)}
                className="forminput col-md-12 col-12 mt-2"
              />
            </div>
            <div
              className="tag-container"
              style={{
                gap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className="formtext mt-2">Select tags * (maximum 6)</p>
              <div
                className="tags-container"
                style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
              >
                {InterestItemsList.map((item, index) => (
                  <div
                    className={`tags ${item.select ? "selected" : ""}`}
                    key={index}
                    onClick={() => selectItem(item, index)}
                  >
                    {item.icon && <img src={item.icon} alt="icon" />}
                    <p
                      className="itemstexts"
                      style={item.select ? { color: "white" } : {}}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="formtext mt-2">Organization size *</p>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="forminput col-md-12 col-12 mt-2"
              >
                <option value="Select Size" className="options">
                  Select Size
                </option>
                <option value="1-10" className="options">
                  1-10 employees
                </option>
                <option value="11-50" className="options">
                  11-50 employees
                </option>
                <option value="51-500" className="options">
                  51-500 employees
                </option>
                <option value="501-5000" className="options">
                  501 - 5000 employees
                </option>
                <option value="5000+" className="options">
                  5000+ employees
                </option>
              </select>
            </div>
            <div>
              <p className="formtext mt-2">Organization type *</p>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="forminput col-md-12 col-12 mt-2"
              >
                <option value="Select type" className="options">
                  Select type
                </option>
                <option value="Public Company" className="options">
                  Public Company
                </option>
                <option value="Privately Held" className="options">
                  Privately Held
                </option>
                <option value="Partnership" className="options">
                  Partnership
                </option>
                <option value="Government Agency" className="options">
                  Government Agency
                </option>
                <option value="NGO / Think Tank" className="options">
                  NGO / Think Tank
                </option>
                <option value="Non Profit" className="options">
                  Non Profit
                </option>
                <option value="Association" className="options">
                  Association
                </option>
              </select>
            </div>
            <div>
              <p className="formtext mt-2">Location *</p>
              <Location
                setCountry={setCountry}
                setLocation={setLocation}
                location={location}
                country={country}
              />
            </div>
            <div>
              <p className="formtext mt-2">Upload logo</p>
              <div
                className="drop-area mt-2"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={openFileInput}
              >
                {selectedFile && (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Selected"
                    style={{ maxWidth: "300px", maxHeight: "100px" }}
                  />
                )}{" "}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />
                {!selectedFile && (
                  <>
                    <img
                      src={upload}
                      alt="upload image"
                      style={{ maxHeight: "40px", maxWidth: "40px" }}
                    />
                    <div className="d-flex" style={{ gap: "5px" }}>
                      <p
                        style={{
                          color: "#E31B54",
                          fontFamily: "Public Sans",
                          fontWeight: "600",
                          fontSize: "14px",
                        }}
                      >
                        Click to upload
                      </p>
                      <p
                        style={{
                          fontFamily: "Public Sans",
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        or drag and drop
                      </p>
                    </div>{" "}
                  </>
                )}
                {selectedFile && (
                  <p
                    style={{
                      fontFamily: "Public Sans",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#E31B54",
                    }}
                  >
                    Click to change
                  </p>
                )}
                <p
                  style={{
                    fontFamily: "Public Sans",
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#475467",
                  }}
                >
                  SVG, PNG, JPG, or GIF (max. 300x300px)
                </p>
              </div>
            </div>
            <div>
              <p className="formtext mt-2">Tagline</p>

              {/* <textarea
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="forminput col-md-12 col-12 mt-2"
                rows="3" // Set the number of visible rows as needed
                maxLength={120}
              /> */}
              <TextArea tagline={tagline} setTagline={setTagline} />
            </div>
            <div
              className="d-flex mt-2"
              style={{ justifyContent: "space-between" }}
            >
              <p
                className="col-md-10 "
                style={{
                  color: "#667085",
                  fontFamily: "Public Sans",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Use your tagline to briefly describe what your organization
                does. This can be changed later
              </p>

              <p
                className="col-md-2 text-end"
                style={{
                  color: "#667085",
                  fontFamily: "Public Sans",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {tagline.length}/120
              </p>
            </div>
            <div className="mt-3 d-flex">
              <div className="" style={{ marginRight: "10px" }}>
                <div
                  className="checkbox rounded-1 border border-1"
                  style={
                    agree
                      ? { cursor: "pointer", backgroundColor: "#E31B54" }
                      : { cursor: "pointer", backgroundColor: "#FFF" }
                  }
                  onClick={() => setAgree(!agree)}
                ></div>
              </div>
              <div className="">
                <p
                  style={{
                    color: "#667085",
                    fontFamily: "Public Sans",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  I verify that I am an authorized representative of this
                  organization and have the right to act on its behalf in the
                  creation and management of this page.The organization and I
                  agree to the additional
                </p>{" "}
                <p
                  style={{
                    color: "#E31B54",
                    fontFamily: "Public Sans",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginLeft: "3px",
                    // Add margin-top to separate paragraphs
                  }}
                >
                  Terms for Pages
                </p>
              </div>
            </div>
          </div>
        </div>
        {isNonMobile && (
          <div
            className="d-flex "
            style={{ justifyContent: "end", width: "50vw" }}
          >
            <div
              className="companyCardtoDisplay"
              style={{ overflow: "hidden", display: "block" }}
            >
              <div className=" m-5 mt-4 mb-0 ">
                <div class="custom-image logobox">
                  <img
                    src={
                      selectedFile ? URL.createObjectURL(selectedFile) : sample
                    }
                    alt="Company logo Image"
                    style={{ maxHeight: "90px", maxWidth: "90px" }}
                  />
                </div>
              </div>
              <p className="companyname m-5 mt-3 mb-0">
                {name ? name : "Company Name"}
              </p>
              <p className="m-5 mt-0 mb-0 tagline" style={{ display: "block" }}>
                {tagline ? tagline : "Tagline"}
              </p>
              <div
                className="d-flex m-5 mt-3 mb-3"
                style={{ flexWrap: "wrap" }}
              >
                {country && (
                  <div className={`tagscard  `}>
                    {" "}
                    {country.icon && <img src={country.icon} alt="icon" />}
                    <p className="itemstexts">{country.name}</p>
                  </div>
                )}
                {selectedItem.map((item, index) => (
                  <div
                    className={`tagscard ${item.select ? "selectedcard" : ""}`}
                    key={index}
                    onClick={() => selectItem(item, index)}
                  >
                    {item.icon && <img src={item.icon} alt="icon" />}
                    <p
                      className="itemstexts"
                      style={item.select ? { color: "white" } : {}}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="1"
        viewBox="0 0 1360 1"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1360 1H0V0H1360V1Z"
          fill="#EAECF0"
        />
      </svg>

      <div className="d-flex mt-3" style={{ justifyContent: "end" }}>
        <button className="m-3 mt-0 mb-0 backbutton" onClick={goBack}>
          Back
        </button>
        <button
          className="continuebutton"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
          disabled={
            !name ||
            !companyLink ||
            !website ||
            !industry ||
            !selectedItem ||
            !size ||
            !type ||
            !country ||
            !selectedFile ||
            !tagline ||
            !agree
          }
        >
          Continue
        </button>
      </div>
    </>
  );
};
export default Body;
