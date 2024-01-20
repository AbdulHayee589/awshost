import { useMediaQuery } from "@mui/material";
import "./footer.css";
const Footer = () => {
  const isNonMobile = useMediaQuery("(min-width:500px)");
  return (
    <>
      <div
        className="footer mt-5 d-flex"
        style={{ justifyContent: "space-between" }}
      >
        {isNonMobile && (
          <div className="left">
            <p className="footertext">&#169; All right reserved</p>
          </div>
        )}
        <div className="right d-flex" style={{ gap: "15px" }}>
          <p className="footertext">Privacy Policy</p>
          <p className="footertext">Terms of Service</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
