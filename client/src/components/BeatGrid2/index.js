import React, {Component} from "react";
import "./css/style.css"

// var Kick = require("../Sounds/kick.wav")
// var Snare = require("../Sounds/snare.wav")
// var Hihat = require("../Sounds/hi-hat.wav")
// var Crash = require("../Sounds/crash.wav")
// var sounds = [Kick, Snare, Hihat, Crash]


class BeatGrid2 extends Component{
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "./app.js";
        script.async = true;
        script.onload = () => this.scriptLoaded();
      
        document.body.appendChild(script);
      }

    render(){
       
          return (
            <div>
                <div class="grid"></div>
                <div class="controls">
                    <button id="clear">Clear</button>
                    <button id="random">Random</button>
                    <button id="export">Export json</button>
                    {/* <a id="download_link" style="display:none"></a> */}
                </div>
            </div>
    
        )
    }
   
}

export default BeatGrid2