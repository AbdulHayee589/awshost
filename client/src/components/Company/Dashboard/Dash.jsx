import { useDispatch } from "react-redux";
import { setStep } from "../../../state";
const Dash = () => {
  const dispatch = useDispatch();
  dispatch(setStep({ step: 1 }));
  return <>COMING SOON</>;
};
export default Dash;
