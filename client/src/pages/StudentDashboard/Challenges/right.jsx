const Right = ({ items }) => {
  return (
    <div className="col-md-3 p-3 shadowa" style={{ background: "#FFF" }}>
      {" "}
      <p className="fastTrack "> Fast-Tracks</p>
      <p className="mt-4 belowfast">
        Determining the right business strategy is anything Determining the
        right business strategy is anything determining.
      </p>
      <div className="mt-4">
        {" "}
        <div className={`tags `}>
          {items[2] && <img src={items[2].icon} alt="icon" />}
          <p className="itemstexts" style={{ color: "black" }}>
            {items[2].text} <span className="nextone">FAST TRACK</span>
          </p>
        </div>
        <hr />
        <div className={`tags `}>
          {items[1] && <img src={items[1].icon} alt="icon" />}
          <p className="itemstexts" style={{ color: "black" }}>
            {items[1].text} <span className="nextone">FAST TRACK</span>
          </p>
        </div>
        <hr />
        <div className={`tags `}>
          {items[3] && <img src={items[3].icon} alt="icon" />}
          <p className="itemstexts" style={{ color: "black" }}>
            {items[3].text} <span className="nextone">FAST TRACK</span>
          </p>
        </div>
        <hr />
        <button className="btn seeall"> see all events</button>
      </div>
    </div>
  );
};

export default Right;
