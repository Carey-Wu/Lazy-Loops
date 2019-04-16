import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Keyboard from "./components/Keyboard"
import Keys from "./components/Keyboard/keys.json"

const Tone = require("tone")
const synth = new Tone.Synth().toMaster()



class App extends Component {

  render() {

    return (
      <Keyboard />
    )
  }
}

export default App;
