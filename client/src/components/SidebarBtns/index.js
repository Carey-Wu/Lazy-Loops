import React from "react";
import "./style.css";

function SidebarBtns() {

    return (
        <div className="container btnContainer">
            <div className="row">
                <button className="btn btn-secondary btn-outline-success dashBtn keyboard">Keyboard</button>
            </div>
            <div className="row">
                <button className="btn btn-secondary btn-outline-success dashBtn beatGridBtn">Beat Grid</button>
            </div>
            <div className="row">
                <button className="btn btn-secondary btn-outline-success dashBtn record">Record</button>
            </div>
            <div className="row">
                <button className="btn btn-secondary btn-outline-success dashBtn save">Save Recording</button>
            </div>
        </div>
    )
}

export default SidebarBtns;