import { useEffect, useState } from "react";
import search from "../../../assets/images/icons/search.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setEmail } from "../../../state";
import { useDispatch } from "react-redux";
import google from "../../../assets/images/logosCOmpany/google.png";
import "./company.css";
import { setCompany as set } from "../../../state";
const Find = () => {
  const { uniqueId } = useParams();
  const [company, setCompany] = useState("");
  const [text, setText] = useState("");
  const [texterr, setTextErr] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSelect = (id) => {
    dispatch(set({ company: id }));
    navigate("/create/company/role");
  };
  useEffect(() => {
    axios
      .post("http://localhost:5000/register/organization/find", { uniqueId })
      .then((res) => {
        if (res.data === "null") {
          navigate("/register/organization");
        } else {
          dispatch(setEmail({ email: res.data.email }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (text) {
      setTextErr(false);
      axios
        .post("http://localhost:5000/get/companies", { text })
        .then((res) => {
          setCompany(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setTextErr(true);
    }
  };
  return (
    <div
      className="container d-flex"
      style={{
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <form onSubmit={(e) => handleSearch(e)}>
        <div
          className="d-flex"
          style={{
            justifyContent: "center",
            marginTop: "-100px",
          }}
        >
          <div className="row">
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <img src={search} alt="email image" width="56px" height="56px" />
            </div>
            <h2 className="text-center mt-3">Find your company</h2>
            <p
              className="text-center mt-3"
              style={{
                color: "#475467",
                fontFamily: "Public sans",
                fontSize: "16px",
              }}
            >
              Welcome to varyance. In this step you onboard your company.
              <br />
            </p>
            <div
              className="d-flex mt-3"
              style={{ justifyContent: "center", height: "3rem" }}
            >
              <input
                value={text}
                placeholder="Company name"
                className={`border border-1 rounded-3 col-md-4 col-12 p-3 ${
                  texterr ? "border-danger" : ""
                }`}
                style={{ color: "#667085", fontFamily: "Public Sans" }}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </div>

            {company !== "" && (
              <div className="mt-3 d-flex" style={{ justifyContent: "center" }}>
                <div
                  className="companyCard scrollbaredit"
                  style={{
                    maxWidth: "600px",
                    maxHeight: "40vh",
                    overflow: "auto",
                  }}
                >
                  {company.length === 0 && (
                    <div className="d-flex innercard p-4">
                      <h5 className="noresult">No Results</h5>
                      <button
                        className="cardbutton"
                        style={{ fontFamily: "Public Sans", fontWeight: "700" }}
                        onClick={() => navigate("/create/company")}
                      >
                        Create new company
                      </button>
                    </div>
                  )}

                  {company.length !== 0 &&
                    company.map((com, index) => (
                      <div
                        key={index}
                        className=" mt-2  p-2  rounded-3 d-flex innercard"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div>
                          <img
                            src={google}
                            alt="company image"
                            height="64px"
                            width="64px"
                            className="companyimage border border-1 rounded-3 p-3"
                          />
                        </div>
                        <div className="col-md-8 col-8">
                          <div
                            className="row m-3"
                            style={{
                              fontFamily: "Public Sans",
                              fontWeight: "700",
                              fontSize: "16px",
                            }}
                          >
                            {" "}
                            {com.title}
                          </div>
                          <div
                            className="row m-3"
                            style={{
                              fontFamily: "Public Sans",
                              fontWeight: "600",
                              fontSize: "14px",
                              color: "#8083A3",
                            }}
                          >
                            {" "}
                            {com.location}
                          </div>
                        </div>
                        <button
                          className="btn btn-light selectbutton"
                          onClick={() => handleSelect(com.uniqueId)}
                        >
                          Select
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            )}
            <div
              className="d-flex mt-3"
              style={{ justifyContent: "center", height: "3rem" }}
            >
              <button
                style={{
                  color: "#fff",
                  backgroundColor: "#E31B54",
                  height: "3rem",
                  width: "8rem",
                  fontFamily: "Public Sans",
                }}
                className="rounded-3 col-md-1 border btn "
                onClick={(e) => handleSearch(e)}
                disabled={!text}
              >
                Search
              </button>
            </div>
            <div>
              <p
                className="text-center mt-3"
                style={{ color: "#475467", fontFamily: "Public sans" }}
              >
                Can't find your company?
                <button
                  className="btn"
                  style={{
                    fontWeight: "600", // 600 is usually associated with semi-bold
                    color: "#E31B54",
                    fontFamily: "Inter, sans-serif",
                  }}
                  onClick={() => navigate("/create/company")}
                >
                  Create new company
                </button>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Find;
