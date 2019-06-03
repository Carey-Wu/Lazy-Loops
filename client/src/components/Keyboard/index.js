import React from "react"
import "./style.css"
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
const Tone = require("tone")
const defaultSynth = new Tone.Synth().toMaster()
const AMSynth = new Tone.AMSynth().toMaster()
const DuoSynth = new Tone.DuoSynth().toMaster()
const FMSynth = new Tone.FMSynth().toMaster()
const MonoSynth = new Tone.MonoSynth().toMaster()
const PluckSynth = new Tone.PluckSynth().toMaster()
const MembraneSynth = new Tone.MembraneSynth().toMaster()
const synths = [defaultSynth, AMSynth, DuoSynth, FMSynth, MonoSynth, PluckSynth, MembraneSynth]


class Keyboard extends React.Component {

    render() {

        let synth = synths[0]

        var synthChange = function (index) {
            synth = synths[index]
        }

        const firstNote = MidiNumbers.fromNote('c3');
        const lastNote = MidiNumbers.fromNote('f4');
        const keyboardShortcuts = KeyboardShortcuts.create({
            firstNote: firstNote,
            lastNote: lastNote,
            keyboardConfig: KeyboardShortcuts.HOME_ROW,
        });




        return (
            <div className="container keyboardContainer">
                <div>
                    <Piano
                        noteRange={{ first: firstNote, last: lastNote }}
                        playNote={(midiNumber) => {
                            console.log(midiNumber)
                            if(this.props.active){
                                switch (midiNumber) {
                                    case 48: synth.triggerAttack("C4")
                                        break;
                                    case 49: synth.triggerAttack("C#4")
                                        break;
                                    case 50: synth.triggerAttack("D4")
                                        break;
                                    case 51: synth.triggerAttack("Eb4")
                                        break;
                                    case 52: synth.triggerAttack("E4")
                                        break;
                                    case 53: synth.triggerAttack("F4")
                                        break;
                                    case 54: synth.triggerAttack("F#4")
                                        break;
                                    case 55: synth.triggerAttack("G4")
                                        break;
                                    case 56: synth.triggerAttack("Ab4")
                                        break;
                                    case 57: synth.triggerAttack("A4")
                                        break;
                                    case 58: synth.triggerAttack("Bb4")
                                        break;
                                    case 59: synth.triggerAttack("B4")
                                        break;
                                    case 60: synth.triggerAttack("C5")
                                        break;
                                    case 61: synth.triggerAttack("C#5")
                                        break;
                                    case 62: synth.triggerAttack("D5")
                                        break;
                                    case 63: synth.triggerAttack("Eb5")
                                        break;
                                    case 64: synth.triggerAttack("E5")
                                        break;
                                    case 65: synth.triggerAttack("F5")
                                        break;
                                }
                            }
                        }}
                        stopNote={(midiNumber) => {
                            // Stop playing a given note - see notes below
                            synth.triggerRelease()
                        }}
                        width={1250}
                        keyboardShortcuts={keyboardShortcuts}
                    />
                </div>
                <div className="synthBtnContainer text-center">
                    <button type="submit" className="btn btn-success synthButton text-center synthStart" onClick={() => { synthChange(0) }}>Default Synth</button>
                    <button type="submit" className="btn btn-success synthButton text-center" onClick={() => { synthChange(1) }}>AM Synth</button>
                    <button type="submit" className="btn btn-success synthButton text-center" onClick={() => { synthChange(2) }}>Duo Synth </button>
                    <button type="submit" className="btn btn-success synthButton text-center" onClick={() => { synthChange(3) }}>FM Synth </button>
                    <button type="submit" className="btn btn-success synthButton text-center" onClick={() => { synthChange(4) }}>Mono Synth </button>
                    <button type="submit" className="btn btn-success synthButton text-center" onClick={() => { synthChange(5) }}>Pluck Synth </button>
                    <button type="submit" className="btn btn-success synthButton text-center" onClick={() => { synthChange(6) }}>Membrane Synth </button>

                </div>



            </div>
        )
    }
}


export default Keyboard