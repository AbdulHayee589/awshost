import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import {
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <span />
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className=" m-5 ">
          <img
            src={logo}
            className="Logo_nav"
            width="64px"
            height="64px"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </div>
        {isNonMobile ? (
          <div className="m-5 d-flex ">
            <button className="btn contact">About</button>
            <button className="btn col-md-6 contact">Career Center</button>
            <button className="btn btn-light contact shadow col-md-4">
              Contact
            </button>
          </div>
        ) : (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleSidebar}
              className="m-5"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={isSidebarOpen} onClose={closeSidebar}>
              <List>
                <ListItem
                  button
                  onClick={() => {
                    navigate("/");
                    closeSidebar();
                  }}
                >
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    navigate("/about");
                    closeSidebar();
                  }}
                >
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    navigate("/career");
                    closeSidebar();
                  }}
                >
                  <ListItemText primary="Career Center" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    navigate("/contact");
                    closeSidebar();
                  }}
                >
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
