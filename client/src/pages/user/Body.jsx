import React, { useEffect, useState } from "react";
// import "./body.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./body.css";
import upload from "../../assets/images/icons/upload.png";
import logo from "../../assets/images/logo.png";

import { useMediaQuery } from "@mui/material";
import TextArea from "../../components/Company/textarea";
import { toast } from "react-toastify";
import Location from "../../components/Company/create/location/location";
import axios from "axios";
import { setId } from "../../state";
import { useDispatch } from "react-redux";
const Body = ({ Role }) => {
  const email = useSelector((state) => state.email);
  const company = useSelector((state) => state.company);
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:999px)");
  const [firstName, setFirstName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState();

  const [lastName, setLastName] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [tagline, setTagline] = useState("");
  const [agree, setAgree] = useState(false);
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const goBack = () => {
    navigate(-1);
  };

  const setIds = async (uniqueId) => {
    dispatch(setId({ uniqueId: uniqueId }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName) {
      toast.error("Please Enter First Name", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!lastName) {
      toast.error("Please Enter Last Name", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!jobTitle) {
      toast.error("Please Enter Job title", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!phone) {
      toast.error("Please Enter Phone No.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!country) {
      toast.error("Please Select Country", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (Role === "Recruiter" || Role === "Representative") {
      if (!selectedFile) {
        toast.error("Please upload profile photo", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
    }

    if (Role === "Recruiter") {
      if (!tagline) {
        toast.error("Please write Tagline", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
    }

    if (!agree) {
      toast.error("Please verify Terms of service", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Url = reader.result;

        const payload = {
          firstName,
          lastName,
          jobTitle,
          phone,
          country,
          selectedFile: base64Url,
          tagline,
          Role,
          email,
          company,
        };
        axios
          .post("http://localhost:5000/create/profile/user", payload)
          .then((res) => {
            if (res.data.message === "Created") {
              setIds(res.data.savedUser.uniqueId);
              navigate("/guidelines");
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
        reader.abort();
      };

      reader.readAsDataURL(selectedFile);
    } else {
      const payload = {
        firstName,
        lastName,
        jobTitle,
        phone,
        country,
        selectedFile,
        tagline,
        Role,
        company,
      };
      axios
        .post("http://localhost:5000/create/profile/user", payload)
        .then((res) => {
          if (res.data.message === "Created") {
            setIds(res.data.savedUser.uniqueId);
            navigate("/guidelines");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

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
  //   useEffect(() => {
  //     if (!email) {
  //       navigate("/register/organization");
  //     }
  //   }, []);

  return (
    <>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="row d-flex">
          <h2 style={{ fontSize: "40px" }}>Create Profile</h2>
        </div>
      </div>
      <div className="mt-5 d-flex">
        <div className="col-md-6 col-12" style={{ maxWidth: "567px" }}>
          <div className="row">
            <div>
              <p className="formtext">First Name *</p>

              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="forminput col-md-12 col-12 mt-2"
              />
            </div>
            <div>
              <p className="formtext mt-2">Last Name *</p>

              <input
                value={lastName}
                placeholder=""
                onChange={(e) => setLastName(e.target.value)}
                className="forminput col-md-12 col-12 mt-2"
              />
            </div>
            <div>
              <p className="formtext mt-2">Job Title</p>

              <input
                value={jobTitle}
                placeholder=""
                onChange={(e) => setJobTitle(e.target.value)}
                className="forminput col-md-12 col-12 mt-2"
              />
            </div>
            <div>
              <p className="formtext mt-2">Phone Number</p>

              <input
                value={phone}
                placeholder=""
                onChange={(e) => setPhone(e.target.value)}
                className="forminput col-md-12 col-12 mt-2"
              />
            </div>
            <div>
              <p className="formtext mt-2">Country *</p>
              <Location
                setCountry={setCountry}
                setLocation={setLocation}
                location={location}
                country={country}
              />
            </div>
            {Role !== "Team" && (
              <>
                <div>
                  <p className="formtext mt-2">Profile Photo </p>
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
                {Role !== "Representative" && (
                  <>
                    {" "}
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
                    </div>{" "}
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
                        Use your tagline to briefly describe what your role is.
                        This can be changed later
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
                  </>
                )}
              </>
            )}
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
              <div
                className=" m-5 mt-4 mb-0 d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div className="profilephoto" style={{ justifyContent: "end" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="116"
                    height="116"
                    viewBox="0 0 116 116"
                    fill="none"
                  >
                    <rect
                      width="115.95"
                      height="115.95"
                      rx="57.975"
                      fill="#FFF5F6"
                    />
                    {selectedFile && (
                      <>
                        <image
                          href={URL.createObjectURL(selectedFile)}
                          x="0"
                          y="0"
                          width="100%"
                          height="100%"
                          clipPath="url(#rounded-clip)"
                        />
                        <defs>
                          <clipPath id="rounded-clip">
                            <rect width="100%" height="100%" rx="57.975" />
                          </clipPath>
                        </defs>{" "}
                      </>
                    )}
                  </svg>
                </div>{" "}
                <img src={logo} alt="logo image" width="45px" height="45px" />
              </div>
              <p className="profileName m-5 mt-3 mb-0">
                {firstName ? firstName : "John"} {lastName ? lastName : "Smith"}
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
        >
          Continue
        </button>
      </div>
    </>
  );
};
export default Body;
