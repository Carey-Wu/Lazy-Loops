import React, {Component} from "react"
import GridBtn from "../GridBtn/index"
import classnames from "classnames";
let btnArray = []


class GridRow extends Component {
    constructor(props){
        super(props)
        this.state = {
          bgColor: "black",
          sound: props.sound
        }
      }
      
      playAudio(src){
        let audio = new Audio(src)
        audio.play()
      }
      
    handleBeat = (event) =>{
        this.myRef = React.createRef()
        
      
        if(classnames("col1") === true){
          console.log("active Check: " + "col1")
          this.playAudio(this.state.sound)
         
        } else{
          console.log("active check:" + "not col1")
        }
      }

    
    render(){
    return (
        <div>
            <div className="row">
                <div className="col-md-1 col1">
                    <GridBtn sound={this.state.sound} handleBeat={this.handleBeat}/>
                </div>
                <div className="col-md-1 col2">
                    <GridBtn sound={this.state.sound} handleBeat={this.handleBeat}/>
                </div>
                <div className="col-md-1 col3">
                    <GridBtn sound={this.state.sound} handleBeat={this.handleBeat}/>
                </div>
                <div className="col-md-1 col4">
                    <GridBtn sound={this.state.sound} handleBeat={this.handleBeat}/>
                </div>
                <div className="col-md-1 col5">
                    <GridBtn sound={this.state.sound} handleBeat={this.handleBeat}/>
                </div>
                <div className="col-md-1 col6">
                    <GridBtn sound={this.state.sound} handleBeat={this.handleBeat}/>
                </div>
                <div className="col-md-1 col7">
                    <GridBtn sound={this.state.sound} handleBeat={this.handleBeat}/>
                </div>
                <div className="col-md-1 col8">
                    <GridBtn sound={this.state.sound} handleBeat={this.handleBeat}/>
                </div>
            </div>
        </div>
    )
    }
}

export default GridRow