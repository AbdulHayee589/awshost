import "./dashboard.css";
import { useMediaQuery } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const StudentDashboard = () => {
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <div className="d-flex backgrounddashboard">
      {isNonMobile && (
        <div className="col-md-2 pt-2 " style={{ backgroundColor: "#FFF" }}>
          <SideBar user={user} navigate={navigate} />
        </div>
      )}
      <div className="col-md-12 col-12 ">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};
export default StudentDashboard;
