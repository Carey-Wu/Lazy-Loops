import React from "react"
import GridBtn from "../GridBtn/index"

function GridRow() {
    
    return (
        <div>
            <div className="row">
                <div className="col-md-1">
                    <GridBtn/>
                </div>
                <div className="col-md-1">
                    <GridBtn />
                </div>
                <div className="col-md-1">
                    <GridBtn />
                </div>
                <div className="col-md-1">
                    <GridBtn />
                </div>
                <div className="col-md-1">
                    <GridBtn />
                </div>
                <div className="col-md-1">
                    <GridBtn />
                </div>
                <div className="col-md-1">
                    <GridBtn />
                </div>
                <div className="col-md-1">
                    <GridBtn />
                </div>
            </div>
        </div>
    )
}

export default GridRow