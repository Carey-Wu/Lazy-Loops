import React from "react"
import GridBtn from "../GridBtn/index"


function GridRow(props) {
    const sound = props.sound
    
    return (
        <div>
            <div className="row">
                <div className="col-md-1">
                    <GridBtn sound={sound}/>
                </div>
                <div className="col-md-1">
                    <GridBtn sound={sound}/>
                </div>
                <div className="col-md-1">
                    <GridBtn sound={sound}/>
                </div>
                <div className="col-md-1">
                    <GridBtn sound={sound}/>
                </div>
                <div className="col-md-1">
                    <GridBtn sound={sound}/>
                </div>
                <div className="col-md-1">
                    <GridBtn sound={sound}/>
                </div>
                <div className="col-md-1">
                    <GridBtn sound={sound}/>
                </div>
                <div className="col-md-1">
                    <GridBtn sound={sound}/>
                </div>
            </div>
        </div>
    )
}

export default GridRow