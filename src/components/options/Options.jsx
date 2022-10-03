import React from "react";
import "./OptionsStyle.css";

const Options = () => {
  return (
    <div name="options" className="options">
      <div className="container">
        <div className="top">
          <h1>Option</h1>
        </div>
        <div className="bottom">
          <button className="btn btn_dark">Drive</button>
          <button className="btn">Ride</button>
        </div>
      </div>
    </div>
  );
};

export default Options;
