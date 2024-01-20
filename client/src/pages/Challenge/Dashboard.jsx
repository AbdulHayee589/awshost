import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../../components/Company/Dashboard/sidebar";
import "./styles.css";

import { useMediaQuery } from "@mui/material";
import Header from "../../components/Company/Dashboard/Header";
const Dashboard = () => {
  const email = useSelector((state) => state.email);
  const isNonMobile = useMediaQuery("(min-width:767px)");
  const [user, setUser] = useState([]);
  const [component, setComponent] = useState("Dashboard");
  const navigate = useNavigate();
  const step = useSelector((state) => state.step);
  const [company, setCompany] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let id;
        const userInfoResponse = await axios.post(
          "http://localhost:5000/getUserInfo",
          { email: email }
        );

        if (userInfoResponse.data.message === "Found") {
          setUser(userInfoResponse.data.user);
          id = userInfoResponse.data.user.company;
        } else {
          navigate("/register/organiser");
          return; // Exit early if user not found
        }

        const companyInfoResponse = await axios.post(
          "http://localhost:5000/getCompanyInfo",
          { id: id }
        );
        setCompany(companyInfoResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [email]);

  return (
    <div className="d-flex">
      {isNonMobile && step !== 5 && (
        <div className="col-md-2 pt-2 " style={{ backgroundColor: "#FFF" }}>
          <SideBar
            user={user}
            company={company}
            setComponent={setComponent}
            component={component}
          />
        </div>
      )}
      <div
        className="col-md-12 col-12 "
        style={
          step === 5 ? {} : { backgroundColor: "#F0F5FE", minHeight: "100vh" }
        }
      >
        {" "}
        {step !== 5 && <Header />}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
