import React from "react"
import "./style.css"
import keys from "./keys.json"
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
const Tone = require("tone")


class  Keyboard extends React.Component{

render(){

    const synths = this.props.synths
    let synth = synths[0]

    var synthChange = function(index){
        synth = synths[index]
    }

    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('f4');
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: firstNote,
      lastNote: lastNote,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

   
    
    
    return(
        <div className="container">
         <Piano
            noteRange={{ first: firstNote, last: lastNote }}
            playNote={(midiNumber) => {
            console.log(midiNumber)
            switch(midiNumber){
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
      }}
      stopNote={(midiNumber) => {
        // Stop playing a given note - see notes below
        synth.triggerRelease()
      }}
      width={1000}
      keyboardShortcuts={keyboardShortcuts}
    />
        
        <button type="submit" className= "btn btn-warning synthButton" onClick={() => {synthChange(0)}}>Default Synth</button>
        <button type="submit" className= "btn btn-warning synthButton" onClick={() => {synthChange(1)}}>AM Synth</button>
        <button type="submit" className= "btn btn-warning synthButton" onClick={() => {synthChange(2)}}>Duo Synth </button>
        <button type="submit" className= "btn btn-warning synthButton" onClick={() => {synthChange(3)}}>FM Synth </button>
        <button type="submit" className= "btn btn-warning synthButton" onClick={() => {synthChange(4)}}>Mono Synth </button>
        <button type="submit" className= "btn btn-warning synthButton" onClick={() => {synthChange(5)}}>Pluck Synth </button>
        <button type="submit" className= "btn btn-warning synthButton" onClick={() => {synthChange(6)}}>Membrane Synth </button>


    </div>
    )
}}


export default Keyboard