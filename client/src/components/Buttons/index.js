import React from "react";
import KeyboardButton from "./KeyboardBtn";
import BeatGridButton from "./BeatGridBtn";
import RecordButton from "./RecordBtn";
import SaveRecordingButton from "./SaveRecordingBtn";



function Buttons() {

    return (
        <div className="container btnContainer">
            <div className="row">
                <KeyboardButton addKeyboard={this.toggleKeyboardHidden} />
            </div>
            <div className="row">
                <BeatGridButton addBeatGrid={this.toggleBeatGridHidden} />
            </div>
            <div className="row">
                <RecordButton /*record={this.triggerRecordingState}*/ />
            </div>
            <div className="row">
                <SaveRecordingButton /*saveRecording={this.triggerSaveRecordingState}*/ />
            </div>
        </div>
    )
}
 export default Buttons;