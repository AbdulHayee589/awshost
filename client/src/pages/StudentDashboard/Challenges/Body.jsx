import "./body.css";
import Automotive from "../../../assets/images/icons/Automotive.png";
import Brand from "../../../assets/images/icons/Brand.png";
import Consulting from "../../../assets/images/icons/Consulting.png";
import Economics from "../../../assets/images/icons/Economics.png";
import Emerging from "../../../assets/images/icons/Emerging.png";
import Fashion from "../../../assets/images/icons/Fashion.png";
import Finance from "../../../assets/images/icons/Finance.png";
import Government from "../../../assets/images/icons/Government.png";
import Graduate from "../../../assets/images/icons/Graduate.png";
import Law from "../../../assets/images/icons/Law.png";
import Pharma from "../../../assets/images/icons/Pharma.png";
import Startup from "../../../assets/images/icons/Startup.png";
import Supply from "../../../assets/images/icons/Supply.png";
import Technology from "../../../assets/images/icons/Technology.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Right from "./right";
import { setPreview } from "../../../state";
const Body = ({ isNonMobile }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [selectedItem, setSelectedItem] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [selectedChallenge, setSelectedChallenge] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      setLoading(true);
      axios
        .post("http://localhost:5000/getchallenges", {
          selectedItem: user.selectedItem,
        })
        .then((res) => {
          console.log(res.data);
          setChallenges(res.data.challenges);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  const [hoveredChallenge, setHoveredChallenge] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredChallenge(index);
  };

  const handleMouseLeave = () => {
    setHoveredChallenge(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedItem && selectedItem.length > 0) {
          setLoading(true);
          const res = await axios.post("http://localhost:5000/getchallenges", {
            selectedItem: selectedItem,
          });
          console.log(res.data);
          setChallenges(res.data.challenges);
          setLoading(false);
        } else {
        }
      } catch (error) {
        // Handle errors
        console.error(error.message);
      }
    };

    fetchData();
  }, [selectedItem]);

  const items = [
    {
      id: "Brand Management",
      icon: Brand,
      text: "Brand Management",
      select: false,
    },
    { id: "Finance", icon: Finance, text: "Finance", select: false },
    { id: "Consulting", icon: Consulting, text: "Consulting", select: false },
    { id: "Economics", icon: Economics, text: "Economics", select: false },
    { id: "Law", icon: Law, text: "Law", select: false },
    { id: "Fashion", icon: Fashion, text: "Fashion", select: false },
    {
      id: "Emerging Markets",
      icon: Emerging,
      text: "Emerging Markets",
      select: false,
    },
    { id: "Supply Chain", icon: Supply, text: "Supply Chain", select: false },
    { id: "Pharma", icon: Pharma, text: "Pharma", select: false },
    { id: "Technology", icon: Technology, text: "Technology", select: false },
    { id: "Government", icon: Government, text: "Government", select: false },
    {
      id: "Graduate Studies / MBA",
      icon: Graduate,
      text: "Graduate Studies / MBA",
      select: false,
    },
    { id: "Start-Up", icon: Startup, text: "Start-Up", select: false },
    { id: "Automotive", icon: Automotive, text: "Automotive", select: false },
  ];
  const [InterestItemsList, setInterestItem] = useState([...items]);

  const selectItem = async (item, i) => {
    let itemId = item.id;
    let updatedItem = [...InterestItemsList];

    if (updatedItem[i]?.select) {
      // If the item is already selected, unselect it
      updatedItem[i].select = false;
      let newSelectedItems = selectedItem.filter(
        (selected) => selected.id !== itemId
      );
      setSelectedItem(newSelectedItems);
    } else {
      // If the item is not selected, select it
      updatedItem[i].select = true;
      setSelectedItem((prev) => [...prev, item]);
    }

    setInterestItem(updatedItem);
  };
  const maxLines = 3;
  const getClampedText = (text, maxLines) => {
    const lineHeight = 1.2; // Adjust this value based on your line height
    const maxHeight = maxLines * lineHeight;

    return {
      maxHeight: `${maxHeight}em`,
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: maxLines,
    };
  };

  return (
    <div>
      <div className="p-4 row ">
        <div className="col-md-9">
          <p className="wheredoyou">Where do you see yourself?</p>
          <div
            className="tags-container mt-2"
            style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
          >
            {InterestItemsList.map((item, index) => (
              <div
                className={`tags ${item.select ? "selected" : ""}`}
                key={index}
                onClick={async () => {
                  selectItem(item, index);
                }}
              >
                {item.icon && <img src={item.icon} alt="icon" />}
                <p
                  className="itemstexts"
                  style={item.select ? { color: "white" } : {}}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex-wrap d-flex" style={{ gap: "10px" }}>
            {challenges && challenges.length > 0 ? (
              challenges.map((challe, index) => (
                <div
                  className="main-card-container"
                  key={challe.id}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* sub container */}
                  <div className="grey-card-container">
                    {/* bg img */}
                    <div
                      className="bg"
                      style={isNonMobile ? {} : { display: "none" }}
                    >
                      <img
                        src={JSON.parse(challe.company).img}
                        alt="card-bg"
                        className="card-logo"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <img
                      src={`http://localhost:5000${challe.selectedFile}`}
                      alt="challenge image"
                      height="166px"
                      style={{
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    />
                    {/* task/ hours */}
                    <p className="card-task-p mt-3">
                      {challe.alltask.length}{" "}
                      {challe.alltask.length > 1 ? "Tasks" : "Task"}
                      {" / "}
                      {challe.duration} mins
                    </p>
                    {/* title heading */}
                    <h2 className="title-heading">
                      {challe.title} <br />
                    </h2>
                    {/* sub title */}
                    <p className="card-sub-heading">
                      {JSON.parse(challe.company).title}
                    </p>

                    {hoveredChallenge === index && (
                      <p
                        className={`descriptiontask mt-0 mb-0 m-3`}
                        style={getClampedText(challe.description, maxLines)}
                        dangerouslySetInnerHTML={{
                          __html: challe.description,
                        }}
                      />
                    )}
                  </div>
                  {/* card footer*/}
                  <div className="card-footer">
                    {/* FT active */}
                    <div className="ft-active">
                      <div className="green"></div>
                      <b className="ft-active">FT Active</b>
                    </div>
                    {/* detail button */}
                    <button
                      className="continuebutton"
                      onClick={() => {
                        dispatch(setPreview({ preview: challe }));
                        navigate("/challenge");
                      }}
                    >
                      Start
                    </button>{" "}
                  </div>
                </div>
              ))
            ) : (
              <div>
                {loading ? (
                  <p>Fetching Challenges...</p>
                ) : (
                  <p>No Challenges Found for your Interests</p>
                )}
              </div>
            )}
          </div>
        </div>
        {isNonMobile && <Right items={items} />}
      </div>
    </div>
  );
};
export default Body;
