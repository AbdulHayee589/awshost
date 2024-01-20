import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./styles.scss";
import guideline from "../../assets/images/guideline.png";
import jobcard from "../../assets/images/jobcard.png";
import { useMediaQuery } from "@mui/material";
const Example = () => {
  return (
    <>
      <div className="main-container">
        <HorizontalScrollCarousel />
      </div>

      {/* extra component */}
      {/* <div className="extra-comp">Third Section</div> */}
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-10%"]);
  const isNonMobile = useMediaQuery("(min-width:767px)");
  return (
    <section ref={targetRef} className="hor-scroll">
      <div className="hor-scroll-con">
        <h1 className="scroll-heading">
          Unlock the full potential of <br />
          your <b>future network</b>
        </h1>
        {/* <motion.div style={{ x }} className="motion-div mt-5">
          <div
            className="scroll-img pt-5 p-3 pb-0 position-relative col-md-12"
            style={{ overflow: "hidden" }}
          >
            <p className="section2headings">Students Around the World</p>
            <p className="pt-3 section2text">
              Solve real-world challenges designed by investment banks, law
              firms, consulting firms.
            </p>
            <img
              src={guideline}
              alt="ad"
              className="img-fluid position-absolute bottom-0"
            />
          </div>
          <div
            className=" secondbackground pt-5 p-3 pb-0 position-relative"
            style={{ overflow: "hidden" }}
          >
            <p className="secondSectionHeading">Download the varyance app.</p>
            <p className="pt-3 section2text" style={{ color: "white" }}>
              Build your network on the go and stay connected for updates
              andgroup chats.
            </p>
          </div>
         
          <img src="./rs3.jpg" alt="pic" className="scroll-img" />
          <div className="image-div">
            <img src="./ss1.jpg" alt="pic" className="image-div1" />
            <img src="./ss2.jpg" alt="pic" className="image-div2" />
          </div>
        </motion.div> */}
        <div
          className={`${isNonMobile ? "d-flex" : ""}`}
          style={{ gap: "25px" }}
        >
          <div
            className="scroll-img pt-5 p-3 pb-0 position-relative col-md-3"
            style={{ overflow: "hidden" }}
          >
            <p className="section2headings">Students Around the World</p>
            <p className="pt-3 section2text">
              Solve real-world challenges designed by investment banks, law
              firms, consulting firms.
            </p>
            <img
              src={guideline}
              alt="ad"
              className="img-fluid position-absolute bottom-0"
            />
          </div>
          <div
            className=" secondbackground pt-5 p-3 pb-0 col-md-3"
            style={{ overflow: "hidden" }}
          >
            <p className="secondSectionHeading">Download the varyance app.</p>
            <p className="pt-3 section2text" style={{ color: "white" }}>
              Build your network on the go and stay connected for updates
              andgroup chats.
            </p>
          </div>
          <div
            className=" thirdbackground p-5  col-md-3"
            style={{ overflow: "hidden" }}
          >
            <p className="section2headings">Find your next job.</p>
            <div className="d-flex">
              <img src={jobcard} alt="fas" className="mt-5" />
            </div>
            <p className="section2text">
              Build your network on the go and stay connected for updates and.
            </p>
            <p className="themetext">Download App.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Example;
