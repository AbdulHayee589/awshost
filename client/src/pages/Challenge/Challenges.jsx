import Second from "../../components/Company/Dashboard/Second";
import First from "../../components/Company/Dashboard/navbar";
import { useDispatch } from "react-redux";
import { setStep } from "../../state";
const Test = () => {
  const dispatch = useDispatch();
  dispatch(setStep({ step: 1 }));
  return (
    <div
      className="col-md-10  p-4"
      style={{ backgroundColor: "#F0F5FE", minHeight: "100vh" }}
    >
      <>
        <First />
        <Second />
      </>
    </div>
  );
};
export default Test;
