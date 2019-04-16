import React from "react";
import "./style.css";

function Landing(){

return (
<main>
    <div id="hero">

        <div className="layer layer-bg" data-type="parallax" data-depth="0.10"></div>
        <div className="layer layer-1" data-type="parallax" data-depth="0.20"></div>

        <div className="layer layer-2" data-type="parallax" data-depth="0.50"></div>
        <div className="layer layer-overlay" data-type="parallax" data-depth="0.70"></div>
        <div className="layer layer-3" data-type="parallax" data-depth="0.75"></div>
        <div className="layer layer-4" data-type="parallax" data-depth="1.00"></div>
    </div>
    <div className="content1">
        <div className="layer layer-bg" data-type="parallax" data-depth="0.10"></div>
        <p>Lazyboi Media Presents...</p>
        <p>LazyLoops</p>
        <p>Make Music - Not War</p>
        <p>Create Waves.</p>
    </div>
    <div className="content">
        <p>Lazyboi Media Presents...</p>
        <p>LazyLoops</p>
        <p>Make Music - Not War</p>
        <p>Create Waves.</p>
    </div>

</main>   
)          
}

export default Landing;

console.log("hi");