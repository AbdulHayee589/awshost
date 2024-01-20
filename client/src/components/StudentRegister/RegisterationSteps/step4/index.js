import React, { useEffect } from "react";
import "./style.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import logo1 from "../../../../assets/images/logosCOmpany/bcg.png";
import logo2 from "../../../../assets/images/logosCOmpany/google.png";
import logo3 from "../../../../assets/images/logosCOmpany/lufthansa.png";
import logo4 from "../../../../assets/images/logosCOmpany/bmw.png";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import axios from "axios";
function Step4({ onEnterPress, selectedItem }) {
  const [selectedCards, setSelectedCards] = useState([]);
  const [company, setCompany] = useState("");
  useEffect(() => {
    localStorage.setItem("selectedNetworks", JSON.stringify(selectedCards));
  }, [selectedCards]);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="Next_arrow" onClick={onClick}>
        <MdKeyboardArrowRight size={16} />
      </div>
    );
  }

  useEffect(() => {
    axios
      .post("http://localhost:5000/getRelatedCompany", { selectedItem })
      .then((res) => {
        if (res.data.companies) {
          setCompany(res.data.companies);
        } else if (res.data.message === "no record") {
          setCompany([]);
        } else {
          console.log("err");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="Prev_arrow" onClick={onClick}>
        <MdKeyboardArrowLeft size={16} />
      </div>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCardClick = (index) => {
    const isSelected = selectedCards.includes(index);

    if (isSelected) {
      // If the card is already selected, remove it from the selection
      setSelectedCards((prevSelected) =>
        prevSelected.filter((selected) => selected !== index)
      );
    } else {
      // If the card is not selected, add it to the selection
      setSelectedCards((prevSelected) => [...prevSelected, index]);
    }
  };

  return (
    <motion.div
      id="Step4Kxi39"
      initial={{ opacity: 0.2, scale: 0.2, x: "50%" }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onEnterPress(e);
        }
      }}
    >
      <div className="stepWrapper">
        {/* <div className="backButton" onClick={() => BackSetp()}>
          <h6>
            <IoIosArrowBack /> {"    "}
            Back
          </h6>
        </div> */}
        <div className="section_title">
          <h3>/build your network</h3>
        </div>
        {/* <div className="LogoSlides" style={{ height: "100px" }}>
          <Slider {...settings}>
            {company.length !== 0
              ? company.map((logo, index) => (
                  <div
                    key={index}
                    className={`card_wrapper ${
                      selectedCards.includes(index) ? "selected" : ""
                    }`}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="card">
                      <img
                        src={logo.img}
                        alt="logo"
                        className="Logo_img img-fluid"
                        height="60px"
                      />
                    </div>
                  </div>
                ))
              : company && <p>No Companies with the selected Interests</p>}
          </Slider>
        </div> */}
        <div className="flex-wrap mt-5 p-5">
          {company.length !== 0
            ? company.map((logo, index) => (
                <div
                  key={index}
                  className={` `}
                  onClick={() => handleCardClick(index)}
                  style={{ width: "200px", height: "200px" }}
                >
                  <div className="card">
                    <img
                      src={logo.img}
                      alt="logo"
                      className="Logo_img img-fluid"
                      height="60px"
                    />
                  </div>
                </div>
              ))
            : company && <p>No Companies with the selected Interests</p>}
        </div>
      </div>
    </motion.div>
  );
}

export default Step4;
