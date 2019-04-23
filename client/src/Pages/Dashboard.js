import React, { Component } from "react";
import LoopsSidebar from "../components/Sidebar";
import FinalGrid from "../components/BeatGrid/FinalGrid";
import Keyboard from "../components/Keyboard";
import BeatGrid2 from "../components/BeatGrid2"


class Dashboard extends Component {

    render() {
        return (
            <div>
                {/* <LoopsSidebar /> */}
                <FinalGrid />
                <Keyboard />
                {/* <BeatGrid2 /> */}
            </div>
        )
    }
}

export default Dashboard;