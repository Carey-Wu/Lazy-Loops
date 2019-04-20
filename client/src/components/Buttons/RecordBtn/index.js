import React from "react";
import "./style.css";

  const RecordButton = props => {
    return <button className="btn btn-secondary btn-outline-success dashBtn record" onClick={props.record}>Record</button>
  }
  
  export default RecordButton;
