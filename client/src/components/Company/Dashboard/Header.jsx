import logo from "../../../assets/images/logo.png";
import information from "../../../assets/images/icons/information.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:767px)");

  return (
    <div
      className="col-md-12 col-11 d-flex"
      style={{
        justifyContent: isNonMobile ? "end" : "space-between",
        gap: "10px",
        position: "absolute",
        top: 10,
        right: 10,
      }}
    >
      {!isNonMobile && (
        <div>
          <MenuIcon />
        </div>
      )}
      <div className="d-flex" style={{ gap: "10px" }}>
        <button className="btn headerbutton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
              stroke="#101828"
              stroke-width="1.70603"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="btn headerbutton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.1066 15.48C20.6623 15.1 20.4065 14.5446 20.4066 13.96V9.14C20.4066 5.19 16.8266 2 12.4066 2C7.98657 2 4.40657 5.19 4.40657 9.14V13.96C4.40661 14.5446 4.15084 15.1 3.70657 15.48C2.19657 16.83 3.26657 19.13 5.40657 19.13H9.20657C9.69141 20.4804 10.9718 21.3811 12.4066 21.3811C13.8414 21.3811 15.1217 20.4804 15.6066 19.13H19.4066C21.5466 19.13 22.6166 16.83 21.1066 15.48ZM12.4069 19.8799C11.8117 19.8776 11.2508 19.6009 10.8869 19.1299H13.8869C13.5346 19.5935 12.9891 19.8699 12.4069 19.8799ZM19.4167 17.6299C19.7802 17.6629 20.1264 17.4679 20.2867 17.1399C20.3645 16.9424 20.2937 16.7173 20.1167 16.5999C19.3632 15.9278 18.9276 14.9695 18.9167 13.9599V9.13994C18.9167 6.02994 15.9967 3.49994 12.4167 3.49994C8.83668 3.49994 5.91668 6.02994 5.91668 9.13994V13.9599C5.90571 14.9695 5.47012 15.9278 4.71668 16.5999C4.536 16.7143 4.46076 16.94 4.53668 17.1399C4.69698 17.4679 5.04312 17.6629 5.40668 17.6299H19.4167Z"
              fill="#101828"
            />
          </svg>
        </button>
        <button className="btn btn-light contact blueshadow ">
          <img src={information} alt="Alt" className="img-fluid" /> Support
        </button>

        <img
          src={logo}
          className="Logo_nav"
          width="64px"
          height="64px"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};
export default Header;
