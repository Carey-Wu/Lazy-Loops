import React from "react";
import "./style.css";

const KeyboardButton = props => {
    return <button className="btn btn-secondary btn-outline-success dashBtn keyboard" onClick={props.addKeyboard}>Keyboard</button>
  }

export default KeyboardButton;
