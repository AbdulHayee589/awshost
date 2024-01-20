import Footer from "../../components/Company/Footer/footer";
import Body from "../../components/Company/create/Body";
import Header from "../../components/Company/create/Header";
import NavBar from "../../layouts/components/Navbar/sent";
import "./createcompany.css";
const CreateCompany = () => {
  return (
    <div className="createcompany p-4">
      <div className="container ">
        <NavBar />
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};
export default CreateCompany;
