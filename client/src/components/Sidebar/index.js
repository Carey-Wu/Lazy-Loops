import React from "react";
import Sidebar from "react-sidebar";
import SidebarBtns from "../SidebarBtns";
import FinalGrid from "../BeatGrid/FinalGrid";
import Keyboard from "../Keyboard";
import "./style.css"

const mql = window.matchMedia(`(min-width: 800px)`);

class LoopsSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }


  render() {
    return (
      <div>
      <Sidebar className="backdrop"
        sidebar={<div className="sideBar"><b><SidebarBtns /></b></div>}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
      <div className="musicComponents">
        <b>
          
          <br></br>
          <div className="beatGridDisplay">
          <FinalGrid />
          </div>
          <br></br>
          <div className="keyboardDisplay">
          <Keyboard />
          </div>
          
          
        </b>
        </div>
      </Sidebar>
      </div>
    );
  }
}

export default LoopsSidebar;