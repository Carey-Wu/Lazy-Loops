import React from "react";
import "./style.css";

  const BeatGridButton = props => {
    return <button className="btn btn-secondary btn-outline-success dashBtn beatGridBtn" onClick={props.addBeatGrid}>Beat Grid</button>
  }
  
  export default BeatGridButton;
