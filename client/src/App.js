import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import FinalGrid from "./components/BeatGrid/FinalGrid"
import Keyboard from "./components/Keyboard"
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';
const Tone = require("tone")
const defaultSynth = new Tone.Synth().toMaster()
const AMSynth = new Tone.AMSynth().toMaster()
const DuoSynth = new Tone.DuoSynth().toMaster()
const FMSynth = new Tone.FMSynth().toMaster()
const MonoSynth = new Tone.MonoSynth().toMaster()
const PluckSynth = new Tone.PluckSynth().toMaster()
const MembraneSynth = new Tone.MembraneSynth().toMaster()
const synths = [defaultSynth, AMSynth, DuoSynth, FMSynth, MonoSynth, PluckSynth, MembraneSynth]



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact path="/dashboard"
            component={Dashboard}
            />
            <Route
            exact path="/"
            component={LandingPage}
            />
        </Switch>
      </div>
    </Router>

  )
}

export default App;
