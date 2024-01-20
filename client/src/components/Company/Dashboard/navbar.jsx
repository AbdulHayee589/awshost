import information from "../../../assets/images/icons/information.png";
import logo from "../../../assets/images/logo.png";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
const First = () => {
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const navigate = useNavigate();
  return (
    <div>
      <div className="row d-flex" style={{ justifyContent: "space-between" }}>
        <div className="col-md-3">
          <p className="HeaderText">Challenges</p>
        </div>
      </div>
      <div className="row">
        <p className="headersmalltext">
          Create events for students around the globe and attract talent.
        </p>
      </div>
    </div>
  );
};
export default First;
