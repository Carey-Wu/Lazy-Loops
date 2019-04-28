import React, { Component } from "react";
// import GridRow from "../GridRow/index";
import "./style.css"
import GridBtn from "../GridBtn";
import kickBtn from "../../kickBtn.json"
import snareBtn from "../../snareBtn.json"
import hihatBtn from "../../hihatBtn.json"
import crashBtn from "../../crashBtn.json"

var Kick = require("../Sounds/kick.wav")
var Snare = require("../Sounds/snare.wav")
var Hihat = require("../Sounds/hi-hat.wav")
var Crash = require("../Sounds/crash.wav")
const sounds = [Kick, Snare, Hihat, Crash]


class FinalGrid extends Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            
            kickBtn,
            snareBtn,
            hihatBtn,
            crashBtn,
            
            // bgColor: "black",
            // active: false,
            // playing: false,
            // sound: sounds
        }

    }



    playAudio(src) {
        let audio = new Audio(src)
        audio.play()
    }

    handleBeat = () => {
        this.myRef = React.createRef()


        if (this.state.active === true) {
            console.log("active Check: " + this.state.active)
            this.playAudio(this.sound)

        } else {
            console.log("active check:" + this.state.active)
        }
    }

    currentState = () => {
        const currentState = this.state.active;
        console.log(currentState)
    }



    changeColor = event => {
        const btnID = event.target.id
        console.log(btnID);

        this.setState({
            active: !this.state.active
        })

        if (this.state.active === true) {
            this.setState({
                bgColor: "yellow"
            })
        }
        if (this.state.active === false) {
            this.setState({
                bgColor: "black"
            })
        }
        // const stateID = event.target.state;
        // console.log(stateID);
        // if( this.id = btnID) {
            // if (this.state.active === true){
            //     this.setState({
            //         active: !this.state.active,
            //         bgColor: "black"
            //     })
            //     console.log(this.state.active)
            // }

            // if (this.state.active === false){
            //     this.setState({
            //         active: !this.state.active,
            //         bgColor: "yellow"
            //     })
            //     console.log(this.state.active)
            // }
        

        // console.log(this.state.active)
        //  }

    }
    // if (btnID === this.id) {



    //     const currentColor = this.state.bgColor
    //     this.setState({
    //         active: !currentState,
    //         bgColor: !currentColor
    //     })

    // if (this.state.active === false) {
    //     this.setState({
    //         bgColor: "yellow",
    //         active: true
    //     });
    //     // console.log("active: " + this.state.active)
    // } else {
    //     this.setState({
    //         bgColor: "black",
    //         active: false
    //     });
    //     // console.log("active: " +this.state.active)
    // }
    // }

    // }



    render() {
        return (
            <div>


                <div className="container beatGrid">
                <div >
                        <div className="row">

                            {this.state.kickBtn.map((kickNoise, index) => (
                                <div key={index} id={kickNoise.id}  className="col-md-1">
                                    <GridBtn
                                        sound={sounds[0]}
                                        id={kickNoise.id}
                                        key={index}
                                        bgColor={kickNoise.bgColor}
                                        active={this.active}
                                        playing={kickNoise.playing}
                                        buttonActivate={this.changeColor}
                                        handleBeat={this.handleBeat}
                                    />
                                </div>
                            ))}
                        </div>
                        <br></br>
                    </div>
                    <div >
                        <div className="row">

                            {this.state.snareBtn.map(snareNoise => (
                                <div key={snareNoise.id} id={snareNoise.id} className="col-md-1">
                                    <GridBtn
                                        sound={sounds[1]}
                                        id={snareNoise.id}
                                        key={snareNoise.id}
                                        bgColor={snareNoise.bgColor}
                                        active={snareNoise.active}
                                        playing={snareNoise.playing}
                                        buttonActivate={this.changeColor}
                                        handleBeat={this.handleBeat}
                                    />
                                </div>
                            ))}
                        </div>
                        <br></br>
                    </div>
                    <div >
                        <div className="row">

                            {this.state.hihatBtn.map(hihatNoise => (
                                <div key={hihatNoise.id} id={hihatNoise.id} className="col-md-1">
                                    <GridBtn
                                        sound={sounds[2]}
                                        id={hihatNoise.id}
                                        key={hihatNoise.id}
                                        bgColor={hihatNoise.bgColor}
                                        active={hihatNoise.active}
                                        playing={hihatNoise.playing}
                                        buttonActivate={this.changeColor}
                                        handleBeat={this.handleBeat}
                                    />
                                </div>
                            ))}
                        </div>
                        <br></br>
                    </div>
                    <div >
                        <div className="row">

                            {this.state.crashBtn.map(crashNoise => (
                                <div key={crashNoise.id} id={crashNoise.id} className="col-md-1">
                                    <GridBtn
                                        sound={sounds[3]}
                                        id={crashNoise.id}
                                        key={crashNoise.id}
                                        bgColor={crashNoise.bgColor}
                                        active={crashNoise.active}
                                        playing={crashNoise.playing}
                                        buttonActivate={this.changeColor}
                                        handleBeat={this.handleBeat}
                                    />
                                </div>
                            ))}
                        </div>
                        <br></br>
                    </div>






                    {/* <div >
                        <div className="row">
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[0]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="1" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[0]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="2" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[0]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="3" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[0]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="4" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[0]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="5" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[0]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="6" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[0]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="7" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[0]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="8" active={this.state.active} />
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className="row">
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[1]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="9" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[1]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="10" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[1]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="11" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[1]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="12 active={this.state.active}" />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[1]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="13" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[1]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="14" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[1]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="15" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[1]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="16" active={this.state.active} />
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className="row">
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[2]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="17" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[2]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="18" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[2]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="19" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[2]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="20" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[2]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="21" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[2]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="22" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[2]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="23" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[2]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="24" active={this.state.active} />
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className="row">
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[3]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="25" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[3]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="26" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[3]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="27" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[3]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="28" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[3]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="29" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[3]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="30" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[3]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="31" active={this.state.active} />
                            </div>
                            <div className="col-md-1">
                                <GridBtn buttonActivate={this.changeColor} sound={sounds[3]} colorChange={this.state.bgColor} handleBeat={this.handleBeat} id="32" active={this.state.active} />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default FinalGrid