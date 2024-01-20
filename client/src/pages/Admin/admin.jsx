import { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [record, setRecord] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/requests")
      .then((res) => {
        setRecord(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleAccept = (rec) => {
    axios
      .post("http://localhost:5000/requests/accept", rec)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleReject = (rec) => {
    axios
      .post("http://localhost:5000/requests/reject", rec)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleAddCompany = () => {
    axios
      .post("http://localhost:5000/add/company", {
        name,
        location,
        image,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <h1 className="m-5">ADMIN</h1>
        <div className="container">
          <table className="table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>University</th>
                <th>Email</th>
                <th>Accept/Reject</th>
              </tr>
            </thead>
            <tbody>
              {record.map((rec, index) => (
                <tr key={index}>
                  <td>{rec._id}</td>
                  <td>
                    {rec.firstName} {rec.LastName}
                  </td>
                  <td>{rec.uni}</td>
                  <td>{rec.EmailAddress}</td>

                  <td>
                    <button
                      className="btn btn-primary  m-2"
                      onClick={() => handleAccept(rec)}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-danger  m-2"
                      onClick={() => {
                        handleReject(rec);
                      }}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className="container">
        <h2>ADD COMPANY</h2>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        {/* //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bcg.com%2Fbcg%2Flogo&psig=AOvVaw2tqIa8E46B2EdM3Q_ysUeW&ust=1702926207723000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJj159OUl4MDFQAAAAAdAAAAABAE */}
        <button className="btn btn-primary" onClick={() => handleAddCompany()}>
          ADD COMPANY
        </button>
      </div>
    </>
  );
};

export default Admin;
