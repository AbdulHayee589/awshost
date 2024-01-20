import logo from "../../../assets/images/logo.png";
import information from "../../../assets/images/icons/information.png";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <span />
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="  mb-0 mt-2">
          <img
            src={logo}
            className="Logo_nav"
            width="64px"
            height="64px"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </div>
        <div className=" mb-0 mt-2 d-flex " style={{ justifyContent: "end" }}>
          <button className="btn btn-light contact blueshadow ">
            <img src={information} alt="Alt" className="img-fluid" /> Support
          </button>
        </div>
      </div>
    </>
  );
};
export default NavBar;
