import React from "react";
import Sidebar from "react-sidebar";
// import SidebarBtns from "../SidebarBtns";
import BeatGrid from "../BeatGrid";
import Keyboard from "../Keyboard";
import "./style.css"
// import Buttons from "../Buttons";
import KeyboardButton from "../Buttons/KeyboardBtn";
import BeatGridButton from "../Buttons/BeatGridBtn";
import RecordButton from "../Buttons/RecordBtn";
import SaveRecordingButton from "../Buttons/SaveRecordingBtn"

const mql = window.matchMedia(`(min-width: 800px)`);

class LoopsSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
      isHidden: true
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  toggleKeyboardHidden() {
    this.setState({
      keyboardIsHidden: !this.state.keyboardIsHidden
    })
  }

  toggleBeatGridHidden() {
    this.setState({
      beatGridIsHidden: !this.state.beatGridIsHidden
    })
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
          sidebar={<div className="sideBar">
            <b>
              <div className="container btnContainer">
                <div className="row">
                  <KeyboardButton addKeyboard={this.toggleKeyboardHidden.bind(this)} />
                </div>
                <div className="row">
                  <BeatGridButton addBeatGrid={this.toggleBeatGridHidden.bind(this)} />
                </div>
                <div className="row">
                  <RecordButton /*record={this.triggerRecordingState}*/ />
                </div>
                <div className="row">
                  <SaveRecordingButton /*saveRecording={this.triggerSaveRecordingState}*/ />
                </div>
              </div>
            </b>
          </div>}
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
        >
          <div className="musicComponents">
            <div>
              <b>
                <br>
                </br>
                <div className="beatGridDisplay">
                  {!this.state.beatGridIsHidden && <BeatGrid />}
                </div>
                <br>
                </br>
                <div className="keyboardDisplay">
                  {!this.state.keyboardIsHidden && <Keyboard />}
                </div>
              </b>
            </div>
          </div>
        </Sidebar>
      </div >
    );
  }
}

export default LoopsSidebar;