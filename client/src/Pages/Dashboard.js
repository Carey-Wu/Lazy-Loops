import React, { Component } from "react";
import LoopsSidebar from "../components/Sidebar";
import FinalGrid from "../components/BeatGrid/FinalGrid";
import Keyboard from "../components/Keyboard";


class Dashboard extends Component {

    render() {
        return (
            <div>
                {/* <LoopsSidebar /> */}
                <FinalGrid />
                <Keyboard />
            </div>
        )
    }
}

export default Dashboard;