import React from "react"
import "./GridBtn.css"


// class GridBtn extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       bgColor: "black",
//       active: false,
//       playing:false,
//       sound:props.sound
//     }
    
//   }

// playAudio(src){
//   let audio = new Audio(src)
//   audio.play()
// }

// handleBeat = () =>{
//   this.myRef = React.createRef()
  

//   if(this.state.active === true){
//     console.log("active Check: " + this.state.active)
//     this.playAudio(this.state.sound)
   
//   } else{
//     console.log("active check:" + this.state.active)
//   }
// }
  
// changeColor=() => {
//     if(this.state.active===false){
//       this.setState({
//         bgColor: "yellow",
//         active: true
//       });
//       // console.log("active: " + this.state.active)
//     }else{
//     this.setState({
//       bgColor: "black",
//       active: false
//     });
//     // console.log("active: " +this.state.active)
//   }
// }

  const GridBtn = props => {

    return (
      <div>
        <button
            style = {{background:props.bgColor}}
            onClick={props.buttonActivate}
            className = "beatBtn"
            id = {props.id}
            active= {props.active}
            sound= {props.sound}
            >
        </button>
        <button onClick={props.handleBeat}>Active Check</button>
      </div>
    )
}

export default GridBtn