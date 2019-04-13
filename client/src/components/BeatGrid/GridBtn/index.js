import React, {Component} from "react"
import "./GridBtn.css"

class GridBtn extends Component{
state={
  bgColor: "black",
  active: false
};
  
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
    return (
        <button
            style = {{background:this.state.bgColor}}
            onClick={this.changeColor}
            >
        </button>
    )
}
}


export default GridBtn