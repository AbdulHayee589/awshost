import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdDiamond } from "react-icons/md";
import Automotive from "../../../../assets/images/icons/Automotive.png";
import Brand from "../../../../assets/images/icons/Brand.png";
import Consulting from "../../../../assets/images/icons/Consulting.png";
import Economics from "../../../../assets/images/icons/Economics.png";
import Emerging from "../../../../assets/images/icons/Emerging.png";
import Fashion from "../../../../assets/images/icons/Fashion.png";
import Finance from "../../../../assets/images/icons/Finance.png";
import Government from "../../../../assets/images/icons/Government.png";
import Graduate from "../../../../assets/images/icons/Graduate.png";
import Law from "../../../../assets/images/icons/Law.png";
import Pharma from "../../../../assets/images/icons/Pharma.png";
import Startup from "../../../../assets/images/icons/Startup.png";
import Supply from "../../../../assets/images/icons/Supply.png";
import Technology from "../../../../assets/images/icons/Technology.png";
import Engineering from "../../../../assets/images/icons/Engineering.png";
import Computer from "../../../../assets/images/icons/Computer.png";
import HR from "../../../../assets/images/icons/HR.png";
import Aviation from "../../../../assets/images/icons/Aviation.png";
import setInterest from "../../../../state/index";
import { motion } from "framer-motion";
import "./style.scss";
function Step1({ selectedItem, setSelectedItem, onEnterPress }) {
  useEffect(() => {
    // Save the selected items to local storage whenever it changes
    localStorage.setItem("interests", JSON.stringify(selectedItem));
  }, [selectedItem]);

  function selectItem(item, i) {
    let itemId = item.id;
    let updatedItem = [...InterestItemsList];

    if (updatedItem[i]?.select) {
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

  let Interestitems = [
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
    {
      id: "Engineering",
      icon: Engineering,
      text: "Engineering",
      select: false,
    },
    {
      id: "Computer Science",
      icon: Computer,
      text: "Computer Science",
      select: false,
    },
    {
      id: "HR",
      icon: HR,
      text: "HR",
      select: false,
    },
    {
      id: "Aviation",
      icon: Aviation,
      text: "Aviation",
      select: false,
    },
    { id: "Others", icon: null, text: "Others", select: false },
  ];
  const [InterestItemsList, setInterestItem] = useState([...Interestitems]);

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

  return (
    <motion.div
      id="Step1Ki3"
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
        {/* <div className="backButton">
          <h6>
            <IoIosArrowBack /> {"    "}
            Back
          </h6>
        </div> */}
        <div className="section_title">
          <h3>/what are you interested in?</h3>
        </div>
        {console.log(selectedItem)}
        <div className="interest_wrapper">
          <div className="interest_container">
            {InterestItemsList?.map((item, i) => (
              <motion.div
                className={`interest_Item ${
                  selectedItem.some((selectedIte) => selectedIte.id === item.id)
                    ? "active"
                    : ""
                }`}
                onClick={() => selectItem(item, i)}
                whileTap={{ scale: 0.9 }}
                key={i} // Don't forget to add a unique key prop when mapping over an array
              >
                {item.icon !== null && (
                  <img
                    src={item?.icon}
                    alt={item?.text}
                    className="interest_icon"
                  />
                )}
                <p
                  className={`Interest_text ${
                    selectedItem.some(
                      (selectedIte) => selectedIte.id === item.id
                    )
                      ? "text-white"
                      : ""
                  } `}
                >
                  {item?.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Step1;
