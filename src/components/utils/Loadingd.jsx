import React from "react";

export const Loadingd = () => {
  return (
    
      <div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "200px" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
   
  );
};
