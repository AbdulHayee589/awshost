import logo from "../../assets/images/logo.png";
import flag from "../../assets/images/flags/flagGermany.png";

import "./card.css";

import { useSelector } from "react-redux";
const NameCard = ({ firstName, selectedItem }) => {
  const Uni = useSelector((state) => state.Uni);

  return (
    <div className="col-lg-6 " style={{}}>
      <div className="card_wrapper">
        <div className="card boxShadow testcard">
          <div className="row">
            <div className="col">
              <div className="nameLetter">
                <h2>{firstName?.length ? firstName?.slice(0, 1) : "J"}</h2>
              </div>
            </div>
            <div className="col">
              <div className="CardLogo">
                <img src={logo} />
              </div>
            </div>
          </div>
          <div className="card_details">
            <h3>{firstName ? firstName : "\u00A0"}</h3>
            <p>
              Student at{" "}
              {Uni ? Uni : " EBS Universität für Wirtschaft und Recht"}
            </p>
            <div className="card_moreInfo">
              <div className="countryLogo">
                <div className="imgCountryContainer">
                  <img src={flag} alt="" />
                </div>
                <p className="countryName">Germany</p>
              </div>

              {selectedItem &&
                selectedItem.map((item, index) => (
                  <div key={index} className="interests">
                    <div className="interest_item">
                      <img
                        src={item.icon}
                        alt=""
                        className="Interest_img_icon"
                      />
                      <p className="Interest_text">{item.id}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NameCard;
