import React from "react"
import "./GridBtn.css"



  
function changeColor () {
    this.setState({
      bgColor: 'blue'
    })
  }

function GridBtn() {
    return (
        <button
            style = {{background:"black"}}
            //onClick={this.changeColor}
            >
        </button>
    )
}

export default GridBtn