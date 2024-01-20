import NavBar from "../../layouts/components/Navbar/sent";
import PrimaryFooter from "../../layouts/components/Footer/PrimaryFooter";

import Find from "../../components/Company/Find/FindCompany";
const FindCompany = () => {
  return (
    <div className="banner_wrapperad">
      <div className="m-5 mt-0 mb-0">
        <NavBar />
      </div>
      <Find />
      <PrimaryFooter />
    </div>
  );
};
export default FindCompany;
