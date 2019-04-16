import React from 'react';
import './App.css';
import FinalGrid from "./components/BeatGrid/FinalGrid"
import Keyboard from "./components/Keyboard"
const Tone = require("tone")
const defaultSynth = new Tone.Synth().toMaster()
const AMSynth = new Tone.AMSynth().toMaster()
const DuoSynth = new Tone.DuoSynth().toMaster()
const FMSynth = new Tone.FMSynth().toMaster()
const MonoSynth = new Tone.MonoSynth().toMaster()
const PluckSynth = new Tone.PluckSynth().toMaster()
const MembraneSynth = new Tone.MembraneSynth().toMaster()
const synths = [defaultSynth, AMSynth, DuoSynth, FMSynth, MonoSynth, PluckSynth, MembraneSynth]


function App () {

  return(
    <div>
    <FinalGrid />
    <Keyboard synths={synths}/>
    </div>
  )
}

export default App;
