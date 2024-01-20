import Header from "./Header";
import { useMediaQuery } from "@mui/material";
import Body from "./Body";
const Challenges = () => {
  const isNonMobile = useMediaQuery("(min-width:767px)");
  return (
    <div className="col-md-10  ">
      <Header isNonMobile={isNonMobile} />
      <div>
        <Body isNonMobile={isNonMobile} />
      </div>
    </div>
  );
};
export default Challenges;
