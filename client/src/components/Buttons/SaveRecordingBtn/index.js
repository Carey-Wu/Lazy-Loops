import React from "react";
import "./style.css";

  const SaveRecordingButton = props => {
    return <button className="btn btn-secondary btn-outline-success dashBtn save" onClick={props.saveRecording}>Save Recording</button>
  }

  export default SaveRecordingButton;