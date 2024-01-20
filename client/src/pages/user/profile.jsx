import { useEffect } from "react";
import NavBar from "../../layouts/components/Navbar/sent";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Body from "./Body";
import Footer from "../../components/Company/Footer/footer";

const Profile = () => {
  const { Role } = useParams();
  const email = useSelector((state) => state.email);

  const navigate = useNavigate();
  useEffect(() => {
    if (Role) {
      if (
        Role !== "Recruiter" &&
        Role !== "Team" &&
        Role !== "Representative"
      ) {
        navigate("/register/organization");
      }
    }
    if (!email) {
      navigate("/register/organization");
    }
  }, []);
  return (
    <div className="createcompany">
      <div className="container">
        <NavBar />
        <Body Role={Role} />
        <div style={{ position: "relative", bottom: 0 }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Profile;
