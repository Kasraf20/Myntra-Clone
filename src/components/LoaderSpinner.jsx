import React from "react";

export default function LoaderSpinner() {
  return (
    <div className="d-flex justify-content-center spinner">
      <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status"></div>
    </div>
  );
}
