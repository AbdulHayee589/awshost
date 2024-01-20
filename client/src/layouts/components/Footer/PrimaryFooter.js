import React from "react";
import "./styles.css";
function PrimaryFooter() {
  return (
    <div className="d-flex footer" style={{ justifyContent: "end" }}>
      <button className="btn buttons-footer">Privacy Policy</button>
      <button className="btn buttons-footer">Terms of Service</button>
    </div>
  );
}

export default PrimaryFooter;
