import information from "../../../assets/images/icons/information.png";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import {
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="row d-flex">
          <h2 style={{ fontSize: "40px" }}>Create Company</h2>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Public Sans",
              color: "#1D2939",
            }}
          >
            Create events for students around the globe and attract talent.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
