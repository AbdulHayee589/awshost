import virtual from "../../../assets/images/virtual.png";
import fasttrack from "../../../assets/images/fasttrack.png";
import Insights from "../../../assets/images/Insights.png";
const Type = ({ type }) => {
  return (
    <div className="mt-5 pt-5">
      <div className="d-flex" style={{ gap: "50px" }}>
        <div className="container">
          <div className="row ">
            <div className="col-md-6 ">
              <img
                className="rolevideo img-fluid"
                src={
                  (type === "Virtual Experience" && virtual) ||
                  (type === "Fast-Track" && fasttrack) ||
                  (type === "Insights" && Insights)
                }
                alt="sample video"
              />
            </div>
            <div className="col-md-6">
              <p className="belowheading">
                {(type === "Virtual Experience" &&
                  "Virtual Experience Guide") ||
                  (type === "Fast-Track" && "Fast-Track Guide") ||
                  (type === "Insights" && "Insights Guide")}
              </p>
              <p className="belowtext">
                {(type === "Virtual Experience" &&
                  "Create an immersive experience by a point-of-view styledchallenge sequence in which students “walk” through on of your offices to the meeting room in which the instructor  outlines the briefing. ") ||
                  (type === "Fast-Track" &&
                    "Create an assessment-style challenge by asking studentsmultiple-choice questions. This allows students to prove their knowledge and better understand their performance relative to other students.") ||
                  (type === "Insights" &&
                    "Students gain insights by self-assessment style challenges created by your team or current interns or career starters. Students are challenged by tasks such as “write an e-mail to client XYZ” or “prepare a presentation for..” to better understand the daily work routine at your company.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Type;
