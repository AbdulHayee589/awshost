import Center from "../../components/Company/sent/center";
import PrimaryFooter from "../../layouts/components/Footer/PrimaryFooter";
import NavBar from "../../layouts/components/Navbar/sent";
const EmailPage = () => {
  return (
    <div className="banner_wrapperad">
      <div className="m-5 mt-0 mb-0">
        <NavBar />
      </div>
      <Center />

      <PrimaryFooter />
    </div>
  );
};
export default EmailPage;
