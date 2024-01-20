import "./styles.scss";
import NavBar from "../../layouts/components/Navbar/CompanyNavbar";
import Inputs from "./field/input";
import PrimaryFooter from "../../layouts/components/Footer/PrimaryFooter";
import { useMediaQuery } from "@mui/material";
const Banner = () => {
  const isNonMobile = useMediaQuery("(min-width:770px)");
  return (
    <div>
      <div className="banner_wrapperad ">
        <div>
          <NavBar />
        </div>
        {isNonMobile && (
          <h1 className="m-5 mt-3" style={{ fontSize: "3rem" }}>
            Sign-up as Employer <br />
            or University
          </h1>
        )}
        {!isNonMobile && (
          <p className="m-5 mt-3" style={{ fontSize: "24px" }}>
            {" "}
            Sign-up as Employer
            <br /> or University
          </p>
        )}
        <div>
          <Inputs />
        </div>

        <PrimaryFooter />
      </div>
    </div>
  );
};
export default Banner;
