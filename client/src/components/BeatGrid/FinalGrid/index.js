import React from "react";
import GridRow from "../GridRow/index";
import "./style.css"
var Kick = require("../Sounds/kick.wav")
var Snare = require("../Sounds/snare.wav")
var Hihat = require("../Sounds/hi-hat.wav")
var Crash = require("../Sounds/crash.wav")
var sounds = [Kick, Snare, Hihat, Crash]



function FinalGrid() {
    return (

        <div className="container beatGrid">
            <GridRow sound={sounds[0]}/>
            <br></br>
            <GridRow sound={sounds[1]}/>
            <br></br>
            <GridRow sound={sounds[2]}/>
            <br></br>
            <GridRow sound={sounds[3]}/>
        </div>

    )
}

export default FinalGrid