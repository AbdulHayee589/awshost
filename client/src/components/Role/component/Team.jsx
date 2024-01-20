import video from "../../../assets/images/icons/video.png";
import "./recruiter.css";
const Team = () => {
  return (
    <>
      <div className="d-flex" style={{ gap: "50px" }}>
        <div className="container">
          <div className="row ">
            <div className="col-md-5">
              <img
                className="rolevideo img-fluid"
                src={video}
                alt="sample video"
              />
            </div>
            <div className="col-md-4">
              <p className="belowheading">Recruiter</p>
              <p className="belowtext">
                As a recruiter you create your own profile on varyance.
              </p>
              <div>
                <p className="belowsmallheading mt-3">Communication Options:</p>
                <ol style={{ padding: 0, margin: 0, paddingLeft: "17px" }}>
                  <li className="belowtext">
                    Students can message you directly
                  </li>
                  <li className="belowtext">
                    Students can only respond to your message / bulk message
                  </li>
                </ol>
              </div>

              <div>
                <p className="belowsmallheading mt-3">Post Options:</p>
                <ol style={{ padding: 0, margin: 0, paddingLeft: "17px" }}>
                  <li className="belowtext">You can post with your profile</li>
                  <li className="belowtext">
                    You can post via company profile
                  </li>
                </ol>
              </div>
              <div>
                <p className="belowsmallheading mt-3">Tools:</p>

                <p className="belowtext">Access to all tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
