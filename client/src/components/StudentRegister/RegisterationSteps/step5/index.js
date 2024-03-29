import React from "react";
import "./style.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import logo1 from "../../../../assets/images/icons/airplane.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GoCheckCircleFill } from "react-icons/go";
import { CiSquarePlus } from "react-icons/ci";
import { IoMdKeypad } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import Slider from "react-slick";
import avatar1 from "../../../../assets/images/avatar/man.png";
import avatar2 from "../../../../assets/images/avatar/profile.png";
import avatar3 from "../../../../assets/images/avatar/woman (1).png";
import avatar4 from "../../../../assets/images/avatar/woman.png";
function Step5({ onEnterPress }) {
  const [iconSelected, setIconSelected] = useState(false);
  const [secondIconSelected, setSecondIconSelected] = useState(false);
  const [thirdIconSelected, setThirdIconSelected] = useState(false);
  const [fouthIconSelected, setFourthIconSelected] = useState(false);
  const [fifthIconSelected, setFifthIconSelected] = useState(false);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="Next_arrow" onClick={onClick}>
        <MdKeyboardArrowRight size={24} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="Prev_arrow" onClick={onClick}>
        <MdKeyboardArrowLeft size={24} />
      </div>
    );
  }

  const handleIconClick = () => {
    setIconSelected(!iconSelected);
  };

  const renderIcon = () => {
    return iconSelected ? (
      <GoCheckCircleFill size={25} className="colorMark" />
    ) : (
      <CiSquarePlus size={25} />
    );
  };

  const handleSecondIconClick = () => {
    setSecondIconSelected(!secondIconSelected);
  };

  const renderSecondIcon = () => {
    return secondIconSelected ? (
      <GoCheckCircleFill size={25} className="colorMark" />
    ) : (
      <CiSquarePlus size={25} />
    );
  };

  const handleThirdIconClick = () => {
    setThirdIconSelected(!thirdIconSelected);
  };

  const renderThirdIcon = () => {
    return thirdIconSelected ? (
      <GoCheckCircleFill size={25} className="colorMark" />
    ) : (
      <CiSquarePlus size={25} />
    );
  };

  const handleFourthIconClick = () => {
    setFourthIconSelected(!fouthIconSelected);
  };

  const renderFourthIcon = () => {
    return fouthIconSelected ? (
      <GoCheckCircleFill size={25} className="colorMark" />
    ) : (
      <CiSquarePlus size={25} />
    );
  };

  const handleFifthIconClick = () => {
    setFifthIconSelected(!fifthIconSelected);
  };

  const renderFifthIcon = () => {
    return fifthIconSelected ? (
      <GoCheckCircleFill size={25} className="colorMark" />
    ) : (
      <CiSquarePlus size={25} />
    );
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 1,
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
  return (
    <motion.div
      id="Step5Kd49"
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
          <h3>/join some groups</h3>
        </div>

        <div className="LogoSlides">
          <Slider {...settings}>
            <div className="card_wrapper">
              <div className="card boxShadow">
                <div className="Join_mark">
                  <div className="TypeLogo">
                    <img src={logo1} alt="" />
                  </div>
                  <div className="TypeMark" onClick={handleIconClick}>
                    {renderIcon()}
                  </div>
                </div>

                <div className="card_title">
                  <h4>MMB (McKinsey / BCG / Bain) </h4>
                </div>
                <div className="card_details">
                  <p>
                    Within the exercises, we design a room in a Scandinavian
                    style.
                  </p>
                </div>
                <div className="card_timing">
                  <div className="cart_item">
                    <div className="Time_item">
                      <IoMdKeypad size={12} />
                      <p>Task Practice</p>
                    </div>
                  </div>
                  <div className="cart_item justify-content-between">
                    <div className="Time_item">
                      <MdAccessTime size={12} />
                      <p>Date: 01.07. 2020</p>
                    </div>
                    <div className="groupImg">
                      <img src={avatar1} alt="" />
                      <img src={avatar2} alt="" />
                      <img src={avatar3} alt="" />
                      <img src={avatar4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper">
              <div className="card">
                <div className="Join_mark">
                  <div className="TypeLogo">
                    <img src={logo1} alt="" />
                  </div>
                  <div className="TypeMark" onClick={handleSecondIconClick}>
                    {renderSecondIcon()}
                  </div>
                </div>

                <div className="card_title">
                  <h4>MMB (McKinsey / BCG / Bain) </h4>
                </div>
                <div className="card_details">
                  <p>
                    Within the exercises, we design a room in a Scandinavian
                    style.
                  </p>
                </div>
                <div className="card_timing">
                  <div className="cart_item gapCs-3">
                    <div className="Time_item">
                      <IoMdKeypad size={12} />
                      <p>Task Practice</p>
                    </div>
                    <div className="groupImg">
                      <img src={avatar1} alt="" />
                      <img src={avatar2} alt="" />
                      <img src={avatar3} alt="" />
                      <img src={avatar4} alt="" />
                    </div>
                  </div>
                  <div className="cart_item justify-content-between">
                    <div className="Time_item">
                      <MdAccessTime size={12} />
                      <p>Date: 01.07. 2020</p>
                    </div>
                    <div className="groupImg">
                      <img src={avatar1} alt="" />
                      <img src={avatar2} alt="" />
                      <img src={avatar3} alt="" />
                      <img src={avatar4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper">
              <div className="card">
                <div className="Join_mark">
                  <div className="TypeLogo">
                    <img src={logo1} alt="" />
                  </div>
                  <div className="TypeMark" onClick={handleThirdIconClick}>
                    {renderThirdIcon()}
                  </div>
                </div>

                <div className="card_title">
                  <h4>MMB (McKinsey / BCG / Bain) </h4>
                </div>
                <div className="card_details">
                  <p>
                    Within the exercises, we design a room in a Scandinavian
                    style.
                  </p>
                </div>
                <div className="card_timing">
                  <div className="cart_item">
                    <div className="Time_item">
                      <IoMdKeypad size={12} />
                      <p>Task Practice</p>
                    </div>
                  </div>
                  <div className="cart_item justify-content-between">
                    <div className="Time_item">
                      <MdAccessTime size={12} />
                      <p>Date: 01.07. 2020</p>
                    </div>
                    <div className="groupImg">
                      <img src={avatar1} alt="" />
                      <img src={avatar2} alt="" />
                      <img src={avatar3} alt="" />
                      <img src={avatar4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper">
              <div className="card">
                <div className="Join_mark">
                  <div className="TypeLogo">
                    <img src={logo1} alt="" />
                  </div>
                  <div className="TypeMark" onClick={handleFourthIconClick}>
                    {renderFourthIcon()}
                  </div>
                </div>

                <div className="card_title">
                  <h4>MMB (McKinsey / BCG / Bain) </h4>
                </div>
                <div className="card_details">
                  <p>
                    Within the exercises, we design a room in a Scandinavian
                    style.
                  </p>
                </div>
                <div className="card_timing">
                  <div className="cart_item">
                    <div className="Time_item">
                      <IoMdKeypad size={12} />
                      <p>Task Practice</p>
                    </div>
                  </div>
                  <div className="cart_item justify-content-between">
                    <div className="Time_item">
                      <MdAccessTime size={12} />
                      <p>Date: 01.07. 2020</p>
                    </div>
                    <div className="groupImg">
                      <img src={avatar1} alt="" />
                      <img src={avatar2} alt="" />
                      <img src={avatar3} alt="" />
                      <img src={avatar4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper">
              <div className="card">
                <div className="Join_mark">
                  <div className="TypeLogo">
                    <img src={logo1} alt="" />
                  </div>
                  <div className="TypeMark" onClick={handleFifthIconClick}>
                    {renderFifthIcon()}
                  </div>
                </div>

                <div className="card_title">
                  <h4>MMB (McKinsey / BCG / Bain) </h4>
                </div>
                <div className="card_details">
                  <p>
                    Within the exercises, we design a room in a Scandinavian
                    style.
                  </p>
                </div>
                <div className="card_timing">
                  <div className="cart_item">
                    <div className="Time_item">
                      <IoMdKeypad size={12} />
                      <p>Task Practice</p>
                    </div>
                  </div>
                  <div className="cart_item justify-content-between">
                    <div className="Time_item">
                      <MdAccessTime size={12} />
                      <p>Date: 01.07. 2020</p>
                    </div>
                    <div className="groupImg">
                      <img src={avatar1} alt="" />
                      <img src={avatar2} alt="" />
                      <img src={avatar3} alt="" />
                      <img src={avatar4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </motion.div>
  );
}

export default Step5;
