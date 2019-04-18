import React, {Component} from "react"
import "./GridBtn.css"

class GridBtn extends Component{
state={
  bgColor: "black",
  active: false
};

handleBeat = () =>{
  if(this.state.active === true){
    console.log("active Check: " + this.state.active)
  } else{
    console.log("active check:" + this.state.active)
  }
}
  
changeColor=() => {
    if(this.state.active===false){
      this.setState({
        bgColor: "yellow",
        active: true
      });
      console.log("active: " + this.state.active)
    }else{
    this.setState({
      bgColor: "black",
      active: false
    });
    console.log("active: " +this.state.active)
  }
}



 render(){ 
   const props = this.props
    return (
      <div>
        <button
            style = {{background:this.state.bgColor}}
            onClick={this.changeColor}
            className = "beatBtn"
            >
        </button>
        <button onClick={this.handleBeat}>Active Check</button>
      </div>
    )
}
}


export default GridBtn